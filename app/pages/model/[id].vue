<script setup lang="ts">
const route = useRoute();
const modelId: string = route.params.id as string;
</script>

<template>
    <ModelDetailPage
        :id="modelId"
    />
</template>
