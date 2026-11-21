import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card";
import { Item, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemTitle } from "@workspace/ui/components/item";
import { Car } from "lucide-react";


type Make = "Toyota" | "Honda" | "Ford" | "Chevrolet" | "Nissan";

interface Car {
    id: number;
    make: Make;
    model: string;
    color: string;
}

const cars: Car[] = [
    { id: 1, make: "Toyota", model: "Camry", color: "Blue" },
    { id: 2, make: "Honda", model: "Civic", color: "Red" },
    { id: 3, make: "Ford", model: "F-150", color: "Black" },
    { id: 4, make: "Chevrolet", model: "Silverado", color: "White" },
    { id: 5, make: "Nissan", model: "Altima", color: "Green" },
    { id: 6, make: "Toyota", model: "Corolla", color: "Silver" },
    { id: 7, make: "Honda", model: "Accord", color: "Gray" },
    { id: 8, make: "Ford", model: "Mustang", color: "Yellow" },
    { id: 9, make: "Chevrolet", model: "Malibu", color: "Orange" },
    { id: 10, make: "Nissan", model: "Sentra", color: "Purple" },
    { id: 11, make: "Toyota", model: "RAV4", color: "Brown" },
    { id: 12, make: "Honda", model: "CR-V", color: "Pink" },
    { id: 13, make: "Ford", model: "Explorer", color: "Teal" },
    { id: 14, make: "Chevrolet", model: "Equinox", color: "Cyan" },
    { id: 15, make: "Nissan", model: "Rogue", color: "Magenta" },
];


export const CarsList = ({ make }: { make?: Make }) => {

    const filteredCars = make ? cars.filter((car => car.make === make)) : cars;

    return (
        <Card>
            <CardHeader>
                <CardTitle>Cars List</CardTitle>
            </CardHeader>
            <CardContent>
                <ItemGroup>
                    {
                        filteredCars.map(({ color, id, make, model }) =>
                            <CarItem
                                key={id}
                                {...{ color, make, model }}
                            />
                        )
                    }

                </ItemGroup>
            </CardContent>
        </Card>
    )
}


const CarItem = ({ color, make, model }: Pick<Car, "color" | "make" | "model">) => {
    return (
        <Item variant={"muted"}>
            <ItemMedia variant={"icon"}>
                <Car fill={color} fillOpacity={0.4} />
            </ItemMedia>
            <ItemContent>
                <ItemTitle>{make} {model}</ItemTitle>
                <ItemDescription>Color: {color}</ItemDescription>
            </ItemContent>
        </Item>
    )
}