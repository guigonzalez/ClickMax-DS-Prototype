import { forwardRef, type SVGProps } from 'react';
import { type LucideIcon } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const iconVariants = cva('', {
  variants: {
    size: {
      xs: 'h-3 w-3',
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
      lg: 'h-6 w-6',
      xl: 'h-8 w-8',
    },
    color: {
      primary: 'text-text-primary',
      secondary: 'text-text-secondary',
      tertiary: 'text-text-tertiary',
      inverse: 'text-text-inverse',
      accent: 'text-text-accent',
      success: 'text-feedback-success',
      warning: 'text-feedback-warning',
      error: 'text-feedback-error',
      info: 'text-feedback-info',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
});

export interface IconProps
  extends Omit<SVGProps<SVGSVGElement>, 'color'>,
    VariantProps<typeof iconVariants> {
  icon: LucideIcon;
}

const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ icon: IconComponent, size, color, className, ...props }, ref) => {
    return (
      <IconComponent
        ref={ref}
        className={cn(iconVariants({ size, color, className }))}
        {...props}
      />
    );
  }
);
Icon.displayName = 'Icon';

export { Icon, iconVariants };
