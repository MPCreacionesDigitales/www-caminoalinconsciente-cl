import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { CHECKOUT_URL } from "@/lib/site-config";

const ctaVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-soft hover:-translate-y-0.5 hover:shadow-elevated",
        gold: "bg-gold text-gold-foreground shadow-soft hover:-translate-y-0.5 hover:shadow-elevated",
        outline:
          "border border-primary/25 text-primary hover:bg-primary/5 hover:-translate-y-0.5",
      },
      size: {
        md: "min-h-11 px-7 text-sm",
        lg: "min-h-14 px-9 text-base",
        xl: "min-h-16 px-10 text-base sm:text-lg",
      },
    },
    defaultVariants: { variant: "primary", size: "lg" },
  },
);

type Props = VariantProps<typeof ctaVariants> & {
  children: React.ReactNode;
  className?: string;
  href?: string;
};

export function CtaButton({ children, className, variant, size, href }: Props) {
  return (
    <a
      href={href ?? CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-cta="checkout"
      className={cn(ctaVariants({ variant, size }), className)}
    >
      {children}
    </a>
  );
}
