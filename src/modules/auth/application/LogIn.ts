import { AuthService } from '../domain/AuthService'

export class LogIn {
    constructor(private authService: AuthService) { }

    async execute(email: string, password: string): Promise<void> {
        await this.authService.signIn(email, password)
    }
}
