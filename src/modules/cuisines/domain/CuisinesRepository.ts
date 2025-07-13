import { Cuisine } from './Cuisines'

export interface ICuisineRepository {
    getAll(): Promise<Cuisine[]>
}
