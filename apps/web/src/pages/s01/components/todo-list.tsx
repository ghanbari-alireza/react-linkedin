import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card";
import { Item, ItemContent, ItemGroup, ItemMedia, ItemTitle } from "@workspace/ui/components/item";
import { Square, SquareCheck } from "lucide-react";

interface Todo {
    title: string;
    completed: boolean;
}

const todos: Todo[] = [
    { title: "Learn React", completed: false },
    { title: "Learn TypeScript", completed: true },
    { title: "Learn Tailwind CSS", completed: false }
];

export const TodoList = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Todo List</CardTitle>
            </CardHeader>
            <CardContent>
                <ItemGroup>
                    {
                        todos.map((todo, i) => (
                            <TodoItem key={`${todo.title}-${i}`} title={todo.title} completed={todo.completed} />
                        ))
                    }
                </ItemGroup>
            </CardContent>
        </Card>
    )
}



const TodoItem = ({ title, completed }: Todo) => {
    return (
        <Item className={completed ? "bg-success/10" : "bg-destructive/10"}>
            <ItemMedia>
                {completed ? <SquareCheck /> : <Square />}
            </ItemMedia>
            <ItemContent>
                <ItemTitle>{title}</ItemTitle>
            </ItemContent>
        </Item>
    );
}