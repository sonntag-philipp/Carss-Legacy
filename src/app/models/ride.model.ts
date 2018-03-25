export interface RideModel {
  id?: number;
  user_id?: string;
  origin: string;
  destination: string;
  creation?: string;
  description: string;
  rating?: number;
}
