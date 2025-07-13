import { Button } from "@/components/ui/button";
import { SignUpCard } from "@/modules/auth/ui/sign-up-card";
import Image from "next/image";


export default function SignUpPage() {

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
                    <h2 className="text-2xl font-bold">Únete ahora</h2>
                    <p className="text-muted-foreground">Registra una cuenta para poder ingresar</p>
                </div>
                <SignUpCard></SignUpCard>
            </div>
        </div>
    )
}