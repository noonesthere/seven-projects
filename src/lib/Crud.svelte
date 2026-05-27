<script lang="ts">
    type Person = {
        name: string
        surname: string
    }

    let people = $state<Person[]>([
        {name: 'Rich', surname: 'Harris'},
        {name: 'Ryan', surname: 'Carniato'},
        {name: 'Evan', surname: 'You'},
    ])

    let selected = $state<Person>()

    let person = $state({
        name: '',
        surname: ''
    })
</script>

<div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-md bg-white rounded-2xl shadow p-6 space-y-5">

        <div class="flex flex-col gap-2">
            <label for="filter" class="text-sm font-medium text-gray-700"> Filter prefix: </label>
            <input
                    id="filter"
                    type="text">
        </div>

        <div class="flex flex-col gap-2">
            <label for="people" class="text-sm font-medium text-gray-700"> Names </label>
            <select id="people" bind:value={selected} size="5"
                    class="border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400">
                {#each people as person}
                    <option value={person}>
                        {person.surname}, {person.name}
                    </option>
                {/each}
            </select>
        </div>

        <div class="details">
            <div class="flex flex-col gap-2">
                <label for="name">
                    <span>Name:</span>
                    <input id="name" type="text" bind:value={person.name}>
                </label>
            </div>
            <div class="flex flex-col gap-2">
                <label for="surname">
                    <span>Surname:</span>
                    <input type="text" id="surname" bind:value={person.surname}>
                </label>
            </div>
        </div>

        <div class="actions space-x">
            <button>Create</button>
            <button>Update</button>
            <button>Delete</button>
        </div>
    </div>


</div>

<style>
    .container {
        width: 500px;
        display: grid;
        grid-template-areas:
                'search .'
                'people details'
                'action actions';
        grid-template-columns: 240px 1fr;
        grid-auto-rows: auto;
        gap: var(--size-3);
        padding: var(--size-3);

        .search {
            grid-aria: search;

            .group {
                display: grid;
                grid-template-columns: 2fr 1fr;
                align-items: baseline;
            }
        }
    }
</style>