import { Button } from "@/components/ui/button";
import { LogInCard } from "@/modules/auth/ui/login-card";
import Image from "next/image";


export default function LoginPage() {

    return (
        <div className="container m-auto h-screen">
            <div className="flex flex-col items-center justify-center h-full gap-5">
                <Image
                    src="/images/foodieslogo.webp"
                    alt="Mi imagen"
                    width={300}
                    height={100}
                    className=""
                />
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-bold">Iniciar Sesion</h2>
                    <p className="text-muted-foreground">Ingresa a tu cuenta para continuar</p>
                </div>
                <LogInCard/>
            </div>
        </div>
    )
}