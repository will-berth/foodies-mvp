
export interface AuthService {
    signUp(email: string, password: string): Promise<void>
    signIn(email: string, password: string): Promise<void>
}