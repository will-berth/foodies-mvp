"use client"

import { useState, useEffect } from "react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Star, User, Loader2 } from "lucide-react"
import { Restaurant } from "../domain/Restaurant"
import { useGetRaitingsByRestaurant } from "@/modules/raitings/application/useGetRaitingsByRestaurant"

interface RestaurantCommentsSheetProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  restaurant: Restaurant| null
}

export function RestaurantCommentsSheet({ isOpen, onOpenChange, restaurant }: RestaurantCommentsSheetProps) {
  const [ currentRestaurantId, setCurrentRestaurantId ] = useState('');
  const { data: raitingData, isLoading: raitingIsLoading} = useGetRaitingsByRestaurant(currentRestaurantId)

  useEffect(() => {
    if(restaurant){
        setCurrentRestaurantId(restaurant.id)
    }
  }, [restaurant])

  if (!restaurant) return null

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto">
        <SheetHeader className="space-y-3">
          <div className="flex items-start gap-3">
            <img
              src={restaurant.banner_url}
              alt={restaurant.name}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div className="flex-1 min-w-0">
              <SheetTitle className="text-xl">{restaurant.name}</SheetTitle>
              <SheetDescription className="text-sm">
                {restaurant.cuisine_name} • {restaurant.location_name}
              </SheetDescription>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.round(restaurant.average_rating || 0)
                          ? "text-yellow-500 fill-yellow-500"
                          : "text-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium">{restaurant.average_rating || 0}</span>
                <span className="text-xs text-muted-foreground">({restaurant.raiting_count} comentarios)</span>
              </div>
            </div>
          </div>
        </SheetHeader>

        <div className="mt-6 space-y-4 px-5">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Comentarios</h3>
            <Button variant="outline" size="sm">
              Escribir reseña
            </Button>
          </div>

          {raitingIsLoading && (
            <div className="space-y-4 px-5">
              <div className="flex items-center justify-center py-8">
                <div className="flex flex-col items-center gap-3">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                  <p className="text-sm text-muted-foreground">Cargando comentarios...</p>
                </div>
              </div>

              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <Skeleton className="w-10 h-10 rounded-full" />
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <Skeleton className="h-4 w-24" />
                        <div className="flex gap-1">
                          {Array.from({ length: 5 }).map((_, j) => (
                            <Skeleton key={j} className="h-3 w-3" />
                          ))}
                        </div>
                      </div>
                      <Skeleton className="h-3 w-32" />
                      <div className="space-y-1">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                      </div>
                      <div className="flex gap-4">
                        <Skeleton className="h-6 w-16" />
                        <Skeleton className="h-6 w-20" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!raitingIsLoading && raitingData && (
            <div className="space-y-4">
              {raitingData.length > 0 ? (
                raitingData.map((raiting) => (
                  <div key={raiting.id} className="border rounded-lg p-4 space-y-3 animate-in fade-in-0 duration-300">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-medium text-primary">{raiting.id.substring(0, 2)}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium text-sm">{raiting.id.substring(0, 8)}</h4>
                          <div className="flex items-center">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-3 w-3 ${
                                  i < raiting.raiting ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground/30"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {new Date(raiting.created_at).toLocaleDateString("es-ES", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                        <p className="text-sm leading-relaxed">{raiting.comment}</p>
                        <div className="flex items-center gap-4 mt-3">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-auto p-0 text-xs text-muted-foreground hover:text-foreground"
                          >
                            👍 Útil (10)
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-auto p-0 text-xs text-muted-foreground hover:text-foreground"
                          >
                            Responder
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-muted-foreground animate-in fade-in-0 duration-300">
                  <User className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p>Aún no hay calificaciones para este restaurante.</p>
                  <p className="text-xs mt-1">¡Sé el primero en dejar una reseña!</p>
                </div>
              )}
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
