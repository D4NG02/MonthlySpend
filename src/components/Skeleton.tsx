import { type ButtonHTMLAttributes } from 'react';
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

/*
    Skeleton component
    - variant: text, circular, rectangular, rounded
    - default: rectangular
*/

const SkeletonTV = tv({
    base: [
        "ui_skeleton",
        "bg-gray-300",
    ],
    variants: {
        variant: {
            text: "",
            circular: "",
            rectangular: "w-full bg-gray-300 animate-pulse",
            rounded: "w-full rounded-full animate-pulse",
        },
    },
    defaultVariants: {
        variant: 'rectangular'
    },
});

type SkeletonProps = ButtonHTMLAttributes<HTMLDivElement> & VariantProps<typeof SkeletonTV>;

export default function Skeleton(
    { variant = "rectangular", className = '', children, ...props }: SkeletonProps) {

    return (
        <div
            className={twMerge(SkeletonTV({ variant }), className)}
            {...props} />
    );
}
