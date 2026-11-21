import { Card } from "@workspace/ui/components/card";
import { CarsList } from "./components/cars-list";
import { Form } from "./components/form";
import { ShoppingList } from "./components/shoping-list";
import { SpeedMessageList } from "./components/speed-message-list";
import { TodoList } from "./components/todo-list";
import { UserStatus } from "./components/user-status";

const shoppingItems = ["Milk", "Eggs", "Bread", "Butter", "Cheese"];

export default function Index() {
    return (
        <div className="container mx-auto p-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
                <UserStatus />
                <Form />
            </Card>
            <SpeedMessageList />
            <TodoList />
            <CarsList make="Ford" />
            <ShoppingList items={shoppingItems} />
        </div>
    )
}