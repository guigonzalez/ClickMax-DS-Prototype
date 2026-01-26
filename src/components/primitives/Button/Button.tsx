import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center',
    'font-medium whitespace-nowrap',
    'rounded-lg',
    'transition-colors duration-150',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-interactive-default text-text-accent',
          'hover:bg-interactive-hover',
          'focus-visible:ring-interactive-default',
        ],
        secondary: [
          'bg-bg-primary text-text-primary border border-border-strong',
          'hover:bg-bg-secondary',
          'focus-visible:ring-border-strong',
        ],
        ghost: [
          'text-text-primary',
          'hover:bg-bg-secondary',
          'focus-visible:ring-text-secondary',
        ],
        destructive: [
          'bg-feedback-error text-text-inverse',
          'hover:opacity-90',
          'focus-visible:ring-feedback-error',
        ],
        outline: [
          'border border-border-default text-text-primary',
          'hover:bg-bg-secondary hover:border-border-strong',
          'focus-visible:ring-border-default',
        ],
        link: [
          'text-text-primary underline-offset-4',
          'hover:underline',
          'focus-visible:ring-text-primary',
        ],
      },
      size: {
        sm: ['h-8 text-sm', 'px-3', 'gap-1'],
        md: ['h-10 text-sm', 'px-4', 'gap-2'],
        lg: ['h-12 text-base', 'px-6', 'gap-2'],
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
