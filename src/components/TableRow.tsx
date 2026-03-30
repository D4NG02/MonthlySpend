import { type HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";
import TableCell from "./TableCell";

/* 
    TableRow component
    - Renders a table row with optional hover and selected styles
*/

const TableRowTV = tv({
    base: "ui_table-row",
    variants: {
        hover: {
            true: ''
        },
        selected: {
            true: 'aria-checked:bg-gray-300'
        },
        variant: {
            head: "text-slate-50 bg-gray-500",
            body: [
                "border-y border-gray-200",
                "odd:bg-gray-100 even:bg-white",
                "hover:bg-gray-200"
            ],
        },
    },
    defaultVariants: {
        hover: false,
        selected: false,
        variant: 'body',
    },
    compoundVariants: []
});

type TableRowProps = HTMLAttributes<HTMLTableRowElement> & VariantProps<typeof TableRowTV> & {
    checkBox?: boolean;
};

export default function TableRow(
    { checkBox = false, hover = false, selected = false, variant = 'body', children, className = '', ...props }: TableRowProps) {

    return (
        <tr className={twMerge(TableRowTV({ hover, selected, variant }), className)}
            aria-checked={selected} {...props}>
            {checkBox &&
                <TableCell>
                    <input type='checkBox' checked={selected} className="size-4" />
                </TableCell>
            }
            {children}
        </tr>
    );
}
