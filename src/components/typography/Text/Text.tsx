import React from 'react';
import { cn } from '../../../utils/cn';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * The text variant to use
   * @default 'body16'
   */
  variant?:
    | 'subheading18'
    | 'subheading16'
    | 'subheading14'
    | 'body18'
    | 'body16'
    | 'body14'
    | 'body12'
    | 'overline10'
    | 'xsmall8';

  /**
   * Font weight variation
   * @default 'regular'
   */
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';

  /**
   * The content of the text
   */
  children: React.ReactNode;

  /**
   * HTML element to render
   * @default 'p'
   */
  as?: 'p' | 'span' | 'div' | 'label' | 'strong' | 'em';

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Text alignment
   * @default 'left'
   */
  align?: 'left' | 'center' | 'right' | 'justify';

  /**
   * Text color override
   */
  color?: 'primary' | 'secondary' | 'tertiary' | 'inverse' | 'accent' | 'disabled';
}

const variantStyles = {
  subheading18: {
    fontFamily: 'var(--font-heading)',
    fontSize: 'var(--subheading-18-size)',
    fontWeight: 'var(--subheading-18-weight)',
    lineHeight: 'var(--subheading-18-line-height)',
    letterSpacing: 'var(--subheading-18-letter-spacing)',
  },
  subheading16: {
    fontFamily: 'var(--font-heading)',
    fontSize: 'var(--subheading-16-size)',
    fontWeight: 'var(--subheading-16-weight)',
    lineHeight: 'var(--subheading-16-line-height)',
    letterSpacing: 'var(--subheading-16-letter-spacing)',
  },
  subheading14: {
    fontFamily: 'var(--font-heading)',
    fontSize: 'var(--subheading-14-size)',
    fontWeight: 'var(--subheading-14-weight)',
    lineHeight: 'var(--subheading-14-line-height)',
    letterSpacing: 'var(--subheading-14-letter-spacing)',
  },
  body18: {
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--body-18-size)',
    lineHeight: 'var(--body-18-line-height)',
    letterSpacing: 'var(--body-18-letter-spacing)',
  },
  body16: {
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--body-16-size)',
    lineHeight: 'var(--body-16-line-height)',
    letterSpacing: 'var(--body-16-letter-spacing)',
  },
  body14: {
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--body-14-size)',
    lineHeight: 'var(--body-14-line-height)',
    letterSpacing: 'var(--body-14-letter-spacing)',
  },
  body12: {
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--body-12-size)',
    lineHeight: 'var(--body-12-line-height)',
    letterSpacing: 'var(--body-12-letter-spacing)',
  },
  overline10: {
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--overline-10-size)',
    lineHeight: 'var(--overline-10-line-height)',
    letterSpacing: 'var(--overline-10-letter-spacing)',
  },
  xsmall8: {
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--xsmall-8-size)',
    lineHeight: 'var(--xsmall-8-line-height)',
    letterSpacing: 'var(--xsmall-8-letter-spacing)',
  },
} as const;

const weightMap = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

const alignmentStyles = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
  justify: 'text-justify',
} as const;

const colorStyles = {
  primary: 'text-(--text-primary)',
  secondary: 'text-(--text-secondary)',
  tertiary: 'text-(--text-tertiary)',
  inverse: 'text-(--text-inverse)',
  accent: 'text-(--text-accent)',
  disabled: 'text-(--text-disabled)',
} as const;

/**
 * Text component following the design system typography scale
 *
 * @example
 * ```tsx
 * <Text variant="body16" weight="regular">Body text</Text>
 * <Text variant="body14" weight="semibold" color="secondary">Small bold text</Text>
 * <Text variant="overline10" weight="medium">Label</Text>
 * ```
 */
export const Text = React.forwardRef<HTMLElement, TextProps>(
  (
    {
      variant = 'body16',
      weight = 'regular',
      children,
      as: Component = 'p',
      className,
      align = 'left',
      color = 'primary',
      style,
      ...props
    },
    ref
  ) => {
    const isSubheading = variant.startsWith('subheading');
    const isOverline = variant === 'overline10';

    // Subheadings always use bold weight from CSS variable
    const fontWeight = isSubheading ? undefined : weightMap[weight];

    return (
      <Component
        ref={ref}
        style={{
          ...variantStyles[variant],
          ...(fontWeight && { fontWeight }),
          ...style,
        }}
        className={cn(
          alignmentStyles[align],
          colorStyles[color],
          isOverline && 'uppercase',
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Text.displayName = 'Text';
