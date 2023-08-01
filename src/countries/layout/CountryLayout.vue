<script setup lang="ts">
</script>

<template>
    <header class="py-4 dark:bg-[#2b3945] bg-[#ffffff]">
        <div class="flex items-center justify-between w-[94%] m-auto">
            <RouterLink :to="{ name: 'countries' }" class="text-lg font-bold select-none hover:cursor-pointer">
                Where in the world?
            </RouterLink>
        </div>
    </header>

    <RouterView />
</template>

<style scoped></style>