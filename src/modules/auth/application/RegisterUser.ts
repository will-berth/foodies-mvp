import { AuthService } from '../domain/AuthService'

export class RegisterUser {
    constructor(private authService: AuthService) { }

    async execute(email: string, password: string): Promise<void> {
        await this.authService.signUp(email, password)
    }
}
