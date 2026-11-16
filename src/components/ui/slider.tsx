// shadcn-style local primitive, built on Radix Slider. Labels and units belong to the caller.
import * as SliderPrimitive from '@radix-ui/react-slider';
import type { ComponentProps } from 'react';
export function Slider({
  'aria-label': label,
  'aria-labelledby': labelledBy,
  'aria-valuetext': valueText,
  ...props
}: ComponentProps<typeof SliderPrimitive.Root>) {
  return (
    <SliderPrimitive.Root className="slider-root" {...props}>
      <SliderPrimitive.Track className="slider-track">
        <SliderPrimitive.Range className="slider-range" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        className="slider-thumb"
        aria-label={label}
        aria-labelledby={labelledBy}
        aria-valuetext={valueText}
      />
    </SliderPrimitive.Root>
  );
}
