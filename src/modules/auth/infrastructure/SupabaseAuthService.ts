// import { createClient } from "@/lib/supabase/server";
import { createClient } from "@/lib/supabase/client";
import { AuthService } from "../domain/AuthService";
import { User } from "../domain/User";


export class SupabaseAuthService implements AuthService {
    private supabase = createClient();

    async signUp(email: string, password: string, name: string): Promise<void> {
        // const supabase = await createClient()
        const { error } = await this.supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: process.env.NEXT_PUBLIC_SUPABASE_REDIRECT_URL,
                data: {
                    full_name: name
                }
            },
        })

        if (error) throw new Error(error.message);
    }

    async signIn(email: string, password: string): Promise<void> {
        const { error } = await this.supabase.auth.signInWithPassword({ email, password })
        if (error) throw new Error(error.message)
    }

    async getCurrentUser(): Promise<User | null> {
        const { data, error } = await this.supabase.auth.getUser()
        if (error || !data.user) return null

        return {
            id: data.user.id,
            email: data.user.email!,
            name: data.user.user_metadata.full_name
        }
    }
}