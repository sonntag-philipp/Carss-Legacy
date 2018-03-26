export interface UserModel {
  name: string;
  surname: string;
  description: string;
  address: string;
  avatar: string;

  permission_group?: string;
  registration?: string;
  last_login?: string;
  rating?: number;
  id?: string;
}
