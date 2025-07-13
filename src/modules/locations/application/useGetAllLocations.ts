import { useQuery } from "@tanstack/react-query";
import { locationService } from "../infrastructure/locationServiceFactory";
import { GetAllLocations } from "./GetAllLocations";

const getAllLocations = new GetAllLocations(locationService);

export function useGetAllLocations(){
    return useQuery({
        queryKey: ['get-all-locations'],
        queryFn: () => getAllLocations.execute()
    })
}