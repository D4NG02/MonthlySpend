import { type SelectHTMLAttributes } from 'react';
import { tv, type VariantProps } from "tailwind-variants";
import { twMerge } from "tailwind-merge";

/* 
    Select component
    - Renders a customizable select dropdown
    - Supports different variants
    - Uses tailwind-variants for styling
*/

const SelectTV = tv({
    base: [
        "ui_select",
        "select-none rounded-lg",
        'w-full border border-gray-300 rounded px-3 py-2'
    ],
    variants: {
        variant: {
            filled: "",
            contained: "",
        },
    },
    defaultVariants: {
        variant: 'filled',
    },
    compoundVariants: []
});

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & VariantProps<typeof SelectTV> & {};

export default function Select(
    { variant = 'filled', className = '', children, name, ...props }: SelectProps) {

    return (
        <select className={twMerge(SelectTV({ variant }), className)}
            aria-label={name} id={name} {...props}
        >
            {children}
        </select>
    );
}
