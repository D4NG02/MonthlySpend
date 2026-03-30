import { type HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";


/* 
    Table component
    - Renders a table with dynamic headers based on the keys of the data objects
    - Supports sticky headers
*/

const TableTV = tv({
    base: [
        "ui_table",
        "table w-full border-collapse",
    ],
    variants: {
        stickyHeader: {
            true: '[&_thead]:sticky [&_thead]:top-0'
        },
    },
    defaultVariants: {
        stickyHeader: false,
    },
    compoundVariants: []
});

type TableProps = HTMLAttributes<HTMLTableElement> & VariantProps<typeof TableTV>

export default function Table(
    { stickyHeader = false, children, className = '', ...props }: TableProps) {

    return (
        <table className={twMerge(TableTV({ stickyHeader }), className)} {...props}>
            {children}
        </table>
    );
}
