import { useQuery } from "@tanstack/react-query";
import { raitingService } from "../infrastructure/raitingServiceFactory";
import { GetRatingsByRestaurant } from "./GetRaitingsByRestaurant";

const getRaitingsByRestaurant = new GetRatingsByRestaurant(raitingService);

export function useGetRaitingsByRestaurant(id: string){
    return useQuery({
        queryKey: ['get-raitings-by-restaurant', id],
        queryFn: () => getRaitingsByRestaurant.execute(id),
        enabled: !!id
    })
}