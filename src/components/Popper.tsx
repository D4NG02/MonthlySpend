import { type HTMLAttributes, type MouseEventHandler } from "react";
import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";

/* 
    Popper component
    - Renders a modal-like popper using React Portal
    - Accepts open state and close handler as props
    - Centers content with backdrop blur effect
*/

type PopperProps = HTMLAttributes<HTMLDivElement> & {
    open?: boolean;
    handleClose?: MouseEventHandler<HTMLDivElement>;
};

export default function Popper({ open = true, handleClose, children, className = '', ...props }: PopperProps) {

    return (
        <>
            {open && createPortal(
                <div className={twMerge('ui_popper', 'fixed inset-0 bg-neutral-300/30 backdrop-blur-sm flex justify-center items-center', className)}
                    onClick={handleClose ? handleClose : undefined} {...props}>
                    <div className={twMerge(
                        'bg-white rounded-lg shadow-lg',
                        'max-w-lg w-full',
                        'p-4 sm:p-6',
                    )} onClick={(e) => e.stopPropagation()}>
                        {children}
                    </div>
                </div>,
                document.body
            )}
        </>
    )
}
