<script lang="ts">

    class Temperature {
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

    const temperature = new Temperature()
</script>
<div class="flex justify-center items-center min-h-screen gap-4">
    <input id="c" type="number" bind:value={temperature.c}>
    <label for="c">Celsius = </label>
    <input id="f" type="number" bind:value={temperature.f}>
    <label for="f">Fahrenheit</label>
</div>
<style>
    input[type='number'] {
        border-color: gray;
        max-width: 10ch;
    }
</style>