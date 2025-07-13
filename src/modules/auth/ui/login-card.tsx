"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRegisterUser } from "../application/useRegisterUser"
import { useEffect } from "react"
import { Loader2 } from "lucide-react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { useLogIn } from "../application/useLogIn"

const signUpSchema = z.object({
  email: z.email({ message: "Correo inválido" }),
  password: z.string().min(6, { message: "Mínimo 6 caracteres" }),
})

type SignUpFormValues = z.infer<typeof signUpSchema>

export function LogInCard() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
  })
  const router = useRouter()
  const { mutate, isPending } = useLogIn();

  const onSubmit = (data: SignUpFormValues) => {
    mutate(data, {
      onError: (error) => {
        toast.error(error.message)
      }, 
      onSuccess: () => {
        router.push('/dashboard')
      }
    })
  }

  return (
    <Card className="w-full max-w-sm">
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                id="email"
                type="email"
                placeholder="email@example.com"
                {...register("email")}
              />
              {errors.email && (
                <span className="text-xs text-red-500">{errors.email.message}</span>
              )}
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Contraseña</Label>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="*******"
                {...register("password")}
              />
              {errors.password && (
                <span className="text-xs text-red-500">{errors.password.message}</span>
              )}
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full" onClick={handleSubmit(onSubmit)} disabled={isPending}>
          {isPending ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : null}
          Iniciar Sesion
        </Button>
        <Separator className="my-4" />
        <p className="text-sm text-center text-muted-foreground">
          ¿No tienes una cuenta?{" "}
          <a href="/signup" className="text-primary hover:underline">
            Registrate
          </a>
        </p>
      </CardFooter>
    </Card>
  )
}
