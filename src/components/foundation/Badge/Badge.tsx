import type { HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils';

const badgeVariants = cva(
  [
    'inline-flex items-center justify-center',
    'h-6 px-2.5 py-0.5',
    // Using Body 12 Medium tokens
    'text-[0.75rem] font-medium leading-[1.5]',
    'rounded-md',
  ],
  {
    variants: {
      variant: {
        default: 'bg-neutral-200 text-text-primary border border-neutral-300',
        primary: 'bg-interactive-primary-default text-white',
        action: 'bg-interactive-action-default text-neutral-900 font-semibold', // Keep semibold for action emphasis
        success: 'bg-feedback-success text-text-inverse',
        warning: 'bg-feedback-warning text-text-inverse',
        error: 'bg-feedback-error text-text-inverse',
        info: 'bg-feedback-info text-text-inverse',
        outline: 'border border-border-default text-text-primary',
        secondary: 'bg-bg-secondary text-text-secondary',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
