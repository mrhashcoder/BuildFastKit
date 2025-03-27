// types/user.ts

export interface User {
  id: number;
  documentId: string;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  publishedAt: string; // ISO date string
}

export interface Wallpaper {
  id: number;
  documentId: string;
  name: string;
  description: string;
  url: string;
  story: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  publishedAt: string; // ISO date string
  type: string;
}

export interface ProductSpecifications {
  [key: string]: string | number | boolean;
}

export interface Product {
  id: number;
  documentId: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  category: string;
  brand: string;
  sku: string;
  stock: number;
  specifications: ProductSpecifications;
  rating: number;
  reviewCount: number;
  isFeatured: boolean;
  isOnSale: boolean;
  discountPercentage: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  productUrl: string;
  affiliateUrl: string;
  images: string[];
}
