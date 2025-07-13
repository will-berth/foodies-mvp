import { useMutation } from '@tanstack/react-query'
import { authService } from '../infrastructure/authServiceFactory'
import { RegisterUser } from './RegisterUser'
import { LogIn } from './LogIn'

const login = new LogIn(authService)

export function useLogIn() {
    return useMutation({
        mutationFn: ({ email, password }: { email: string; password: string }) => login.execute(email, password),
    })
}
