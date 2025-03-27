import React from "react";
import { productStore } from "@/store/store-instance";
import ProductCard from "@/components/main/cards/product-card";
import { useRecoilValue } from "recoil";
import { FetchState } from "@/store/collection-store";
import { Skeleton } from "@/components/ui/skeleton";

interface ProductsManagerProps {
  productIds: (string | number)[];
}

function ProductsManager({ productIds }: ProductsManagerProps) {
  const products = useRecoilValue(
    productStore.aggregatedEntitiesSelector(productIds)
  );

  if (!products) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="space-y-4">
            <Skeleton className="aspect-square w-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Products</h2>
        <div className="text-sm text-gray-500">
          Showing {products.length} products
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsManager;
