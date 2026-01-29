import { forwardRef } from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils';

const radioGroupVariants = cva('grid gap-3');

const radioItemVariants = cva(
  [
    'aspect-square rounded-full',
    'border-2 border-border-strong',
    'transition-colors duration-150',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-interactive-primary-focus',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'data-[state=checked]:border-interactive-primary-default',
  ],
  {
    variants: {
      size: {
        sm: 'h-4 w-4',
        md: 'h-5 w-5',
        lg: 'h-6 w-6',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

const radioIndicatorVariants = cva(
  [
    'flex items-center justify-center',
    'after:content-[""] after:block after:rounded-full',
    'after:bg-interactive-primary-default',
  ],
  {
    variants: {
      size: {
        sm: 'after:h-2 after:w-2',
        md: 'after:h-2.5 after:w-2.5',
        lg: 'after:h-3 after:w-3',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export interface RadioGroupProps
  extends RadioGroupPrimitive.RadioGroupProps {}

const RadioGroup = forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn(radioGroupVariants({ className }))}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

export interface RadioGroupItemProps
  extends Omit<RadioGroupPrimitive.RadioGroupItemProps, 'size'>,
    VariantProps<typeof radioItemVariants> {
  /**
   * Label text for the radio item
   */
  label?: string;
  /**
   * Description text shown below the label
   */
  description?: string;
}

const RadioGroupItem = forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(({ className, size, label, description, ...props }, ref) => {
  const radioElement = (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(radioItemVariants({ size, className }))}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        className={radioIndicatorVariants({ size })}
      />
    </RadioGroupPrimitive.Item>
  );

  if (label || description) {
    return (
      <div className="flex items-start gap-2">
        {radioElement}
        <div className="flex flex-col gap-0.5">
          {label && (
            <label
              htmlFor={props.id}
              // Using Body 14 Medium tokens
              className="text-[0.875rem] font-medium leading-[1.5] text-text-primary cursor-pointer select-none"
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

  return radioElement;
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem, radioGroupVariants, radioItemVariants };
