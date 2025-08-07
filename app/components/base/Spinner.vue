<script setup lang="ts">

</script>

<template>
    <div class="spinner-wrapper">
        <div class="spinner"/>
    </div>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/abstracts/variables" as *;

.spinner-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
}

.spinner {
    width: 48px;
    height: 48px;
    border: 5px solid $accent-bg;
    border-bottom-color: $accent-color;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>