import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar, Eye, Heart, Star, Utensils } from "lucide-react";
import { Restaurant } from "../domain/Restaurant";

interface RestaurantsContentProps {
    restaurants: Restaurant[] | undefined;
    onClearFilters: () => void;
    handleViewComments: (restaurant: Restaurant) => void;
}

export function RestaurantsContent({
    restaurants,
    onClearFilters,
    handleViewComments
}: RestaurantsContentProps) {
    if (restaurants?.length === 0) {
        return (
            <Card className="border-dashed">
                <CardContent className="flex flex-col items-center justify-center py-12">
                    <Utensils className="h-12 w-12 text-muted-foreground/50 mb-4" />
                    <h3 className="font-semibold text-lg mb-2">No se encontraron restaurantes</h3>
                    <p className="text-muted-foreground text-center max-w-sm">
                        Intenta ajustar tus filtros para encontrar más opciones
                    </p>
                    <Button variant="outline" onClick={onClearFilters} className="mt-4 bg-transparent">
                        Limpiar filtros
                    </Button>
                </CardContent>
            </Card>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {restaurants?.map((restaurant) => (
                <Card
                    key={restaurant.id}
                    className="group overflow-hidden border-0 shadow-sm hover:shadow-md transition-all duration-200 bg-card"
                >
                    <CardHeader className="p-0 relative">
                        <div className="aspect-[4/3] overflow-hidden">
                            <img
                                src={restaurant.banner_url || "/placeholder.svg"}
                                alt={restaurant.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                            />
                        </div>
                        <Button
                            variant="secondary"
                            size="icon"
                            className="absolute top-3 right-3 h-8 w-8 bg-background/80 backdrop-blur-sm hover:bg-background/90"
                        >
                            <Heart className="h-4 w-4" />
                        </Button>
                    </CardHeader>

                    <CardContent className="p-4 space-y-3">
                        <div className="space-y-1">
                            <h3 className="font-semibold text-lg leading-tight">{restaurant.name}</h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <span>{restaurant.cuisine_name}</span>
                                <span>•</span>
                                <span>{restaurant.location_name}</span>
                            </div>
                            <p className="text-xs text-muted-foreground">{restaurant.address}</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="flex items-center">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`h-3.5 w-3.5 ${i < Math.round(restaurant?.average_rating || 0)
                                            ? "text-yellow-500 fill-yellow-500"
                                            : "text-muted-foreground/30"
                                            }`}
                                    />
                                ))}
                            </div>
                            <span className="text-sm font-medium">{restaurant.average_rating || 0}</span>
                            <span className="text-xs text-muted-foreground">({restaurant.raiting_count})</span>

                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6 ml-auto hover:bg-muted/50"
                                onClick={() => handleViewComments(restaurant)}
                            >
                                <Eye className="h-4 w-4 text-muted-foreground" />
                            </Button>
                        </div>

                        <Button size="sm" className="w-full gap-2 bg-primary hover:bg-primary/90">
                            <Calendar className="h-4 w-4" />
                            Programar visita
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}