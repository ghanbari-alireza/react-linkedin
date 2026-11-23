import type { Product } from "@/models/product";

export const data: Product[] = [
    {
        image: "images/banana.webp",
        title: "Banana"
    },
    {
        title: "Apple",
        image: "images/apple.jpg"
    },
    {
        title: "Orange",
        image: "images/orange.jpg"
    }
]


type Prices = Record<string, number>;

export const prices: Prices = {
    Orange: 0.3,
    Banana: 0.35,
    Apple: 0.5
}