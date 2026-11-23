import { Item, ItemActions, ItemContent, ItemMedia, ItemTitle } from "@workspace/ui/components/item";
import type { Priority, Todo } from "./todos-list";
import { Button } from "@workspace/ui/components/button";
import { Check, MoveDownRight, MoveUpRight, Trash, X, type LucideIcon } from "lucide-react";
import { cn } from "cn";


const priorities: Record<Priority, {
    icon: LucideIcon,
    color: "bg-destructive" | "bg-warning" | "bg-success"
}> = {
    HIGH: {
        color: "bg-destructive",
        icon: MoveUpRight
    },
    MEDIUM: {
        color: "bg-success",
        icon: Check
    },
    LOW: {
        color: "bg-warning",
        icon: MoveDownRight
    }
}


export const TodoCard = ({ completed, id, message, priority }: Todo) => {
    const Icon = priorities[priority].icon;
    const backgroundColor = priorities[priority].color;

    return (
        <Item data-completed={completed} variant={"outline"} size={"sm"} className="group/todo">
            <ItemMedia variant={"icon"}>
                <div
                    className={cn("size-8 flex items-center justify-center rounded-full", backgroundColor)}
                >
                    <Icon />
                </div>
            </ItemMedia>
            <ItemContent>
                <ItemTitle className="group-data-[completed=true]/todo:line-through group-data-[completed=true]/todo:text-muted-foreground">
                    {message}
                </ItemTitle>
            </ItemContent>
            <ItemActions>
                <Button
                    size={"icon"}
                    variant={"destructive"}
                >
                    <Trash />
                </Button>
                <Button
                    size={"icon"}
                    variant={"secondary"}
                >
                    {completed ? <X /> : <Check />}
                </Button>
            </ItemActions>
        </Item>
    )
}