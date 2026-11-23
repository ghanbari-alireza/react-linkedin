import type { Product } from "./product";

export interface Order {
    product: Product;
    price: number;
    quantity: number;
}