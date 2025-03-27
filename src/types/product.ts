export interface ProductSpecifications {
  color: string;
  camera: string;
  battery: string;
  display: string;
  storage: string;
  processor: string;
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
