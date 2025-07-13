import { Location } from './Location'

export interface ILocationRepository {
    getAll(): Promise<Location[]>
}
