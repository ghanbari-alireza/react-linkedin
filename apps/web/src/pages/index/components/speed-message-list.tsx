import {
    Item,
    ItemContent,
    ItemDescription,
    ItemGroup,
    ItemTitle
} from "@workspace/ui/components/item";

interface SpeedMessageProps {
    speed: number;
}

const SpeedMessage = ({ speed }: SpeedMessageProps) => {
    const speedLimit = 50;
    const isSpeedOver = speed > speedLimit;

    const title = `Your speed is: ${speed} mph.`;

    const description = isSpeedOver
        ? "You are going too fast"
        : "Your speed is okay";

    return (
        <Item
            data-speed-over={isSpeedOver}
            className="
                data-[speed-over=true]:bg-destructive/10
                data-[speed-over=false]:bg-success/10
            "
        >
            <ItemContent>
                <ItemTitle>{title}</ItemTitle>
                <ItemDescription>{description}</ItemDescription>
            </ItemContent>
        </Item>
    );
};

export const SpeedMessageList = () => {
    const speeds: number[] = [80, 90, 40];

    return (
        <ItemGroup>
            {speeds.map((speed, i) => (
                <SpeedMessage speed={speed} key={i} />
            ))}
        </ItemGroup>
    );
};