<script setup lang="ts">
function goToCatalog() {
    navigateTo({name: 'product-catalog'});
}
</script>

<template>
    <div>
        <div class="empty p-4 mb-8">
            {{ $t('basket_empty-title') }}
        </div>

        <UButton
            trailing-icon="i-lucide-arrow-right"
            size="xl"
            block
            square
            class="w-auto cursor-pointer mt-1"
            @click="goToCatalog"
        >
            {{ $t('button-catalog') }}
        </UButton>
    </div>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/abstracts/variables" as *;

.empty {
    border: 1px solid #d8d8d8;
    border-left: 3px solid $accent-color;
}
</style>