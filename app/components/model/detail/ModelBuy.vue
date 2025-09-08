<script setup lang="ts">
const emit = defineEmits([
    'buy',
]);

function onBuy() {
    emit('buy');
}
</script>

<template>
    <UButton
        trailing-icon="i-lucide-arrow-right"
        size="xl"
        block
        square
        class="cursor-pointer mt-2"
        @click="onBuy"
    >
        {{ $t('button-buy') }}
    </UButton>
</template>

<style scoped>

</style>