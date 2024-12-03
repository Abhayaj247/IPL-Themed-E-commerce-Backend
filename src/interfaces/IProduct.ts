import { IPLTeam, ProductCategory } from "../config/constants";

export interface IProduct {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: ProductCategory;
  team: IPLTeam;
  createdAt: Date;
  updatedAt: Date;
  sizes?: string[];
}
