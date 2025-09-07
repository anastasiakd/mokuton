<script setup lang="ts">

</script>

<template>
    <div class="flex flex-col min-h-screen">
        <BaseHeader/>

        <main class="grow">
            <header class="page-header"/>

            <div class="page-content">
                <slot/>
            </div>
        </main>

        <BaseFooter/>
    </div>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/abstracts/variables" as *;

.page-header {
    border-top: 1px solid $secondary-color;
    margin-left: 25%;
    margin-right: 25%;
}
</style>