import { InputGroup, InputGroupButton, InputGroupInput } from "@workspace/ui/components/input-group";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@workspace/ui/components/select";

const items = [
  { label: "high", value: "high" },
  { label: "medium", value: "medium" },
  { label: "low", value: "low" },
]

export const WriteTodo = () => {
    return (
        <div className="flex gap-2 border p-4 rounded-md">
            <InputGroup>
                <InputGroupInput
                    placeholder="write todo..."
                />
                <InputGroupButton size={"sm"} variant={"secondary"}>
                    send
                </InputGroupButton>
            </InputGroup>

            <Select items={items}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {items.map((item) => (
                            <SelectItem key={item.value} value={item.value}>
                                {item.label}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>

        </div>
    )
}