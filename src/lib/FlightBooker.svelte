<script lang="ts">
    type Options = 'one-way' | 'return'

    let selected = $state<Options>('one-way')

    let startDate = $state(getDate())
    let returnDate = $state(getDate())

    function getDate() {
        const date = new Date();
        const [month, day, year] = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        }).split('/')
        return `${year}-${month}-${day}`;
    }

    function handleSubmit(event: SubmitEvent) {
        event.preventDefault()

        alert(
            `You booked a ${selected} flight departing on ${startDate}`
        )
    }

    $inspect({selected, startDate, returnDate})
</script>

<div class="min-h-screen flex items-center justify-center bg-gray-100">
    <form
            onsubmit={handleSubmit}
            class="w-full max-w-sm bg-white rounded-2xl shadow p-6 space-y-4"
    >
        <h1 class="text-2xl font-semibold text-gray-800"> Flight Booker </h1>

        <div class="flex flex-col gap-1">
            <label for="flight-type"> Flight type </label>

            <select id="flight-type" bind:value={selected} class="border rounded-lg px-3 py-2">
                <option value="one-way"> One-way flight</option>
                <option value="return"> Return flight</option>
            </select>
        </div>

        <div class="flex flex-col gap-1">
            <label for="start-date"> Departure date </label>
            <input
                    id="start-date"
                    type="date"
                    bind:value={startDate}
                    required
                    min={getDate()}
                    class="border rounded-lg px-3 py-2">
        </div>

        <div class="flex flex-col gap-1">
            <label for="return-date"> Return date </label>
            <input
                    id="return-date"
                    type="date"
                    bind:value={returnDate}
                    disabled={selected === 'one-way'}
                    required={selected === 'return'}
                    min={getDate()}
                    class="border rounded-lg px-3 py-2 disabled:bg-gray-100 disabled:text-gray-400">
        </div>

        <button
                type="submit"
                class="w-full hover:cursor-pointer"
                disabled={!startDate || (selected === 'return' && returnDate < startDate)}
        >
            Book Flight
        </button>
    </form>
</div>