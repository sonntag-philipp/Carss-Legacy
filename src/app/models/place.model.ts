export interface PlaceModel {

  // Google Place ID:
  // https://developers.google.com/places/place-id?hl=en
  id?: string;

  // Latitude and longitude of the place.
  lat: number;
  lng: number;

  formattedAddress?: string;
  addressComponents?: string[];
}
