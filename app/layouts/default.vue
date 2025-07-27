<script setup lang="ts">

</script>

<template>
    <div class="flex flex-col min-h-screen">
        <BaseHeader/>

        <main class="grow">
            <slot/>
        </main>

        <BaseFooter/>
    </div>
</template>

<style scoped>

</style>