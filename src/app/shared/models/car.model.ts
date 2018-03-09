/**
 * Represents the Car Class which is exchanged with the database.
 */
export interface CarModel {

  brand: string;
  model: string;
  color: string;
  seats: number;
  year: string;
  misc: string;
  doors: number;

}
