"use client"

import { useEffect, useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Star, Heart, Calendar, MapPin, Utensils, Search, Filter } from "lucide-react"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectLabel } from "@/components/ui/select"
import { SelectGroup } from "@radix-ui/react-select"
import { ProfileContent } from "./profile-content"
import { useGetAllLocations } from "@/modules/locations/application/useGetAllLocations"
import { useGetAllCuisineTypes } from "@/modules/cuisines/application/useGetAllCuisineTypes"
import { useGetAllRestaurants } from "../application/useGetAllRestaurants"
import { RestaurantsContent } from "./restaurants-content"


export default function DashboardPageV() {
    const [tab, setTab] = useState("explorar")
    const [filters, setFilters] = useState({
        name: "",
        locationId: "",
        cuisineId: "",
    })

    const { data: locationsData } = useGetAllLocations();
    const { data: cuisinesData } = useGetAllCuisineTypes();
    const { data: restaurantsData } = useGetAllRestaurants(filters);

    const clearFilters = () => {
        setFilters({ name: "", locationId: "", cuisineId: "" })
    }

    return (
        <div className="min-h-screen">
            <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl font-bold tracking-tight">Restaurantes</h1>
                        <p className="text-muted-foreground">Explora y conecta con restaurantes locales</p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <Tabs value={tab} onValueChange={setTab} className="space-y-8">
                    <div className="flex justify-center">
                        <TabsList className="grid w-full max-w-md grid-cols-4 bg-muted/50">
                            <TabsTrigger
                                value="explorar"
                                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                            >
                                Explorar
                            </TabsTrigger>
                            <TabsTrigger
                                value="visitas"
                                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                            >
                                Visitas
                            </TabsTrigger>
                            <TabsTrigger
                                value="favoritos"
                                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                            >
                                Favoritos
                            </TabsTrigger>
                            <TabsTrigger
                                value="perfil"
                                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                            >
                                Perfil
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    <TabsContent value="explorar" className="space-y-6">
                        <Card className="border-0 shadow-sm bg-card/50">
                            <CardHeader className="">
                                <div className="flex items-center gap-2">
                                    <Filter className="h-5 w-5 text-muted-foreground" />
                                    <h3 className="font-semibold">Filtros</h3>
                                    {(filters.name || filters.locationId || filters.cuisineId) && (
                                        <Button variant="ghost" size="sm" onClick={clearFilters} className="ml-auto text-xs">
                                            Limpiar filtros
                                        </Button>
                                    )}
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                    <div className="relative col-span-1 md:col-span-2">
                                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                        <Input
                                            placeholder="Buscar restaurantes..."
                                            value={filters.name}
                                            onChange={(e) => setFilters((f) => ({ ...f, name: e.target.value }))}
                                            className="pl-10"
                                        />
                                    </div>
                                    <div className="col-span-1">

                                        <Select
                                            value={filters.locationId}
                                            onValueChange={(value) => setFilters((f) => ({ ...f, locationId: value }))}
                                        >
                                            <SelectTrigger className="w-full">
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="h-4 w-4 text-muted-foreground" />
                                                    <SelectValue placeholder="Todas las ubicaciones" />
                                                </div>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Ubicaciones</SelectLabel>
                                                    {locationsData?.map((loc) => (
                                                        <SelectItem key={loc.id} value={loc.id}>
                                                            {loc.name}
                                                        </SelectItem>
                                                    ))}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="col-span-1">
                                        <Select
                                            value={filters.cuisineId}
                                            onValueChange={(value) => setFilters((f) => ({ ...f, cuisineId: value }))}
                                        >
                                            <SelectTrigger className="w-full">
                                                <div className="flex items-center gap-2">
                                                    <Utensils className="h-4 w-4 text-muted-foreground" />
                                                    <SelectValue placeholder="Todos los tipos" />
                                                </div>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Tipo de cocina</SelectLabel>
                                                    {cuisinesData?.map((cui) => (
                                                        <SelectItem key={cui.id} value={cui.id}>
                                                            {cui.name}
                                                        </SelectItem>
                                                    ))}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                </div>
                            </CardContent>
                        </Card>

                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-xl font-semibold">{restaurantsData?.length ?? 0} restaurantes encontrados</h2>
                                <p className="text-sm text-muted-foreground">Ordenados por popularidad</p>
                            </div>
                        </div>

                        <RestaurantsContent
                            restaurants={restaurantsData}
                            onClearFilters={clearFilters}
                        />
                    </TabsContent>

                    <TabsContent value="visitas">
                        <Card className="border-dashed">
                            <CardContent className="flex flex-col items-center justify-center py-16">
                                <Calendar className="h-12 w-12 text-muted-foreground/50 mb-4" />
                                <h3 className="font-semibold text-lg mb-2">Mis Visitas</h3>
                                <p className="text-muted-foreground text-center max-w-sm">
                                    Aquí aparecerán tus visitas programadas y el historial de restaurantes visitados.
                                </p>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="favoritos">
                        <Card className="border-dashed">
                            <CardContent className="flex flex-col items-center justify-center py-16">
                                <Heart className="h-12 w-12 text-muted-foreground/50 mb-4" />
                                <h3 className="font-semibold text-lg mb-2">Restaurantes Favoritos</h3>
                                <p className="text-muted-foreground text-center max-w-sm">
                                    Guarda tus restaurantes favoritos para acceder rápidamente a ellos.
                                </p>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="perfil">
                        <ProfileContent />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}
