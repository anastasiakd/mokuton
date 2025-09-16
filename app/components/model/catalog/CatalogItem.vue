<script setup lang="ts">
import {numberUtils} from '#shared/utils';

const {formatPrice} = numberUtils;

const {model} = defineProps({
    model: {
        type: Object as PropType<CatalogProduct>,
        required: true,
    },
});

function goToModel() {
    navigateTo({
        name: 'model-id',
        params: {id: model.id},
    });
}
</script>

<template>
    <li
        v-testid="`catalog-model-${model.id}`"
        class="model cursor-pointer"
        @click="goToModel"
    >
        <div>
            <img
                :src="model.icon"
                alt="MOKUTON wood design"
                class="block"
            >
        </div>

        <h3 class="mt-2 mb-2">
            <span class="text-highlight">
                {{ model.name }}
            </span>
        </h3>

        <div>
            {{ formatPrice(model.price) }}
        </div>
    </li>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/abstracts/mixins" as *;

.model {
    li {
        width: 100%;

        img {
            width: 100%;
        }
    }
}
</style>