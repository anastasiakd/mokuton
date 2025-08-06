<script setup lang="ts">
const basketStore = useBasketStore();
const {
    count,
} = storeToRefs(basketStore);

function goToBasket() {
    navigateTo({name: 'basket'});
}
</script>

<template>
    <div class="user-menu">
        <div
            class="basket h-6 w-6 mt-3 mr-6 cursor-pointer"
            @click="goToBasket"
        >
            <span
                v-if="count > 0"
                class="count"
            >
                {{ count }}
            </span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/abstracts/variables" as *;

.site-header {
    .user-menu {
        .basket {
            background: url('~/assets/images/cart.svg') no-repeat;
            background-size: cover;
            position: relative;
        }

        .count {
            background-color: $accent-color;
            border: 2px solid transparent;
            border-radius: 60%;
            color: #FFF;
            font-size: .625em;
            font-weight: 700;
            padding: 1px 5px;
            position: absolute;
            right: -12px;
            top: -4px;
        }
    }
}
</style>