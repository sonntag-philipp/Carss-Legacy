export interface ProfileModel {
  // Name-information
  name: string;
  surname: string;

  // Personal-information
  sex: string;
  age: number;
  address: string;

  // School-information
  school: string;
  class: string;

  // Description of the user. Lines are separated with \n.
  description: string;
}
