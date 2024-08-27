import zod from "zod"
const myshcema = zod.object({
    email:zod.string().email(),
    password: zod.string().min(8)
})

export type Signupinput = zod.infer<typeof myshcema>