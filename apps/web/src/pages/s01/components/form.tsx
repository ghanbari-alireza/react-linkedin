import { useOnline } from "@/hooks/use-online";
import { Button } from "@workspace/ui/components/button";
import { CardContent } from "@workspace/ui/components/card";
import { FieldSet } from "@workspace/ui/components/field";
import { Textarea } from "@workspace/ui/components/textarea";
import { useState } from "react";

export const Form = () => {
    const isOnline = useOnline();
    const [message, setMessage] = useState<string>("");

    return (
        <CardContent>
            <form action="" >
                <FieldSet>
                    <Textarea
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        rows={4}
                        placeholder="write here..."
                    />
                    <Button
                        type="submit"
                        disabled={!isOnline}
                    >
                        {
                            isOnline
                                ? "Send Message"
                                : "You must be online to send"
                        }
                    </Button>
                </FieldSet>
            </form>
        </CardContent>
    )
}