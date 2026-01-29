import { forwardRef, type InputHTMLAttributes, useId } from 'react';
import { cn } from '@/utils';

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
            // Using Body 14 Medium tokens
            className={cn(
              'text-[0.875rem] font-medium leading-[1.5] text-text-primary',
              props.disabled && 'opacity-70'
            )}
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
            // Using Body 14 Regular tokens
            'text-[0.875rem] font-normal leading-[1.5] bg-bg-primary text-text-primary',
            'border-border-default',
            'placeholder:text-text-secondary',
            'transition-colors duration-150',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
            'focus-visible:ring-interactive-primary-focus',
            'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-bg-disabled',
            error && 'border-feedback-error focus-visible:ring-feedback-error',
            className
          )}
          style={{ fontFamily: 'var(--font-body)' }}
          {...props}
        />
        {error && (
          <p
            id={errorId}
            // Using Body 14 Regular tokens
            className="text-[0.875rem] font-normal leading-[1.5] text-feedback-error"
            style={{ fontFamily: 'var(--font-body)' }}
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
