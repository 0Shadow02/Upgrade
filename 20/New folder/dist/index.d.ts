import zod from "zod";
declare const myshcema: zod.ZodObject<{
    email: zod.ZodString;
    password: zod.ZodString;
}, "strip", zod.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export type Signupinput = zod.infer<typeof myshcema>;
export {};
