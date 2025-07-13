import { ICuisineRepository } from '../domain/CuisinesRepository'
import { Cuisine } from '../domain/Cuisines'

export class GetAllCuisineTypes {
    constructor(private cuisineRepo: ICuisineRepository) { }

    async execute(): Promise<Cuisine[]> {
        return this.cuisineRepo.getAll()
    }
}
