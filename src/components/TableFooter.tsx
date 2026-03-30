import { type HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

/* 
    TableFooter component
    - Renders the table footer section with predefined styles
*/

type TableFooterProps = HTMLAttributes<HTMLTableSectionElement>;

export default function TableFooter(
    { children, className = '', ...props }: TableFooterProps) {

    return (
        <tfoot className={twMerge("ui_table-footer", className)}
            {...props}>
            {children}
        </tfoot>
    );
}
