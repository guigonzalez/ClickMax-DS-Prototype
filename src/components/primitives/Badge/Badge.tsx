import type { HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  [
    'inline-flex items-center justify-center',
    'h-6 px-2.5 py-0.5',
    'text-xs font-medium',
    'rounded-md',
  ],
  {
    variants: {
      variant: {
        default: 'bg-bg-secondary text-text-primary',
        success: 'bg-feedback-success text-text-inverse',
        warning: 'bg-feedback-warning text-text-inverse',
        error: 'bg-feedback-error text-text-inverse',
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
