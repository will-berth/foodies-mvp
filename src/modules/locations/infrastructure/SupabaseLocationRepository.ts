'use client'

import { createClient } from '@/lib/supabase/client'
import { ILocationRepository } from '../domain/LocationRepository'
import { Location } from '../domain/Location'

export class SupabaseLocationRepository implements ILocationRepository {
    private supabase = createClient()

    async getAll(): Promise<Location[]> {
        const { data, error } = await this.supabase
            .from('locations')
            .select('id, name, country')
        if (error) throw new Error(error.message)
        return data as Location[]
    }
}
