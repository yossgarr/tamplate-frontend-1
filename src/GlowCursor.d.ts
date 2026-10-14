import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';

export interface GlowCursorProps extends Omit<HTMLAttributes<HTMLDivElement>, 'color'> {
  color?: string;
  secondaryColor?: string;
  intensity?: number;
  trailWidth?: number;
  linger?: number;
  glow?: number;
  hotspot?: number;
  followSpeed?: number;
  grain?: number;
  clickBurst?: boolean;
  quality?: 'low' | 'medium' | 'high';
  theme?: 'dark' | 'light';
  blendMode?: string;
  maxDevicePixelRatio?: number;
  enabled?: boolean;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

declare const GlowCursor: (props: GlowCursorProps) => React.JSX.Element;
export default GlowCursor;
