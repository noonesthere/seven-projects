<script lang="ts">
    import {Temperature} from "./Temperature.svelte";

    const temperature = new Temperature()
</script>
<div class="flex justify-center items-center min-h-screen gap-4">
    <input id="celsius" type="number" bind:value={temperature.celsius}>
    <label for="celsius">Celsius = </label>
    <input id="fahrenheit" type="number" bind:value={temperature.fahrenheit}>
    <label for="fahrenheit">Fahrenheit</label>
</div>
<style>
    input[type='number'] {
        border-color: gray;
        max-width: 10ch;
    }
</style>