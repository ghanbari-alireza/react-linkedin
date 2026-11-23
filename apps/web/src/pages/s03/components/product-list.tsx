import type { Product } from "@/models/product";
import { ProductCard } from "./product-card";
import type { ComponentProps } from "react";
import { cn } from "@workspace/ui/lib/utils";


interface Props {
    data: Product[],
    className: ComponentProps<"div">["className"]
}

export const ProductList = ({ data, className }: Props) => {
    return (
        <div className={cn("grid grid-cols-2 sm:grid-cols-4 gap-4", className)}>
            {
                data.map(item => (
                    <ProductCard key={item.title} {...item} />
                ))
            }
        </div>
    )
}