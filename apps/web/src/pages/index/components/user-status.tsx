import { useOnline } from "@/hooks/use-online";

export const UserStatus = () => {
    const isOnline = useOnline();
    return (
        <div>
            <h1>
                Need Help?
            </h1>
            <div className="flex items-center gap-2">
                <div className="size-2 rounded-full" style={{ backgroundColor: isOnline ? "green" : "red" }} />
                <span>
                    Type your message below to get help.
                </span>
            </div>
        </div>
    )
}