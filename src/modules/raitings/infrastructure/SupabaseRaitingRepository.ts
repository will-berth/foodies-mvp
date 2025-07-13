'use client'

import { createClient } from '@/lib/supabase/client'
import { IRatingRepository } from '../domain/RaitingRepository'
import { Rating } from '../domain/Raiting'

export class SupabaseRaitingRepository implements IRatingRepository {
    private supabase = createClient()

    async getByRestaurantId(restaurantId: string): Promise<Rating[]> {
        const { data, error } = await this.supabase
            .from('raitings')
            .select('*')
            .eq('restaurant_id', restaurantId)
            .order('created_at', { ascending: false })

        if (error) throw new Error(error.message)

        return data as Rating[]
    }
}
