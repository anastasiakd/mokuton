<script setup lang="ts">
defineProps({
    positions: {
        type: Array,
        required: true,
    },
});
</script>

<template>
    <div>
        <UCollapsible class="flex flex-col gap-2 w-full">
            <UButton
                label="Ваш заказ"
                color="neutral"
                variant="subtle"
                trailing-icon="i-lucide-chevron-down"
                block
            />

            <template #content>
                Позиции заказа
            </template>
        </UCollapsible>
    </div>
</template>

<style scoped>

</style>