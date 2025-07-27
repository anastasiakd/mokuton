<script setup lang="ts">
</script>

<template>
    <header class="grid justify-between pt-12 pb-3 site-header">
        <div class="ml-16 site-branding">
            <img
                src="~/assets/images/main_logo.png"
                alt="MOKUTON wood design"
                class="block cursor-pointer max-w-28"
                @click="navigateTo('/')"
            >
        </div>

        <BaseNavigation/>

        <BaseHeaderLocale/>
    </header>
</template>

<style lang="scss" scoped>
.site-header {
    grid-template-columns: auto 1fr auto;
}
</style>