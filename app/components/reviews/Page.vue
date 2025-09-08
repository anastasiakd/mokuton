<script setup lang="ts">
const reviews: Array<string> = [];
for (let i = 1; i < 10; i += 1) {
    reviews.push(`http://localhost:3000/_nuxt/assets/images/external/reviews/${i}.jpg`);
}
</script>

<template>
    <div class="reviews__container pt-8 pb-8">
        <UCarousel
            v-slot="{ item }"
            :items="reviews"
            dots
            :ui="{item: 'basis-auto'}"
            class="w-full mx-auto"
        >
            <img
                :src="item"
                class="rounded-lg reviews__item"
            >
        </UCarousel>
    </div>
</template>

<style lang="scss" scoped>
.reviews {
    &__container {
        grid-column: 2;
    }

    &__item {
        height: calc(100vh - 20rem);
    }
}
</style>