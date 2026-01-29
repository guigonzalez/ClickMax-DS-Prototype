import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils';

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center',
    'whitespace-nowrap',
    'rounded-full',
    'transition-all duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    'relative overflow-hidden',
  ],
  {
    variants: {
      variant: {
        // Primary: System buttons (neutral dark) with glossy acqua effect
        primary: [
          'bg-gradient-to-b from-neutral-800 via-interactive-primary-default to-neutral-950',
          'text-white',
          'shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_1px_2px_0_rgba(0,0,0,0.3),0_4px_8px_-2px_rgba(0,0,0,0.2)]',
          'before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-white/20 before:via-transparent before:to-transparent before:opacity-0',
          'hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),0_2px_4px_0_rgba(0,0,0,0.3),0_8px_16px_-4px_rgba(0,0,0,0.25)]',
          'hover:before:opacity-100',
          'active:shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.3)]',
          'active:scale-[0.98]',
          'focus-visible:ring-interactive-primary-focus',
        ],
        // Action: Call-to-Actions (fluor brand) with smooth organic gradient
        action: [
          'bg-gradient-to-t from-[#c5e600] via-[#d4ff00] to-[#e0ff4d]',
          'text-neutral-900',
          'shadow-[inset_0_2px_4px_0_rgba(255,255,255,0.5),inset_0_-2px_4px_0_rgba(197,230,0,0.8),0_1px_2px_0_rgba(0,0,0,0.1),0_4px_16px_-2px_rgba(212,255,0,0.4)]',
          'before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-white/40 before:via-white/10 before:to-transparent before:opacity-0',
          'hover:shadow-[inset_0_2px_4px_0_rgba(255,255,255,0.6),inset_0_-2px_4px_0_rgba(197,230,0,0.9),0_2px_4px_0_rgba(0,0,0,0.1),0_8px_24px_-4px_rgba(212,255,0,0.5)]',
          'hover:before:opacity-100',
          'hover:scale-[1.02]',
          'active:shadow-[inset_0_2px_6px_0_rgba(0,0,0,0.15)]',
          'active:scale-[0.98]',
          'focus-visible:ring-interactive-action-focus',
        ],
        // Secondary: Alternative actions (azure outline)
        secondary: [
          'border-2 border-interactive-secondary-default text-interactive-secondary-default bg-transparent',
          'hover:bg-interactive-secondary-default/10 hover:border-interactive-secondary-hover',
          'active:border-interactive-secondary-active',
          'focus-visible:ring-interactive-secondary-focus',
        ],
        // Tertiary: Info/help actions (purplish)
        tertiary: [
          'bg-interactive-tertiary-default text-white',
          'hover:bg-interactive-tertiary-hover',
          'active:bg-interactive-tertiary-active',
          'focus-visible:ring-interactive-tertiary-focus',
        ],
        // Ghost: Minimal actions (transparent)
        ghost: [
          'bg-interactive-ghost-default text-interactive-ghost-text',
          'hover:bg-interactive-ghost-hover',
          'active:bg-interactive-ghost-active',
          'focus-visible:ring-interactive-primary-focus',
        ],
        // Destructive: Dangerous actions (torch error)
        destructive: [
          'bg-feedback-error text-white',
          'hover:opacity-90',
          'focus-visible:ring-feedback-error',
        ],
        // Outline: Generic outlined button
        outline: [
          'border-2 border-border-default text-text-primary bg-transparent',
          'hover:bg-bg-secondary hover:border-border-strong',
          'focus-visible:ring-border-default',
        ],
        // Link: Text-only button
        link: [
          'text-text-primary underline-offset-4',
          'hover:underline',
          'focus-visible:ring-text-primary',
        ],
      },
      size: {
        // Using Body 12 Medium tokens for sm
        sm: ['h-8', 'px-3', 'gap-1', 'text-[0.75rem]', 'font-medium', 'leading-[1.5]'],
        // Using Body 14 Medium tokens for md
        md: ['h-10', 'px-4', 'gap-2', 'text-[0.875rem]', 'font-medium', 'leading-[1.5]'],
        // Using Body 16 Medium tokens for lg
        lg: ['h-12', 'px-6', 'gap-2', 'text-[1rem]', 'font-medium', 'leading-[1.5]'],
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
