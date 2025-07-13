import { ILocationRepository } from '../domain/LocationRepository'
import { Location } from '../domain/Location'

export class GetAllLocations {
    constructor(private locationRepo: ILocationRepository) { }

    async execute(): Promise<Location[]> {
        return this.locationRepo.getAll()
    }
}
