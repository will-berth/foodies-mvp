// import { createClient } from "@/lib/supabase/server";
import { createClient } from "@/lib/supabase/client";
import { AuthService } from "../domain/AuthService";


export class SupabaseAuthService implements AuthService {
    private supabase = createClient();

    async signUp(email: string, password: string): Promise<void> {
        // const supabase = await createClient()
        const { error } = await this.supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: `${window.location.origin}/dashboard`,
            },
        })
        
        if (error) throw new Error(error.message);
    }
    
    async signIn(email: string, password: string): Promise<void> {
        const { error } = await this.supabase.auth.signInWithPassword({email, password})
        if (error) throw new Error(error.message)
    }
}