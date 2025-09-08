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
});

export type OrderSchema = v.InferOutput<typeof schema>;

const state = reactive({
    name: '',
    email: '',
    phonePrefix: {
        label: '',
        code: '',
    },
    phoneNumber: '',
    comment: '',
});

export {
    schema,
    state,
};
