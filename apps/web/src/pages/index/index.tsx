import { Form } from "./components/form";
import { SpeedMessageList } from "./components/speed-message-list";
import { UserStatus } from "./components/user-status";

export default function Index() {
    return (
        <div className="container mx-auto p-4 space-y-4">
            <UserStatus />
            <Form />
            <SpeedMessageList />
        </div>
    )
}