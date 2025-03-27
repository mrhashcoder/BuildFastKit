"use client";
import React, { useEffect } from "react";
import ProductsManager from "@/components/feature/products-manager";
import { productStore } from "@/store/store-instance";

function ProductsPage() {
  const productIds = productStore.useEntityIds();

  return <ProductsManager productIds={productIds} />;
}

export default ProductsPage;
