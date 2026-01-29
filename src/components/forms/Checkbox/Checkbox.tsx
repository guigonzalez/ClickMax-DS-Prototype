import { forwardRef } from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check, Minus } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils';

const checkboxVariants = cva(
  [
    'shrink-0',
    'border-2 border-border-strong',
    'rounded',
    'transition-colors duration-150',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-interactive-primary-focus',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'data-[state=checked]:bg-interactive-primary-default data-[state=checked]:border-interactive-primary-default',
    'data-[state=indeterminate]:bg-interactive-primary-default data-[state=indeterminate]:border-interactive-primary-default',
  ],
  {
    variants: {
      size: {
        sm: 'h-4 w-4', // 16px
        md: 'h-5 w-5', // 20px
        lg: 'h-6 w-6', // 24px
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

const iconVariants = cva('text-white', {
  variants: {
    size: {
      sm: 'h-3 w-3', // 12px
      md: 'h-3.5 w-3.5', // 14px
      lg: 'h-4 w-4', // 16px
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export interface CheckboxProps
  extends Omit<CheckboxPrimitive.CheckboxProps, 'size'>,
    VariantProps<typeof checkboxVariants> {
  /**
   * Label text for the checkbox
   */
  label?: string;
  /**
   * Description text shown below the label
   */
  description?: string;
}

const Checkbox = forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, size, label, description, checked, ...props }, ref) => {
  const checkboxElement = (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(checkboxVariants({ size, className }))}
      checked={checked}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
        {checked === 'indeterminate' ? (
          <Minus className={iconVariants({ size })} />
        ) : (
          <Check className={iconVariants({ size })} />
        )}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );

  if (label || description) {
    return (
      <div className="flex items-start gap-2">
        {checkboxElement}
        <div className="flex flex-col gap-0.5 flex-1">
          {label && (
            <label
              htmlFor={props.id}
              // Using Body 14 Medium tokens
              className="text-[0.875rem] font-medium leading-none text-text-primary cursor-pointer select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {label}
            </label>
          )}
          {description && (
            <p
              // Using Body 14 Regular tokens
              className="text-[0.875rem] font-normal leading-[1.5] text-text-secondary"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    );
  }

  return checkboxElement;
});

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox, checkboxVariants };
