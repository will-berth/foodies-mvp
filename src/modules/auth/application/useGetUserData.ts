import { useQuery } from "@tanstack/react-query";
import { GetUserData } from "./GetUserData";
import { authService } from "../infrastructure/authServiceFactory";

const registerUser = new GetUserData(authService)

export function useGetUserData(){
    return useQuery({
        queryKey: ['get-user-data'],
        queryFn: () => registerUser.execute() 
    })
}