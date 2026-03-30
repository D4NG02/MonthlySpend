import { type HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

/* 
    TableContainer component
    - Renders a container for tables with optional sticky header
*/

const TableContainerTV = tv({
    base: [
        "ui_table-container text-xs",
        "box-shadow-md rounded-md overflow-y-auto",
        "border border-gray-300"
    ],
    variants: {
        stickyHeader: {
            true: '[&_thead]:sticky [&_thead]:top-0'
        },
        size: {
            small: "",
            medium: "",
        },
    },
    defaultVariants: {
        stickyHeader: false,
        size: 'medium',
    },
    compoundVariants: []
});

type TableContainerProps = HTMLAttributes<HTMLTableElement> & VariantProps<typeof TableContainerTV>;

export default function TableContainer(
    { size = "medium", stickyHeader = false, children, className = '', ...props }: TableContainerProps) {

    return (
        <div data-size={size} data-sticky-header={stickyHeader}
            className={twMerge(TableContainerTV({ size, stickyHeader }), className)}
            {...props}
        >
            {children}
        </div>
    );
}
