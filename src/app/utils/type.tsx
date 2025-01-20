import { StaticImageData } from "next/image";
export type Product = {
  id: number;
  title: string;
  img: string[] | StaticImageData | undefined;
  slug: string;
  price: number;
  category: string;
  description: string;
  size: string[];
  color: string[];
  qty: number;
  discount?: number;
  isBestSelling? :boolean
  isGearUp? : boolean
};
export type Cart = {
  name: string;
  description: string;
  id: number;
  title: string;
  img: string[] | StaticImageData | undefined;
  slug: string;
  price: number;
  category: string; 
  size: string;
  qty: number;
  discount?: number;
  color: string;
  uuid : number | string | undefined
};
