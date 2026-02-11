import { Activity, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

const ButtonTV = tv({
    base: [
        "ui-btn",
        "select-none px-4 py-1 rounded-lg",
        "trasition-all duration-300 ease-in-out",
        "hover:cursor-pointer hover:shadow-md",
        "active:shadow-none active:inset-shadow-sm active:cursor-press",
        "has-[svg]:inline-flex has-[svg]:gap-2 has-[svg]:items-center",
        "group/badge relative",
    ],
    variants: {
        disabled: {
            true: 'opacity-50 pointer-events-none'
        },
        variant: {
            text: "text-lg bg-transparent",
            contained: "border-none",
            outlined: "border bg-transparent",
        },
        color: {
            primary: ["bg-primary text-white", "hover:bg-primary-dark", 'active:inset-shadow-primary-light'],
            secondary: ["bg-secondary text-white", "hover:bg-secondary-dark", 'active:inset-shadow-secondary-dark'],
            success: ["bg-green-500 text-white", "hover:bg-green-600", 'active:inset-shadow-green-700'],
            error: ["bg-red-500 text-white", "hover:bg-red-600", 'active:inset-shadow-red-700'],
            info: ["bg-sky-500 text-white", "hover:bg-sky-600", 'active:inset-shadow-sky-700'],
            warning: ["bg-yellow-500 text-white", "hover:bg-yellow-600", 'active:inset-shadow-yellow-700'],
        },
        size: {
            small: [
                "py-0.75 px-2.25 font-medium text-[13px] leading-[1.75] h-fit",
                "[&_svg]:size-5",
            ],
            medium: [
                "py-1.25 px-3.75 font-medium text-[14px] leading-[1.75] h-fit",
                "[&_svg]:size-6",
            ],
            large: [
                "py-1.75 px-5.25 font-medium text-[15px] leading-[1.75] h-fit",
                "[&_svg]:size-6",
            ],
        },
    },
    defaultVariants: {
        disabled: false,
        size: 'medium',
        variant: 'text',
        color: 'primary',
    },
    compoundVariants: [
        {
            disabled: true,
            variant: 'text',
            color: ['primary', 'secondary', 'success', 'error', 'info', 'warning'],
            class: 'bg-transparent text-gray-500'
        },
        {
            disabled: true,
            variant: 'contained',
            color: ['primary', 'secondary', 'success', 'error', 'info', 'warning'],
            class: 'bg-gray-500'
        },
        {
            disabled: true,
            variant: 'outlined',
            color: ['primary', 'secondary', 'success', 'error', 'info', 'warning'],
            class: 'bg-transparent text-gray-500 border-gray-500'
        },


        {
            disabled: false,
            variant: 'text',
            color: 'primary',
            class: ['bg-transparent text-primary', 'hover:bg-primary-light/10']
        },
        {
            disabled: false,
            variant: 'text',
            color: 'secondary',
            class: ['bg-transparent text-secondary', 'hover:bg-secondary-light/10']
        },
        {
            disabled: false,
            variant: 'text',
            color: 'success',
            class: ['bg-transparent text-green-500', 'hover:bg-green-50/40']
        },
        {
            disabled: false,
            variant: 'text',
            color: 'error',
            class: ['bg-transparent text-red-500', 'hover:bg-red-50/40']
        },
        {
            disabled: false,
            variant: 'text',
            color: 'info',
            class: ['bg-transparent text-sky-500', 'hover:bg-sky-50/40']
        },
        {
            disabled: false,
            variant: 'text',
            color: 'warning',
            class: ['bg-transparent text-yellow-500', 'hover:bg-yellow-50/40']
        },

        {
            disabled: false,
            variant: 'outlined',
            color: 'primary',
            class: ['bg-inherit text-primary border-primary', 'hover:bg-primary-light/30']
        },
        {
            disabled: false,
            variant: 'outlined',
            color: 'secondary',
            class: ['bg-inherit text-secondary border-secondary', 'hover:bg-secondary-light/30']
        },
        {
            disabled: false,
            variant: 'outlined',
            color: 'success',
            class: ['bg-inherit text-green-500 border-green-500', 'hover:bg-green-50/50']
        },
        {
            disabled: false,
            variant: 'outlined',
            color: 'error',
            class: ['bg-inherit text-red-500 border-red-500', 'hover:bg-red-50/50']
        },
        {
            disabled: false,
            variant: 'outlined',
            color: 'info',
            class: ['bg-inherit text-sky-500 border-sky-500', 'hover:bg-sky-50/50']
        },
        {
            disabled: false,
            variant: 'outlined',
            color: 'warning',
            class: ['bg-inherit text-yellow-500 border-yellow-500', 'hover:bg-yellow-50/50']
        },
    ]
});

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof ButtonTV> & {
    startIcon?: ReactNode;
    endIcon?: ReactNode;
};

export default function Button(
    { disabled = false, variant = "text", color = "primary", size = "medium", className = '', children,
        startIcon = null, endIcon = null,
        ...props }: ButtonProps) {

    return (
        <button
            className={twMerge(ButtonTV({ disabled, variant, color, size }), className)}
            {...props}
        >
            <Activity mode={startIcon !== null ? 'visible' : 'hidden'}>
                <span>
                    {startIcon}
                </span>
            </Activity>
            <Activity mode={startIcon !== null || endIcon !== null ? 'visible' : 'hidden'}>
                <span>
                    {children}
                </span>
            </Activity>
            <Activity mode={startIcon === null && endIcon === null ? 'visible' : 'hidden'}>
                <>{children}</>
            </Activity>
            <Activity mode={endIcon !== null ? 'visible' : 'hidden'}>
                <span>
                    {endIcon}
                </span>
            </Activity>
        </button>
    );
}
