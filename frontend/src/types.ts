export interface Place {
  id: string;
  name: string;
  image_url: string;
  location: string;
  availability: boolean;
  rating: number;
  price_per_night: string;
  amenities: string[] | string;
}