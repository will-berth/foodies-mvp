"use client"

import { useGetUserData } from "@/modules/auth/application/useGetUserData";


export function UserBanner(){
    const { data: userData } = useGetUserData();
    
    return (
        <div className="">
            {userData?.name}
        </div>
    )
}