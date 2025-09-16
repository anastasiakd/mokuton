<script setup lang="ts">
const pending = ref(true);

function finishPending() {
    pending.value = false;
}
</script>

<template>
    <div
        data-testid="'basket-container'"
        class="basket-container"
    >
        <BaseSpinner v-if="pending"/>

        <BasketTable
            @loaded="finishPending"
        />
    </div>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/abstracts/variables" as *;

.basket-container {
    grid-column: 2;

    h3 {
        border-bottom: 2px solid $accent-color;
        transition: all 0.25s ease-out;

        &:hover {
            background-color: $accent-bg;
        }
    }
}
</style>