import { type HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";


/* 
    TableCell component
    - Renders a table cell, either as a header (<th>) or body (<td>) cell
*/
const TableCellTV = tv({
    base: [
        "ui_table-cell select-none",
    ],
    variants: {
        component: {
            head: "capitalize text-left",
            body: "text-justify",
        },
        size: {
            small: "text-sm py-1.5 px-4",
            medium: "text-base p-4",
        },
    },
    defaultVariants: {
        component: "body",
        size: 'small',
    },
    compoundVariants: []
});

type TableCellProps = HTMLAttributes<HTMLTableCellElement> & VariantProps<typeof TableCellTV> & {
    component?: "head" | "body" | "footer";
};

export default function TableCell(
    { component = "body", children, className = '', ...props }: TableCellProps) {

    if (component === "head") {
        return (
            <th className={twMerge(TableCellTV({ component }), className)} {...props}>
                {children}
            </th>
        );
    } else {
        return (
            <td className={twMerge(TableCellTV({ component }), className)} {...props}>
                {children}
            </td>
        );
    }

}
