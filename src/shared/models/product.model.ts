import {Pakket} from "./pakket.model";

export class Product {
  constructor(public naam: string, public pakketten: Pakket[]) {
  }
}
