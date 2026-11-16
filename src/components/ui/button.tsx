import type { ButtonHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
const variants = cva(
  'inline-flex items-center justify-center rounded-xl px-4 py-2 font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-emerald-900 text-white hover:bg-emerald-800',
        outline: 'border border-stone-300 bg-white hover:bg-stone-100',
      },
    },
    defaultVariants: { variant: 'default' },
  },
);
export function Button({
  className,
  variant,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof variants>) {
  return (
    <button
      className={twMerge(clsx(variants({ variant }), className))}
      {...props}
    />
  );
}
