<script lang="ts">
    let count = $state<number>(0)
</script>

<div class="flex justify-center items-center min-h-screen gap-4">
    <input
            type="number"
            bind:value={count}
            disabled
            class="border rounded px-3 py-2"
    />

    <button
            onclick={() => count++}
            class="px-4 py-2 border rounded cursor-pointer hover:bg-gray-100"
    >
        Count
    </button>
</div>