<script setup lang="ts">
import {numberUtils} from '#shared/utils';
import ModelBuy from './ModelBuy.vue';
import Customer from './Customer.vue';

const {formatPrice} = numberUtils;

const {model} = defineProps({
    model: {
        type: Object as PropType<ProductDetail>,
        required: true,
    },
});

const showCustomer = ref(false);

function showCustomerForm() {
    showCustomer.value = true;
}

const toast = useToast();

function onBuy(customer) {
    toast.add({
        title: 'Ваш заказ принят',
        description: `Скоро с вами свяжется наш менеджер. Подтверждение заказа отправлено на ${customer.email}.`,
        color: 'success',
        progress: false,
    });

    useModelStore().submitOrder({
        customer,
        model,
    });

    showCustomer.value = false;
}
</script>

<template>
    <div
        v-if="model"
        class="model__container pt-8"
    >
        <div class="model__header">
            <h1>
                {{ model.name }}
            </h1>

            <hr>
        </div>

        <div class="pt-8 pb-8">
            <div class="model__gallery">
                <UCarousel
                    v-slot="{ item }"
                    :items="model.images"
                    class="w-full justify-items-center"
                >
                    <img
                        :src="item"
                        class="rounded-lg h-90"
                    >
                </UCarousel>
            </div>
        </div>

        <div class="model__content pt-8 pb-8">
            <div class="model__description">
                <p>
                    {{ model.description }}
                </p>

                <template v-if="model.suits?.length">
                    <p>
                        {{ $t('catalog_product-suits') }}
                    </p>

                    <ul>
                        <li
                            v-for="(suitItem, index) in model.suits"
                            :key="index"
                        >
                            {{ suitItem }}
                        </li>
                    </ul>
                </template>
            </div>

            <div class="model__purchase">
                <h1>
                    {{ formatPrice(model.price) }}
                </h1>

                <ModelBuy
                    v-if="!showCustomer"
                    :model="model"
                    @buy="showCustomerForm"
                />
            </div>
        </div>

        <transition name="fade">
            <Customer
                v-show="showCustomer"
                @order:submit="onBuy"
            />
        </transition>
    </div>
</template>

<style lang="scss" scoped>
.model {
    &__container {
        grid-column: 2;
    }

    &__header {
        display: grid;
        grid-template-columns: minmax(1.5rem, 1fr) repeat(2, minmax(0, 34.375em)) minmax(1.5rem, 1fr);

        h1 {
            grid-column: 2;
            grid-row: 1;
        }

        hr {
            grid-column: 2 / span 2;
            grid-row: 3;
            margin: 1.5rem 0 0 0;
        }
    }

    &__content {
        display: grid;
        grid-column: 2;
        grid-template-columns: minmax(0, 51.56em) 2rem minmax(0, 25%);

        ul {
            list-style: disc;
            margin: 0 0 0 1.5rem;
            padding-left: 0;
        }
    }

    &__purchase {
        grid-column: 3;
        justify-self: end;
        text-align: right;
    }
}
</style>