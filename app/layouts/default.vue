<script setup lang="ts">

</script>

<template>
    <div class="flex flex-col min-h-screen">
        <BaseHeader/>

        <main class="grow">
            <header class="page-header"/>

            <div class="page-content pt-8">
                <slot/>
            </div>
        </main>

        <BaseFooter/>
    </div>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/abstracts/variables" as *;

.page-header {
    align-items: center;
    border-top: 1px solid $secondary-color;
    display: flex;
    justify-content: center;
    margin-top: 0.5rem;
    margin-left: 25%;
    margin-right: 25%;
    padding-top: 1rem;
    text-align: center;
    width: auto;
}
</style>