import { forwardRef, useId, type TextareaHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils';

const textareaVariants = cva(
  [
    'flex w-full rounded-lg',
    'border-2 border-border-default',
    'bg-bg-primary',
    'px-3 py-2',
    // Using Body 14 Regular tokens
    'text-[0.875rem] font-normal leading-[1.5] text-text-primary',
    'placeholder:text-text-secondary',
    'transition-colors duration-150',
    'focus-visible:outline-none focus-visible:border-interactive-primary-default focus-visible:ring-2 focus-visible:ring-interactive-primary-focus focus-visible:ring-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'resize-y',
  ],
  {
    variants: {
      variant: {
        default: '',
        error: 'border-feedback-error focus-visible:border-feedback-error focus-visible:ring-feedback-error',
      },
      textareaSize: {
        sm: 'min-h-[80px]',
        md: 'min-h-[100px]',
        lg: 'min-h-[120px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      textareaSize: 'md',
    },
  }
);

export interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>,
    VariantProps<typeof textareaVariants> {
  /**
   * Label text for the textarea
   */
  label?: string;
  /**
   * Description text shown below the label
   */
  description?: string;
  /**
   * Error message to display
   */
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      variant,
      textareaSize,
      label,
      description,
      error,
      id: providedId,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const id = providedId || generatedId;
    const descriptionId = description ? `${id}-description` : undefined;
    const errorId = error ? `${id}-error` : undefined;

    const ariaDescribedBy = [descriptionId, errorId]
      .filter(Boolean)
      .join(' ');

    return (
      <div className="flex flex-col gap-1 w-full">
        {label && (
          <label
            htmlFor={id}
            // Using Body 14 Medium tokens
            className="text-[0.875rem] font-medium leading-[1.5] text-text-primary"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {label}
          </label>
        )}
        {description && !error && (
          <p
            id={descriptionId}
            // Using Body 14 Regular tokens
            className="text-[0.875rem] font-normal leading-[1.5] text-text-secondary"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {description}
          </p>
        )}
        <textarea
          id={id}
          className={cn(
            textareaVariants({
              variant: error ? 'error' : variant,
              textareaSize,
              className,
            })
          )}
          style={{ fontFamily: 'var(--font-body)' }}
          ref={ref}
          aria-describedby={ariaDescribedBy || undefined}
          aria-invalid={error ? true : undefined}
          {...props}
        />
        {error && (
          <p
            id={errorId}
            // Using Body 14 Regular tokens
            className="text-[0.875rem] font-normal leading-[1.5] text-feedback-error"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export { Textarea, textareaVariants };
