'use client'

import { createClient } from '@/lib/supabase/client'
import { IRestaurantRepository } from '../domain/RestaurantRepository'
import { Restaurant } from '../domain/Restaurant'
import { RestaurantFilters } from '../domain/RestaurantFilters'

export class SupabaseRestaurantRepository implements IRestaurantRepository {
    private supabase = createClient()

    async getAll(filters: RestaurantFilters): Promise<Restaurant[]> {
        let query = this.supabase
            .from('restaurants_with_ratings')
            .select(`*`)

        if (filters.locationId) {
            query = query.eq('location_id', filters.locationId)
        }

        if (filters.cuisineId) {
            query = query.eq('cuisine_id', filters.cuisineId)
        }

        if (filters.name) {
            query = query.ilike('name', `%${filters.name}%`)
        }

        const { data, error } = await query
        if (error) throw new Error(error.message)

        return data as Restaurant[];
    }
}
