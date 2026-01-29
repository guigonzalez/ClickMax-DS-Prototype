import React from 'react';
import { cn } from '../../../utils/cn';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /**
   * The heading level (h1-h6)
   * @default 'h2'
   */
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

  /**
   * The content of the heading
   */
  children: React.ReactNode;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Text alignment
   * @default 'left'
   */
  align?: 'left' | 'center' | 'right';
}

const headingStyles = {
  h1: {
    fontFamily: 'var(--font-heading)',
    fontSize: 'var(--heading-h1-size)',
    fontWeight: 'var(--heading-h1-weight)',
    lineHeight: 'var(--heading-h1-line-height)',
    letterSpacing: 'var(--heading-h1-letter-spacing)',
  },
  h2: {
    fontFamily: 'var(--font-heading)',
    fontSize: 'var(--heading-h2-size)',
    fontWeight: 'var(--heading-h2-weight)',
    lineHeight: 'var(--heading-h2-line-height)',
    letterSpacing: 'var(--heading-h2-letter-spacing)',
  },
  h3: {
    fontFamily: 'var(--font-heading)',
    fontSize: 'var(--heading-h3-size)',
    fontWeight: 'var(--heading-h3-weight)',
    lineHeight: 'var(--heading-h3-line-height)',
    letterSpacing: 'var(--heading-h3-letter-spacing)',
  },
  h4: {
    fontFamily: 'var(--font-heading)',
    fontSize: 'var(--heading-h4-size)',
    fontWeight: 'var(--heading-h4-weight)',
    lineHeight: 'var(--heading-h4-line-height)',
    letterSpacing: 'var(--heading-h4-letter-spacing)',
  },
  h5: {
    fontFamily: 'var(--font-heading)',
    fontSize: 'var(--heading-h5-size)',
    fontWeight: 'var(--heading-h5-weight)',
    lineHeight: 'var(--heading-h5-line-height)',
    letterSpacing: 'var(--heading-h5-letter-spacing)',
  },
  h6: {
    fontFamily: 'var(--font-heading)',
    fontSize: 'var(--heading-h6-size)',
    fontWeight: 'var(--heading-h6-weight)',
    lineHeight: 'var(--heading-h6-line-height)',
    letterSpacing: 'var(--heading-h6-letter-spacing)',
  },
} as const;

const alignmentStyles = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
} as const;

/**
 * Heading component following the design system typography scale
 *
 * @example
 * ```tsx
 * <Heading level="h1">Main Title</Heading>
 * <Heading level="h2" align="center">Subtitle</Heading>
 * ```
 */
export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level = 'h2', children, className, align = 'left', style, ...props }, ref) => {
    const Component = level;

    return (
      <Component
        ref={ref}
        style={{
          ...headingStyles[level],
          ...style,
        }}
        className={cn(alignmentStyles[align], 'text-(--text-primary)', className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Heading.displayName = 'Heading';
