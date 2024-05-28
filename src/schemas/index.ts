import * as z from "zod";

export const RegisterSchema = z
    .object({
        email: z
            .string()
            .min(1, "이메일을 입력해주세요.")
            .email("이메일 형식으로 입력해주세요."),
        password: z
            .string()
            .min(8, "8~15 자리를 입력해주세요.")
            .regex(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/, 
                "알파벳+특수문자(! @ # $ % & * ?)+숫자 조합"),
        checkPassword: z
            .string()
            .min(8, "8~15 자리를 입력해주세요.")
            .regex(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/, 
                "알파벳+특수문자(! @ # $ % & * ?)+숫자 조합"),
        nickname: z
            .string()
            .min(1, "닉네임을 입력해주세요."),
        birth: z
            .date()
            .nullable()
            .refine(date => date instanceof Date, 
                "올바른 생년월일을 입력해주세요."),
        country: z
            .object({
                label: z.string(),
                value: z.string(),
            })
            .nullable(),
    })
    .superRefine(({ checkPassword, password }, ctx) => {
        if (checkPassword !== password) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: '비밀번호가 일치하지 않습니다.',
                path: ['checkPassword'],
            })
        }
    })

export const LoginSchema = z
    .object({
        email: z
            .string()
            .email("이메일 형식으로 입력해주세요."),
        password: z
            .string()
            .min(8, "8~15 자리를 입력해주세요.")
    });