import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar";
import { Button } from "@workspace/ui/components/button";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@workspace/ui/components/input-group";
import { Home, Info, Search, Settings, SquareArrowRightEnter, type LucideIcon } from "lucide-react";
import type React from "react";

export const Header = () => {
    return (
        <header className="h-(--header-height) backdrop-blur-md p-4 flex flex-col sm:flex-row items-center  justify-between gap-4 fixed inset-x-0 top-0 z-50 ">
            <div className="flex items-center gap-4 self-stretch">
                <UserMenu />
                <Searchbar className="w-full" />
            </div>
            <Navigation />
        </header>
    )
}


interface Navigation {
    title: string;
    to: string;
    icon: LucideIcon;
    children?: Navigation[]
}

const data: Navigation[] = [
    {
        title: "home",
        to: "#",
        icon: Home
    },
    {
        title: "about",
        to: "#",
        icon: Info
    },
    {
        title: "services",
        to: "#",
        icon: Settings,
    },
]


const Navigation = () => (
    <nav className="">
        <ul className="flex gap-4">
            {
                data.map((item, index) => (
                    <li key={index}>
                        <a href={`${item.to}-${index}`} className="flex items-center gap-2">
                            <item.icon size={16} />
                            {item.title}
                        </a>
                    </li>
                ))
            }
        </ul>
    </nav>
)



interface User {
    fullname: string;
    image: string;
}

const UserMenu = () => {
    const user: User = {
        fullname: "Alireza Ghanbari",
        image: ""
    }

    const isLoggedIn: boolean = false;

    if (isLoggedIn) {
        return (
            <Button
                variant="secondary"
                className="rounded-full"
                size="icon-lg"
            >
                <SquareArrowRightEnter />
            </Button>
        )
    }

    return (
        <UserNav {...user} />
    )
}



const UserNav = ({ fullname = "", image = "#" }: User) => {
    return (
        <Avatar>
            <AvatarImage src={image} />
            <AvatarFallback className="uppercase">
                {fullname.at(0)}
            </AvatarFallback>
        </Avatar>
    )
}

interface Search {
    resultsCount: number;
}

const Searchbar = ({
    className,
    ...props
}: React.ComponentProps<"div">) => {
    const search: Search = {
        resultsCount: 0
    }

    return (
        <InputGroup className={className} {...props}>
            <InputGroupInput placeholder="search..." />
            <InputGroupAddon>
                <Search />
            </InputGroupAddon>
            {
                search.resultsCount > 0 &&
                <InputGroupAddon align="inline-end">
                    {search.resultsCount} results
                </InputGroupAddon>
            }
        </InputGroup>
    )
}