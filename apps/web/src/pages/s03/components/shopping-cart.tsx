import { formatPrice } from "@/utils/format";
import { Alert, AlertDescription, AlertTitle } from "@workspace/ui/components/alert";
import { Button } from "@workspace/ui/components/button";
import { ButtonGroup } from "@workspace/ui/components/button-group";
import { Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle } from "@workspace/ui/components/card";
import { Item, ItemActions, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemTitle } from "@workspace/ui/components/item";
import { Minus, Plus, SquareOff, X } from "lucide-react";
import { useCart } from "./cart-context";
import { prices } from "./data"



export const ShoppingCart = () => {

    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    Shopping Cart
                </CardTitle>
            </CardHeader>
            <CartDetails />
            <CardFooter className="flex-col gap-3">
                <Button className="w-full">
                    Checkout
                </Button>
            </CardFooter>
        </Card>
    )
}




const CartDetails = () => {
    const { cart, dispatch } = useCart();

    const getTotal = (): number => {

        return Object.entries(cart)
            .reduce((total, [item, quantity]) =>
                total + prices[item] * quantity,
                0
            )
    }

    const addItem = (title: string) => {
        dispatch({ type: "ADD", title });
    };

    const decreaseItem = (title: string) => {
        dispatch({ type: "DECREASE", title });
    };

    const removeItem = (title: string) => {
        dispatch({ type: "REMOVE", title });
    };

    const clearCart = () => {
        dispatch({ type: "CLEAR" });
    };

    return (
        <CardContent className="space-y-2">
            {
                Object.keys(cart).length === 0
                    ? (
                        <Alert className="capitalize">
                            <SquareOff />
                            <AlertTitle >
                                cart is empty.
                            </AlertTitle>
                            <AlertDescription>
                                let's buy something...
                            </AlertDescription>
                        </Alert>
                    )
                    : (
                        <div className="space-y-4">
                            <Item>
                                <ItemContent>
                                    <ItemTitle>
                                        Items in Cart
                                    </ItemTitle>
                                </ItemContent>
                                <CardAction>
                                    <Button
                                        className="text-muted-foreground"
                                        variant={"ghost"}
                                        onClick={clearCart}
                                    >
                                        clear all
                                    </Button>
                                </CardAction>
                            </Item>
                            <ItemGroup>
                                {
                                    Object.entries(cart).map(([item, quantity]) => (
                                        <Item key={item} variant={"muted"} size={"xs"}>
                                            <ItemMedia variant={"icon"}>
                                                <Button
                                                    variant={"ghost"}
                                                    size={"icon"}
                                                    onClick={() => removeItem(item)}
                                                >
                                                    <X />
                                                </Button>
                                            </ItemMedia>
                                            <ItemContent>
                                                <ItemTitle>
                                                    {item}
                                                </ItemTitle>
                                                <ItemDescription>
                                                    {quantity}
                                                    {" "}
                                                    x
                                                    {" "}
                                                    {formatPrice(prices[item])}
                                                </ItemDescription>
                                            </ItemContent>
                                            <ItemActions>
                                                <ButtonGroup aria-label="Button group">
                                                    <Button onClick={() => decreaseItem(item)}>
                                                        <Minus />
                                                    </Button>
                                                    <Button onClick={() => addItem(item)}>
                                                        <Plus />
                                                    </Button>
                                                </ButtonGroup>

                                            </ItemActions>
                                        </Item>
                                    ))
                                }
                            </ItemGroup>
                            <Total total={getTotal()} />
                        </div>

                    )
            }
        </CardContent>
    )
}

const Total = ({ total }: { total: number }) => (
    <Item
        variant="outline"
        className="justify-between"
    >
        <ItemDescription>
            total
        </ItemDescription>
        <ItemTitle>
            {formatPrice(total)}
        </ItemTitle>
    </Item>
)