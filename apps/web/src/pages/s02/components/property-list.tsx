import type { Property } from "@/models/property";
import { Property as Card } from "./property-card";
// 20 sample data


export const PropertyList = ({ properties }: { properties: Property[] }) => {


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {
                properties.map(property => <Card key={property.id} {...property} />)
            }
        </div>
    )
}