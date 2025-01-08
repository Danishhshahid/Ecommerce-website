import { StaticImageData } from "next/image";

export type Product = {
  id: number;
  title: string;
  img?: string[] | StaticImageData | undefined;
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
  id: number;
  title: string;
  img?: string[] | StaticImageData | undefined;
  slug: string;
  price: number;
  category: string; 
  size: string;
  quantity: number;
  discount?: number;
};
