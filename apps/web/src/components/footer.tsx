export const Footer = () => {
    return (
        <footer className="leading-(--footer-height) backdrop-blur-md  fixed inset-x-0 bottom-0 z-50 text-center ">
            <OpenToWork />

        </footer>
    )
}


const OpenToWork = () => {
    const workTime = new Date().getHours() >= 9 && new Date().getHours() <= 17;
    const workDay = new Date().getDay() >= 1 && new Date().getDay() <= 6;

    const isOpenToWork = workTime && workDay;

    return (
        <div className={`text-sm font-medium ${isOpenToWork ? "text-green-600 bg-success/20" : "text-red-600 bg-destructive/20"} px-2 py-1`}>
            {isOpenToWork ? "we are open" : "we are closed"}
        </div>
    )
}