<script lang="ts">
    import {Temperature} from "./Temperature.svelte";

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