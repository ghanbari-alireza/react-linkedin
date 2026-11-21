import { useOnline } from "@/hooks/use-online";
import { CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card";

export const UserStatus = () => {
    const isOnline = useOnline();
    return (
        <CardHeader>
            <CardTitle>
                Need Help?
            </CardTitle>
            <CardDescription className="flex items-center gap-2">
                <div className="size-2 rounded-full" style={{ backgroundColor: isOnline ? "green" : "red" }} />
                <span>
                    Type your message below to get help.
                </span>
            </CardDescription>
        </CardHeader>
    )
}