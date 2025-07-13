import { useQuery } from "@tanstack/react-query";
import { restaurantService } from "../infrastructure/restaurantServiceFactory";
import { GetAllRestaurants } from "./GetAllRestaurants";
import { RestaurantFilters } from "../domain/RestaurantFilters";

const getAllRestaurants = new GetAllRestaurants(restaurantService);

export function useGetAllRestaurants(filters: RestaurantFilters){
    return useQuery({
        queryKey: ['get-all-restaurants', filters],
        queryFn: () => getAllRestaurants.execute(filters)
    })
}