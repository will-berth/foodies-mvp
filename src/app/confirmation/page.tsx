"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MailCheck } from "lucide-react"
import { useRouter } from "next/navigation"

export default function ConfirmationPage() {
    const router = useRouter()

    return (
        <div className="flex items-center justify-center min-h-screen bg-background">
            <Card className="max-w-md w-full">
                <CardHeader className="flex flex-col items-center gap-2">
                    <MailCheck className="h-12 w-12 text-primary" />
                    <CardTitle>¡Registro exitoso!</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                    <p>
                        Te hemos enviado un correo electrónico para confirmar tu cuenta.
                        <br />
                        Por favor revisa tu bandeja de entrada.
                    </p>
                    <Button variant="outline" onClick={() => router.push("/login")}>
                        Ir a iniciar sesión
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}