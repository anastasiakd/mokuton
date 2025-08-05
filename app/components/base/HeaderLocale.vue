<script setup lang="ts">
const {locale: activeLocale, locales, setLocale} = useUserLocale();

watch(activeLocale, async () => {
    window.location.reload();
});
</script>

<template>
    <div class="flex gap-4 mr-16">
        <ULink
            v-for="locale in locales"
            :key="locale.code"
            as="button"
            class="uppercase cursor-pointer"
            :class="{'text-accent': locale.code === activeLocale}"
            @click="setLocale(locale.code)"
        >
            {{ locale.code }}
        </ULink>
    </div>
</template>

<style scoped>

</style>