import { Activity, type HTMLAttributes, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";


/* 
Badge component

showZero -> Controls whether the badge is hidden when content is zero.
variant -> The variant to use. 'dot' or 'standard'.
color -> The color to use.
*/
const BadgeTV = tv({
    base: ["ui-badge inline-flex", "text-xs",
        "[&_svg]:size-6 [&_svg]:stroke-neutral-500",
        "[&_span]:rounded-full",
        "relative [&_span]:absolute [&_span]:top-0 [&_span]:right-0",
        "[&_span]:translate-x-1/2 [&_span]:-translate-y-1/2",
        "[&_span]:origin-[100%_50%]",
    ],
    variants: {
        invisible: {
            true: '[&_span]:hidden'
        },
        variant: {
            dot: "[&_span]:size-2",
            standard: "[&_span]:size-fit [&_span]:px-1.25",
        },
        color: {
            primary: ["[&_span]:bg-primary [&_span]:text-white"],
            secondary: ["[&_span]:bg-secondary [&_span]:text-white"],
            success: ["[&_span]:bg-green-500 [&_span]:text-white"],
            error: ["[&_span]:bg-red-500 [&_span]:text-white"],
            info: ["[&_span]:bg-sky-500 [&_span]:text-white"],
            warning: ["[&_span]:bg-yellow-500 [&_span]:text-white"],
        }
    },
    defaultVariants: {
        invisible: false,
        variant: 'standard',
        color: 'primary',
    },
    compoundVariants: []
});

type BadgeProps = HTMLAttributes<HTMLSpanElement> & VariantProps<typeof BadgeTV> & {
    max?: number;
    invisible?: boolean;
    showZero?: boolean;
    badgeContent?: ReactNode;
};

export default function Badge(
    { variant = "standard", color = "primary", invisible = false, showZero = true,
        badgeContent = null, max = 99, children, className = '',
        ...props }: BadgeProps) {

    return (
        <span data-variant={variant} data-color={color} data-invisible={invisible} data-show-zero={showZero}
            className={twMerge(BadgeTV({ variant, color, invisible }), className)}
            {...props}
        >
            <Activity mode={children !== null ? 'visible' : 'hidden'}>
                {children}
            </Activity>
            <Activity mode={variant !== 'dot' && (badgeContent !== null && badgeContent !== 0 || showZero) ? 'visible' : 'hidden'}>
                <span>{typeof badgeContent === 'number' && badgeContent > max ? `${max}+` : badgeContent}</span>
            </Activity>
            <Activity mode={variant === 'dot' ? 'visible' : 'hidden'}>
                <span />
            </Activity>
        </span>
    );
}
