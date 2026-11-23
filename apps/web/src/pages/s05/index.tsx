import { TodosList } from "./todos-list";
import { WriteTodo } from "./write-todo";

export default function S05() {
    return (
        <div className="p-4 space-y-4">
            <WriteTodo />
            <TodosList />
        </div>
    )
}