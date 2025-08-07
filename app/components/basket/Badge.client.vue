<script setup lang="ts">
const basketStore = useBasketStore();
const {
    count,
} = storeToRefs(basketStore);
</script>

<template>
    <span
        v-if="count > 0"
        class="badge"
    >
        {{ count }}
    </span>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/abstracts/variables" as *;

.site-header {
    .user-menu {
        .badge {
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