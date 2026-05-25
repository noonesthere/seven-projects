export class Temperature {
    #c = $state(0)
    #f = $state(0)

    get c() {
        return this.#c
    }

    set c(c) {
        this.#c = c
        this.#f = c * (9 / 5) + 32
    }

    get f() {
        return this.#f
    }

    set f(f) {
        this.#f=f;
        this.#c = (f - 32) * (5 / 9)
    }
}