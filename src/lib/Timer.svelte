<script lang="ts">
    let elapsed = $state(0)
    let duration = $state(5)
    let interval: number;

    function start() {
        interval = setInterval(() => {
            elapsed += 0.1;
            if (elapsed > duration) {
                elapsed = duration
                clearInterval(interval)
            }
        }, 100)
    }

    function reset() {
        elapsed = 0;
        start()
    }

    $effect(() => {
        if (!duration) {
            return;
        }
        start()
        return () => clearInterval(interval)
    })

</script>

<div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="flex flex-col gap-4 bg-white p-6 rounded-2xl shadow w-full max-w-sm">

        <h1 class="text-2xl font-semibold">
            Timer
        </h1>

        <div class="flex flex-col gap-2">
            <label for="progress">
                Elapsed time
            </label>

            <progress
                    id="progress"
                    max={duration}
                    value={elapsed}
                    class="w-full"
            ></progress>

            <span>
                {elapsed.toFixed(1)}s
            </span>
        </div>

        <div class="flex flex-col gap-2">
            <label for="duration">
                Duration
            </label>

            <input
                    id="duration"
                    type="range"
                    bind:value={duration}
                    min="1"
                    max="10"
            >

            <span>
                {duration}s
            </span>
        </div>

        <button
                onclick={reset}
                class="bg-primary-500 hover:bg-primary-600 text-black rounded-lg py-2 transition cursor-pointer border">
            Reset
        </button>
    </div>
</div>