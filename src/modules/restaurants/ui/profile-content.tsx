import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useGetUserData } from "@/modules/auth/application/useGetUserData";

export function ProfileContent() {
    const { data: profile, isLoading } = useGetUserData();

    return (
        <Card className="border-dashed">
            <CardContent className="flex flex-col items-center justify-center py-16">
                {isLoading ? (
                    <p>Cargando perfil...</p>
                ) : profile ? (
                    <>
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <span className="text-primary font-semibold">{profile.name.charAt(0)}</span>
                        </div>
                        <h3 className="font-semibold text-lg mb-2">{profile.name}</h3>
                        <p className="text-muted-foreground text-center max-w-sm">{profile.email}</p>
                    </>
                ) : (
                    <p>Error al cargar el perfil.</p>
                )}
            </CardContent>
        </Card>
    );
}
