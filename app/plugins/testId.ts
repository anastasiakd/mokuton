import {defineNuxtPlugin} from '#app';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('testid', {
        mounted(el, binding) {
            if (binding.value) {
                el.setAttribute('data-testid', binding.value);
            }
        },
        updated(el, binding) {
            if (binding.value) {
                el.setAttribute('data-testid', binding.value);
            } else {
                el.removeAttribute('data-testid');
            }
        },
    });
});