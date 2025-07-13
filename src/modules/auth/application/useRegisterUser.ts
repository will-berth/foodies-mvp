import { useMutation } from '@tanstack/react-query'
import { authService } from '../infrastructure/authServiceFactory'
import { RegisterUser } from './RegisterUser'

const registerUser = new RegisterUser(authService)

export function useRegisterUser() {
    return useMutation({
        mutationFn: ({ email, password, name }: { email: string; password: string, name: string }) => registerUser.execute(email, password, name),
    })
}
