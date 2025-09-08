<script setup lang="ts">
import Model from './Model.vue';

const {id} = defineProps({
    id: {
        type: String,
        required: true,
    },
});

const modelStore = useModelStore();
const {
    getModel,
} = modelStore;

const model = ref();

getModel(id)
    .then(result => {
        model.value = result;
    });
</script>

<template>
    <Model
        v-if="model"
        :model="model"
    />
</template>

<style scoped>
</style>