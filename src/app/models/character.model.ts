import { Gender, Status, Species, Location } from '../interfaces/interfaces';
export class Character {
  constructor(
    public id: number,
    public name: string,
    public status: Status,
    public species: Species,
    public type: string,
    public gender: Gender,
    public origin: Location,
    public location: Location,
    public image: string,
    public episode: string[],
    public url: string,
    public created: Date
  ) {}
}