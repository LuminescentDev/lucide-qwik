import { QwikDOMAttributes } from '@builder.io/qwik';

export interface IconProps extends QwikDOMAttributes {
  size?: number,
  color?: string,
  strokeWidth?: number,
  strokeLinecap?: 'round' | 'butt' | 'square' | 'inherit' | undefined,
  strokeLinejoin?: 'round' | 'inherit' | 'miter' | 'bevel' | undefined
}

export interface BaseIconProps extends IconProps {
  name: string
}
