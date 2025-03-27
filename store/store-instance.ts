import { User, Product } from "@/types/collections";
import { createCollectionStore } from "./collection-store";
import { Wallpaper } from "@/config/content/wallpapers";
import { AxiosResponse } from "axios";

// Create a store for "users" collection

let responseToUserData = (response: AxiosResponse) => {
  return response.data;
};

let responseToWallpaperData = (response: AxiosResponse) => {
  if (response.data) {
    if (response.data.data) {
      return response.data.data;
    }
  }
};

let responseToProductData = (response: AxiosResponse) => {
  if (response.data) {
    if (response.data.data) {
      return response.data.data;
    }
  }
};

export const usersStore = createCollectionStore<User>(
  "users",
  "users",
  responseToUserData
);

// Create a store for "wallpapers" collection
export const wallpapersStore = createCollectionStore<Wallpaper>(
  "wallpapers",
  "wallpapers",
  responseToWallpaperData
);

// Create a store for "products" collection
export const productStore = createCollectionStore<Product>(
  "products",
  "products",
  responseToProductData
);
