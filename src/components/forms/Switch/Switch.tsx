import { forwardRef } from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils';

const switchVariants = cva(
  [
    'peer inline-flex shrink-0 cursor-pointer items-center rounded-full',
    'border-2 border-transparent',
    'transition-colors duration-150',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-interactive-primary-focus',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'data-[state=checked]:bg-interactive-primary-default',
    'data-[state=unchecked]:bg-bg-secondary',
  ],
  {
    variants: {
      size: {
        sm: 'h-[18px] w-8',
        md: 'h-6 w-10',
        lg: 'h-7 w-12',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

const switchThumbVariants = cva(
  [
    'pointer-events-none block rounded-full bg-bg-primary shadow-md',
    'transition-transform duration-150',
    'data-[state=unchecked]:translate-x-0.5',
  ],
  {
    variants: {
      size: {
        sm: 'h-3.5 w-3.5 data-[state=checked]:translate-x-[15px]',
        md: 'h-5 w-5 data-[state=checked]:translate-x-5',
        lg: 'h-6 w-6 data-[state=checked]:translate-x-6',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export interface SwitchProps
  extends Omit<SwitchPrimitive.SwitchProps, 'size'>,
    VariantProps<typeof switchVariants> {
  /**
   * Label text for the switch
   */
  label?: string;
  /**
   * Description text shown below the label
   */
  description?: string;
}

const Switch = forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(({ className, size, label, description, ...props }, ref) => {
  const switchElement = (
    <SwitchPrimitive.Root
      className={cn(switchVariants({ size, className }))}
      {...props}
      ref={ref}
    >
      <SwitchPrimitive.Thumb className={cn(switchThumbVariants({ size }))} />
    </SwitchPrimitive.Root>
  );

  if (label || description) {
    return (
      <div className="flex items-start gap-2">
        {switchElement}
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

  return switchElement;
});

Switch.displayName = SwitchPrimitive.Root.displayName;

export { Switch, switchVariants };
