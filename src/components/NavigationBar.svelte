<script lang="ts">
    import {useLocation} from 'svelte5-router'

    type NavigationItem = {
        href: string
        label: string
    }

    const navigations: NavigationItem[] = [
        {href: '/', label: 'Home'},
        {href: '/counter', label: 'Counter'},
        {href: '/temperature', label: 'Temperature'},
        {href: '/flightbooker', label: 'Flight Booker'},
        {href: '/temperature1', label: 'Sample1'}
    ]

    const location = useLocation()
</script>

<div class="flex justify-center pt-4">
    <nav class="navigation-bar">
        <ul class="flex items-center flex-row gap-4">
            {#each navigations as {href, label}}
                {@const isActive = $location.pathname === href}

                <li>
                    <a
                            href={href}
                            aria-current={isActive ? 'page' : undefined}
                            class={isActive ? 'nav-link-active' : 'nav-link'}
                    >
                        {label}
                    </a>
                </li>
            {/each}
        </ul>
    </nav>
</div>

<style>
    @reference "tailwindcss";

    .navigation-bar {
        @apply rounded-2xl border border-white/20 bg-white/80 p-3 shadow-lg backdrop-blur-md;
    }

    .nav-link {
        @apply rounded-xl px-4 py-2 font-medium text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 hover:underline underline-offset-4 decoration-4;
    }

    .nav-link-active {
        @apply pointer-events-none cursor-default rounded-xl bg-orange-100 px-4 py-2 font-bold text-orange-600 shadow-sm;
    }
</style>