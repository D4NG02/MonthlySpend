import { Activity, type HTMLAttributes, type ReactNode } from 'react';
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";
import type TypeTV from '../utility/Type';

/* 
    Chip component
    - Renders a customizable chip with different variants, colors, and sizes
    - Supports start and end icons
    - Disabled state styling
    - Uses tailwind-variants for styling
*/

const ChipTV = tv({
    base: [
        "ui_chip",
        "select-none px-4 py-1 rounded-full",
        "trasition-all duration-300 ease-in-out",
        "has-[svg]:inline-flex has-[svg]:gap-2 has-[svg]:items-center",
    ],
    variants: {
        disabled: {
            true: 'opacity-50 pointer-events-none'
        },
        variant: {
            contained: "border-none",
            outlined: "border bg-transparent",
        },
        color: {
            primary: ["bg-primary text-white"],
            secondary: ["bg-secondary text-white"],
            error: ["bg-red-500 text-white"],
            warning: ["bg-yellow-500 text-white"],
            success: ["bg-green-500 text-white"],
            info: ["bg-sky-500 text-white"],
            inherit: ["bg-gray-500 text-white"],
        },
        size: {
            small: [
                "px-3 font-medium text-[13px] leading-[1.75] h-fit",
                "[&_svg]:size-5",
            ],
            medium: [
                "px-4 font-medium text-[14px] leading-[1.75] h-fit",
                "[&_svg]:size-6",
            ],
        },
    },
    defaultVariants: {
        disabled: false,
        size: 'medium',
        variant: 'outlined',
        color: 'inherit',
    },
    compoundVariants: [
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

type ChipProps = HTMLAttributes<HTMLSpanElement> & VariantProps<typeof ChipTV> & {
    label?: ReactNode;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    color?: TypeTV['color'];
};

export default function Chip(
    { disabled = false, variant = "outlined", color = "inherit", size = "medium", className = '',
        label = null, startIcon = null, endIcon = null,
        ...props }: ChipProps) {

    return (
        <span
            className={twMerge(ChipTV({ disabled, variant, color, size }), className)}
            {...props}
        >
            <Activity mode={startIcon !== null ? 'visible' : 'hidden'}>
                <span>
                    {startIcon}
                </span>
            </Activity>
            <Activity mode={startIcon !== null || endIcon !== null ? 'visible' : 'hidden'}>
                <span>
                    {label}
                </span>
            </Activity>
            <Activity mode={startIcon === null && endIcon === null ? 'visible' : 'hidden'}>
                <>{label}</>
            </Activity>
            <Activity mode={endIcon !== null ? 'visible' : 'hidden'}>
                <span>
                    {endIcon}
                </span>
            </Activity>
        </span>
    );
}
