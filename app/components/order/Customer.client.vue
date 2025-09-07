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

const countryStore = useCountryStore();
const {items: countries} = storeToRefs(countryStore);
const countriesItems = computed(() => countries.value.map(country => country.text));
countryStore.getList();

function onPhoneCodeChange() {
    state.country = countries.value.find(country => country.value === state.phonePrefix.code)?.text || '';
}

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
                        :label="$t('order_customer-lastName')"
                        name="lastName"
                        required
                        class="w-1/3"
                    >
                        <UInput
                            v-model="state.lastName"
                            size="xl"
                            class="w-full"
                        />
                    </UFormField>

                    <UFormField
                        :label="$t('order_customer-firstName')"
                        name="firstName"
                        required
                        class="w-1/3"
                    >
                        <UInput
                            v-model="state.firstName"
                            size="xl"
                            class="w-full"
                        />
                    </UFormField>

                    <UFormField
                        :label="$t('order_customer-patronymic')"
                        name="patronymic"
                        class="w-1/3"
                    >
                        <UInput
                            v-model="state.patronymic"
                            size="xl"
                            class="w-full"
                        />
                    </UFormField>
                </div>

                <div class="flex gap-4">
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
                        class="w-2/3"
                    >
                        <UButtonGroup class="w-full">
                            <USelectMenu
                                v-model="state.phonePrefix"
                                :items="phonePrefixes"
                                class="w-40"
                                @update:model-value="onPhoneCodeChange"
                            />

                            <UInput
                                v-model.number="state.phoneNumber"
                                size="xl"
                                class="w-full"
                            />
                        </UButtonGroup>
                    </UFormField>
                </div>

                <div class="flex gap-4">
                    <UFormField
                        :label="$t('order_customer-country')"
                        name="country"
                        class="w-1/2"
                    >
                        <UInputMenu
                            v-model="state.country"
                            :items="countriesItems"
                            size="xl"
                            class="w-full"
                        >
                            <template #empty>
                                {{ $t('order_customer-country-empty') }}
                            </template>
                        </UInputMenu>
                    </UFormField>

                    <UFormField
                        :label="$t('order_customer-city')"
                        name="city"
                        class="w-1/2"
                    >
                        <UInput
                            v-model="state.city"
                            size="xl"
                            class="w-full"
                        />
                    </UFormField>
                </div>

                <UFormField
                    :label="$t('order_customer-address')"
                    name="address"
                    class="w-full"
                >
                    <UInput
                        v-model="state.address"
                        size="xl"
                        class="w-full"
                    />
                </UFormField>

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
                        {{ $t('order_button-submit') }}
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