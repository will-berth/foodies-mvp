import { useQuery } from "@tanstack/react-query";
import { cuisineService } from "../infrastructure/cuisinesServiceFactory";
import { GetAllCuisineTypes } from "./GetAllCuisineTypes";

const getAllCuisineTypes = new GetAllCuisineTypes(cuisineService);

export function useGetAllCuisineTypes(){
    return useQuery({
        queryKey: ['get-all-cuisine-types'],
        queryFn: () => getAllCuisineTypes.execute()
    })
}