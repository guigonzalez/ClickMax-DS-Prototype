import { forwardRef, type InputHTMLAttributes, useId } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  description?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { className, label, error, description, id, type = 'text', ...props },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id || generatedId;
    const descriptionId = `${inputId}-description`;
    const errorId = `${inputId}-error`;

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              'text-sm font-medium text-text-primary',
              props.disabled && 'opacity-70'
            )}
          >
            {label}
          </label>
        )}
        {description && !error && (
          <p id={descriptionId} className="text-sm text-text-secondary">
            {description}
          </p>
        )}
        <input
          type={type}
          id={inputId}
          ref={ref}
          aria-describedby={
            error ? errorId : description ? descriptionId : undefined
          }
          aria-invalid={error ? 'true' : undefined}
          className={cn(
            'h-10 w-full rounded-lg border',
            'px-3 py-2',
            'text-sm bg-bg-primary text-text-primary',
            'border-border-default',
            'placeholder:text-text-secondary',
            'transition-colors duration-150',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
            'focus-visible:ring-interactive-default',
            'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-bg-disabled',
            error && 'border-feedback-error focus-visible:ring-feedback-error',
            className
          )}
          {...props}
        />
        {error && (
          <p
            id={errorId}
            className="text-sm text-feedback-error"
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
