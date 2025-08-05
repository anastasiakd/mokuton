import {useStorage} from '@vueuse/core';

export default <T>(key: string, defaultValue: T): Ref<T> => {
    const userKey = '';
    return useStorage(`${key}_${userKey}`, defaultValue);
};

export const STORAGE_KEYS = {
    basket: 'basket',
};
