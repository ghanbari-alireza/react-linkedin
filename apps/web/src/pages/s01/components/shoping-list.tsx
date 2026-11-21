import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card";
import { Item, ItemContent, ItemGroup, ItemTitle } from "@workspace/ui/components/item";

interface Props {
    items: string[];
}

export const ShoppingList = ({ items }: Props) => {

    const extendedItems = [...items, "Doogh"]
    return (
        <Card>
            <CardHeader>
                <CardTitle>Shopping List</CardTitle>
            </CardHeader>
            <CardContent>
                <ItemGroup>
                    {
                        extendedItems.map((item, index) =>
                            <Item variant={"outline"} key={index}>
                                <ItemContent>
                                    <ItemTitle>{item}</ItemTitle>
                                </ItemContent>
                            </Item>
                        )
                    }
                </ItemGroup>
            </CardContent>
        </Card>
    )
}
