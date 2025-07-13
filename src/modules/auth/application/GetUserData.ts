import { AuthService } from '../domain/AuthService'
import { User } from '../domain/User'

export class GetUserData {
    constructor(private authService: AuthService) { }

    async execute(): Promise<User | null> {
        return await this.authService.getCurrentUser()
    }
}
