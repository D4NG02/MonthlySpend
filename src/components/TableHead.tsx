import { type HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";


/* 
    TableHead component
    - Renders the table head section with predefined styles
*/

type TableHeadProps = HTMLAttributes<HTMLTableSectionElement>

export default function TableHead(
    { children, className = '', ...props }: TableHeadProps) {

    return (
        <thead {...props} className={twMerge( "ui_table-head", className)}>
            {children}
        </thead>
    );
}
