import * as v from 'valibot';

const schema = v.object({
    lastName: v.pipe(
        v.string(),
        v.nonEmpty('Поле обязательно для заполнения'),
    ),
    firstName: v.pipe(
        v.string(),
        v.nonEmpty('Поле обязательно для заполнения'),
    ),
    patronymic: v.pipe(
        v.string(),
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
    lastName: '',
    firstName: '',
    patronymic: '',
    email: '',
    phonePrefix: {
        label: '',
        code: '',
    },
    phoneNumber: '',
    country: '',
    city: '',
    address: '',
    comment: '',
});

export {
    schema,
    state,
};
