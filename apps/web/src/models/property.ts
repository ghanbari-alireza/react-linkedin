export interface Property {
    id: number;
    type: "FLAT" | "HOUSE" | "VILLA";
    image: string;
    bedrooms: number;
    bathrooms: number;
    surface: number;
    address: string;
    rent: number;
    date: string;
    available: boolean;
}

