import { useMutation } from '@tanstack/react-query'
import { authService } from '../infrastructure/authServiceFactory'
import { RegisterUser } from './RegisterUser'

const registerUser = new RegisterUser(authService)

export function useRegisterUser() {
    return useMutation({
        mutationFn: ({ email, password }: { email: string; password: string }) => registerUser.execute(email, password),
    })
}
