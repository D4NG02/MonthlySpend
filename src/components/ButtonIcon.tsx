import { type ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";
import type TypeTV from "../utility/Type";


/* 
    ButtonIcon component
    - Renders a customizable button icon with various colors and sizes
    - Supports disabled state styling
    - Uses tailwind-variants for styling
*/

const ButtonIconTV = tv({
    base: [
        "ui_btn-icon",
        "p-1.5 rounded-full",
        "trasition-all duration-200 ease-in-out",
        "hover:cursor-pointer hover:shadow-lg",
        "active:shadow-none active:inset-shadow-sm ",
        "has-[.ui_badge]:relative [&_.ui_badge]:absolute [&_.ui_badge]:top-0.5 [&_.ui_badge]:right-0.5",
        "[&_svg]:stroke-neutral-500"
    ],
    variants: {
        disabled: {
            true: 'opacity-50 bg-gray-500 pointer-events-none'
        },
        color: {
            text: ["text-black", "hover:bg-neutral-800", 'active:inset-shadow-neutral-300'],
            primary: ["bg-primary text-white", "hover:bg-primary-dark", 'active:inset-shadow-primary-light'],
            secondary: ["bg-secondary text-white", "hover:bg-secondary-dark", 'active:inset-shadow-secondary-dark'],
            success: ["bg-green-500 text-white", "hover:bg-green-600", 'active:inset-shadow-green-700'],
            error: ["bg-red-500 text-white", "hover:bg-red-600", 'active:inset-shadow-red-700'],
            info: ["bg-sky-500 text-white", "hover:bg-sky-600", 'active:inset-shadow-sky-700'],
            warning: ["bg-yellow-500 text-white", "hover:bg-yellow-600", 'active:inset-shadow-yellow-700'],
        },
        size: {
            medium: ["[&_svg]:size-6"],
            large: ["[&_svg]:size-7"],
        },
    },
    defaultVariants: {
        disabled: false,
        size: 'medium',
        color: 'text',
    },
    compoundVariants: [
        {
            color: 'text',
            class: ['bg-transparent text-neutral-500', 'hover:bg-neutral-200/50']
        },
        {
            color: 'primary',
            class: ['bg-transparent text-primary', 'hover:bg-primary-light/10']
        },
        {
            color: 'secondary',
            class: ['bg-transparent text-secondary', 'hover:bg-secondary-light/10']
        },
        {
            color: 'success',
            class: ['bg-transparent text-green-500', 'hover:bg-green-50/40']
        },
        {
            color: 'error',
            class: ['bg-transparent text-red-500', 'hover:bg-red-50/40']
        },
        {
            color: 'info',
            class: ['bg-transparent text-sky-500', 'hover:bg-sky-50/40']
        },
        {
            color: 'warning',
            class: ['bg-transparent text-yellow-500', 'hover:bg-yellow-50/40']
        },
    ]
});

type ButtonIconProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof ButtonIconTV> & {
    color?: TypeTV['color'];
};

export default function ButtonIcon(
    { color = "text", size = "medium", className = '', children,
        ...props }: ButtonIconProps) {

    return (
        <button
            className={twMerge(ButtonIconTV({ color, size }), className)}
            {...props}
        >
            {children}
        </button>
    );
}
