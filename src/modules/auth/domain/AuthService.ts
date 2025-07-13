import { User } from "./User"

export interface AuthService {
    signUp(email: string, password: string, name: string): Promise<void>
    signIn(email: string, password: string): Promise<void>
    getCurrentUser(): Promise<User | null>
}