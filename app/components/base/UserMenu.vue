<script setup lang="ts">
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
            <BasketBadge/>
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
    }
}
</style>