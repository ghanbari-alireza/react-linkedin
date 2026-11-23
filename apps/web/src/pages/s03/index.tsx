import { CartProvider } from "./components/cart-context";
import { data } from "./components/data";
import { ProductList } from "./components/product-list";
import { ShoppingCart } from "./components/shopping-cart";

export default function S03() {
    return (
        <CartProvider>
            <div className="container mx-auto p-4 space-y-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <ShoppingCart />
                <ProductList
                    data={data}
                    className="col-span-full sm:col-span-2"
                />
            </div>
        </CartProvider>
    )
}