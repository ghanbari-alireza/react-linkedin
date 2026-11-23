import { ItemGroup } from "@workspace/ui/components/item";
import { TodoCard } from "./todo-card";


export type Priority = "MEDIUM" | "HIGH" | "LOW";

export interface Todo {
    id: number;
    message: string;
    completed: boolean;
    priority: Priority
}

const data: Todo[] = [
    {
        id: 1,
        completed: false,
        message: "learn linkedin",
        priority: "HIGH"
    },
    {
        id: 2,
        completed: false,
        message: "learn python",
        priority: "MEDIUM"
    },
    {
        id: 3,
        completed: true,
        message: "typewrite",
        priority: "LOW"
    }
]



export const TodosList = () => {
    return (
        <ItemGroup>

            {
                data.map(item => <TodoCard key={item.id} {...item}/>)
            }

        </ItemGroup>
    )
}