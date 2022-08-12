export const celsiusToFahrenheit = (deg : number) => {
    return (deg* 1.8) + 32
}

export const fahrenheitToCelsius = (deg :  number) => {
    return (deg - 32) * 0.5556
}