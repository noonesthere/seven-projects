<script lang="ts">
    import { useLocation } from 'svelte5-router'

    type NavigationItem = {
        href: string
        label: string
    }

    const navigations: NavigationItem[] = [
        { href: '/', label: 'Home' },
        { href: '/counter', label: 'Counter' },
        { href: '/temperature', label: 'Temperature' },
        { href: '/temperature1', label: 'Sample1' },
        { href: '/temperature2', label: 'Sample2' },
        { href: '/temperature3', label: 'Sample3' },
        { href: '/temperature4', label: 'Sample4' },
    ]

    const location = useLocation()
</script>

<div class="flex justify-center pt-4">
    <nav class="navigation-bar">
        <ul class="flex flex-row gap-2">
            {#each navigations as navigation}
                {@const isActive = $location.pathname === navigation.href}

                <li>
                    <a
                            href={navigation.href}
                            aria-current={isActive ? 'page' : undefined}
                            class={isActive ? 'nav-link-active' : 'nav-link'}
                    >
                        {navigation.label}
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