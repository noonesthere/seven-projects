export class Temperature {
    #celsius: number = $state(0)
    #fahrenheit: number = $derived(this.#celsius * 9 /5 + 32)

    get celsius(): number {
        return this.#celsius
    }

    set celsius(value: number) {
        this.#celsius = value
    }

    get fahrenheit(): number {
        return this.#fahrenheit
    }

    set fahrenheit(value: number) {
        this.#celsius = (value - 32) * (5 / 9)
    }
}