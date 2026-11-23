export const formatPrice = (number: number = 0) => {
    return Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        // maximumFractionDigits: 0
    }).format(number)
}