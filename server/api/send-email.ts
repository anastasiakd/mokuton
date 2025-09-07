export default defineEventHandler(async (event) => {
    const {sendMail} = useNodeMailer();
    const body = await readBody(event);

    console.log(body);

    return sendMail({
        from: process.env.NUXT_NODEMAILER_FROM,
        to: body.to,
        subject: body.subject,
        text: body.data,
    });
});