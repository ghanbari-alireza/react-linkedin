import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PropertyList } from "./components/property-list";
import { data } from "./components/data";

export default function S03() {
    return (
        <div className="pt-(--header-height) pb-(--footer-height)">
            <Header />
            <main className="container mx-auto p-4">
                <PropertyList properties={data} />
            </main>
            <Footer />
        </div>
    )
}