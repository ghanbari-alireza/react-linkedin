import type { Product } from "@/models/product";
import { Button } from "@workspace/ui/components/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@workspace/ui/components/card";
import { useCart } from "./cart-context";
import { prices } from "./data";
import { formatPrice } from "@/utils/format";
import { ButtonGroup } from "@workspace/ui/components/button-group";
import { Minus, Plus, Trash } from "lucide-react";
export const ProductCard = ({ image, title }: Product) => {


    const { cart, dispatch } = useCart();

    const addItem = () => {
        dispatch({
            title,
            type: "ADD"
        })
    }
    const decreaseItem = () => {
        dispatch({
            title,
            type: "DECREASE"
        })
    }


    return (
        <Card className="pt-0 max-h-min">
            <ProductImage image={image} />
            <CardHeader>
                <CardTitle>
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                {cart[title] >= 1
                    ? `${cart[title]} x ${formatPrice(prices[title])}`
                    : formatPrice(prices[title])
                }

            </CardContent>
            <CardFooter>
                <ButtonGroup aria-label="Button group">
                    {
                        cart[title] >= 1 && <Button onClick={decreaseItem}>
                            {
                                cart[title] == 1 ? <Trash /> : <Minus />
                            }
                        </Button>
                    }
                    <Button onClick={addItem}>
                        <Plus />
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}


const ProductImage = ({ image }: { image: string }) => {

    return (
        <div className="relative">
            <img
                src={image}
                alt="property image"
                className="z-20 aspect-video w-full object-cover"
            />
        </div>
    )
}