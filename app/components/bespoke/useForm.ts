import * as v from 'valibot';

const schema = v.object({
    name: v.pipe(
        v.string(),
        v.nonEmpty('Поле обязательно для заполнения'),
    ),
    email: v.pipe(
        v.string(),
        v.nonEmpty('Поле обязательно для заполнения'),
        v.email('Неверное значение email'),
    ),
    phonePrefix: v.pipe(
        v.object({
            label: v.pipe(v.string()),
            code: v.pipe(v.string()),
        }),
    ),
    comment: v.pipe(
        v.string(),
        v.nonEmpty('Поле обязательно для заполнения'),
    ),
});

export type OrderSchema = v.InferOutput<typeof schema>;

export default () => {
    const DEFAULT_STATE = {
        name: '',
        email: '',
        phonePrefix: {
            label: '',
            code: '',
        },
        phoneNumber: '',
        comment: '',
    };
    const state = ref({...DEFAULT_STATE});

    function clear() {
        state.value = {...DEFAULT_STATE,};
    }

    return {
        clear,
        schema,
        state,
    };
};
