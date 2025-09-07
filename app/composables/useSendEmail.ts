export default () => {
    async function send(params) {
        await $fetch(
            '/api/send-email', {
                method: 'POST',
                body: {
                    from: params.from,
                    to: params.to,
                    subject: params.subject,
                    data: params.data,
                    ...params,
                },
            });
    }

    return {
        send,
    };
};
