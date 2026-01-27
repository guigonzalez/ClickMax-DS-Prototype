import { forwardRef, useId, type TextareaHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const textareaVariants = cva(
  [
    'flex w-full rounded-lg',
    'border-2 border-border-default',
    'bg-bg-primary',
    'px-3 py-2',
    'text-sm text-text-primary',
    'placeholder:text-text-secondary',
    'transition-colors duration-150',
    'focus-visible:outline-none focus-visible:border-interactive-default focus-visible:ring-2 focus-visible:ring-interactive-default focus-visible:ring-offset-2',
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
            className="text-sm font-medium text-text-primary"
          >
            {label}
          </label>
        )}
        {description && !error && (
          <p id={descriptionId} className="text-sm text-text-secondary">
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
          ref={ref}
          aria-describedby={ariaDescribedBy || undefined}
          aria-invalid={error ? true : undefined}
          {...props}
        />
        {error && (
          <p id={errorId} className="text-sm text-feedback-error">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export { Textarea, textareaVariants };
