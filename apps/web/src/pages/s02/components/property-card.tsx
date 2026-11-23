import type { Property as PropertyType } from "@/models/property";
import { Badge } from "@workspace/ui/components/badge";
import { Card, CardContent } from "@workspace/ui/components/card";
import { Item, ItemContent, ItemDescription, ItemGroup, ItemTitle } from "@workspace/ui/components/item";
import { Bath, DoorClosed, Scan, type LucideIcon } from "lucide-react";
import NoProfile from "/images/vila-no-profile.png";

export const Property = (property: PropertyType) => {

    return (
        <Card
            data-available={property.available}
            className="pt-0 data-[available=false]:grayscale"

        >
            <PropertyImage property={property} />
            <CardContent>
                <PropertyContent property={property} />
            </CardContent>
        </Card>
    )
}

const PropertyImage = ({ property }: { property: PropertyType }) => {
    const {
        image = NoProfile,
        type
    } = property;


    return (
        <div className="relative">
            <img
                src={image}
                alt="property image"
                className="z-20 aspect-video w-full object-cover"
            />
            <PropertyAttributes property={property} />
            <PropertyType type={type} />
        </div>
    )
}

type PropertyAttributes =
    Record<
        string,
        {
            icon: LucideIcon,
            title: string
        }
    >;

const PropertyAttributes = ({ property }: { property: PropertyType }) => {

    const attributes = {
        bathrooms: {
            icon: Bath,
            title: property.bathrooms
        },
        surface: {
            icon: Scan,
            title: property.surface
        },
        bedrooms: {
            icon: DoorClosed,
            title: property.bedrooms
        },
    }

    return (
        <div className="absolute right-2 bottom-2 flex gap-2 bg-accent/60 py-1 px-2 rounded-md">
            {
                Object.entries(attributes).map(([key, item]) => (
                    <Badge variant={"outline"} key={key} className="">
                        <item.icon />
                        <span>{item.title}</span>
                    </Badge>
                ))
            }
        </div>
    )
}

const PropertyType = ({ type }: Pick<PropertyType, "type">) => {
    return (
        <Badge className="absolute left-2 top-2">
            {type}
        </Badge>
    )
}

const PropertyContent = ({ property }: { property: PropertyType }) => {
    const { address = "", date = "", } = property;
    const content = {
        address,
        date
    }
    return (
        <ItemGroup>
            {
                Object.entries(content).map(([key, value]) => (
                    <Item key={key}>
                        <ItemContent>
                            <ItemDescription>{key}</ItemDescription>
                            <ItemTitle>{value}</ItemTitle>
                        </ItemContent>
                    </Item>
                ))
            }
        </ItemGroup>
    )
}