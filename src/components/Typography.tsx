
import { type HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

const TypographyTV = tv({
    base: "select-none text-neutral-800",
    variants: {
        variant: {
            h1: "font-light text-8xl leading-[1.17] tracking-[-1.5px]",
            h2: "font-light text-6xl leading-[1.2] tracking-[-0.5px]",
            h3: "text-5xl leading-[1.15] tracking-normal",
            h4: "text-4xl leading-[1.15] tracking-normal",
            h5: "text-2xl tracking-normal",
            h6: "font-medium text-xl leading-[1.6] tracking-[0.15px]",
            body1: "text-base leading-[1.5] tracking-[0.15px]",
            // body2: "text-base",
            // caption: "text-xs",
            // inherit: "text-inherit",
            // overline: "text-xs uppercase tracking-wider",
            // subtitle1: "text-lg",
            // subtitle2: "text-base",
        },
    },
    defaultVariants: {
        variant: 'body1',
    },
});

type TypographyProps = HTMLAttributes<HTMLElement> & VariantProps<typeof TypographyTV>;

export default function Typography({ variant = "body1", className = '', children, ...props }: TypographyProps) {

    switch (variant) {
        case "h1":
            return <h1 className={twMerge(TypographyTV({ variant }), className)} {...props}>{children}</h1>;
        case "h2":
            return <h2 className={twMerge(TypographyTV({ variant }), className)} {...props}>{children}</h2>;
        case "h3":
            return <h3 className={twMerge(TypographyTV({ variant }), className)} {...props}>{children}</h3>;
        case "h4":
            return <h4 className={twMerge(TypographyTV({ variant }), className)} {...props}>{children}</h4>;
        case "h5":
            return <h5 className={twMerge(TypographyTV({ variant }), className)} {...props}>{children}</h5>;
        case "h6":
            return <h6 className={twMerge(TypographyTV({ variant }), className)} {...props}>{children}</h6>;
        // case "subtitle1":
        //     return <h6 data-variant={variant} className={twMerge(TypographyTV({ variant }), className)} {...props}>{children}</h6>;
        // case "subtitle2":
        //     return <h6 data-variant={variant} className={twMerge(TypographyTV({ variant }), className)} {...props}>{children}</h6>;
        // case "body1":
        //     return <p data-variant={variant} className={twMerge(TypographyTV({ variant }), className)} {...props}>{children}</p>;
        // case "body2":
        //     return <p data-variant={variant} className={twMerge(TypographyTV({ variant }), className)} {...props}>{children}</p>;
        // case "inherit":
        //     return <p data-variant={variant} className={twMerge(TypographyTV({ variant }), className)} {...props}>{children}</p>;
        default:
            return <span data-variant={variant} className={twMerge(TypographyTV({ variant }), className)} {...props}>{children}</span>;
    }
}
