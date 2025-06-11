export interface Place{
  id:number;
  name: string;
  location: string;
  availability: boolean;
  rating: number;
  price_per_night: string;
  amenities: string[] | string;
  address:string;
  description:string;
  image_url: string;
}

export interface PlaceData {
  name: string;
  location: string;
  address: string;
  description: string;
  amenities: string;
  rating: string;
  price_per_night: string;
  availability: boolean;
}