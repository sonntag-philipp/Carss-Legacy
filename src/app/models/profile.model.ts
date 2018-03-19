export interface ProfileModel {

  // Google user ID of the profile.
  id: string;

  // Profile-Image URL.
  image_url: string;

  // Name-information
  name: string;
  surname: string;

  // Description of the user. Lines are separated with \n.
  description: string;

  // Rating of the profile given by the users.
  rating: number;

  // Address of the profile saved as an google maps place id.
  place_id: string;
}
