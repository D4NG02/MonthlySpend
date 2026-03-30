import { type HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

/* 
    TableBody component
    - Renders the table body section with predefined styles
*/

type TableBodyProps = HTMLAttributes<HTMLTableSectionElement>;

export default function TableBody(
    { children, className = '', ...props }: TableBodyProps) {

    return (
        <tbody className={twMerge("ui_table-body", className)}
            {...props}>
            {children}
        </tbody>
    );
}
