<script setup lang="ts">
import type {FormSubmitEvent} from '@nuxt/ui';
import {type OrderSchema, schema, state} from './form';

const emit = defineEmits([
    'order:submit',
]);

const phoneStore = usePhoneStore();
const {phoneCodes} = storeToRefs(phoneStore);
const phonePrefixes = computed(() => (
    phoneCodes.value
        .map(phoneCode => phoneCode.value && ({
            label: `${phoneCode.value} (${phoneCode.country})`,
            code: phoneCode.code,
        }))
        .filter(Boolean)
));
phoneStore.getPhoneCodes();

function onSubmit(event: FormSubmitEvent<OrderSchema>) {
    emit('order:submit', event.data);
}
</script>

<template>
    <div class="p-6 mb-6 customer-panel">
        <div class="customer-panel-title">
            <h3>{{ $t('order_customer-title') }}</h3>
        </div>

        <div class="mt-2 p-4 customer-panel-content">
            <UForm
                :schema="schema"
                :state="state"
                class="space-y-4"
                @submit="onSubmit"
            >
                <div class="flex gap-4">
                    <UFormField
                        :label="$t('order_customer-firstName')"
                        name="name"
                        required
                        class="w-1/3"
                    >
                        <UInput
                            v-model="state.name"
                            size="xl"
                            class="w-full"
                        />
                    </UFormField>

                    <UFormField
                        :label="$t('order_customer-email')"
                        name="email"
                        required
                        class="w-1/3"
                    >
                        <UInput
                            v-model="state.email"
                            size="xl"
                            class="w-full"
                        />
                    </UFormField>

                    <UFormField
                        :label="$t('order_customer-phone')"
                        name="phone"
                        class="w-1/3"
                    >
                        <UButtonGroup class="w-full">
                            <USelectMenu
                                v-model="state.phonePrefix"
                                :items="phonePrefixes"
                                class="w-40"
                            />

                            <UInput
                                v-model.number="state.phoneNumber"
                                size="xl"
                                class="w-full"
                            />
                        </UButtonGroup>
                    </UFormField>
                </div>

                <UFormField
                    :label="$t('order_customer-comment')"
                    name="comment"
                    class="w-full"
                >
                    <UTextarea
                        v-model="state.comment"
                        size="xl"
                        class="w-full"
                    />
                </UFormField>

                <div class="flex justify-end">
                    <UButton
                        type="submit"
                        size="xl"
                    >
                        {{ $t('button-buy') }}
                    </UButton>
                </div>
            </UForm>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/abstracts/mixins" as *;

.customer-panel {
    @include collapsible-panel;
}
</style>