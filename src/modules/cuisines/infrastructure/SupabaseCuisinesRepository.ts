'use client'

import { createClient } from '@/lib/supabase/client'
import { ICuisineRepository } from '../domain/CuisinesRepository'
import { Cuisine } from '../domain/Cuisines'

export class SupabaseCuisineRepository implements ICuisineRepository {
    private supabase = createClient()

    async getAll(): Promise<Cuisine[]> {
        const { data, error } = await this.supabase
            .from('cuisine_types')
            .select('id, name')
        if (error) throw new Error(error.message)
        return data as Cuisine[]
    }
}
