// Pixel art icon components (pixelarticons)
// Single-file home for all inline SVG icons used across the extension.

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
  'aria-hidden'?: boolean;
}

const icon = (path: string | string[]) =>
  function Icon({ className, style, 'aria-hidden': ariaHidden }: IconProps) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style} aria-hidden={ariaHidden}>
        {(Array.isArray(path) ? path : [path]).map((d, i) => <path key={i} d={d} />)}
      </svg>
    );
  };

export const LockIcon     = icon("M5 8h14v2H5zm0 12h14v2H5zM3 10h2v10H3zm16 0h2v10h-2zM7 4h2v4H7zm2-2h6v2H9zm6 2h2v4h-2z");
export const UnlockIcon   = icon("M5 8h14v2H5zm0 12h14v2H5zM3 10h2v10H3zm16 0h2v10h-2zM7 4h2v4H7zm2-2h6v2H9zm6 2h2v2h-2z");
export const SettingsIcon = icon([
  "M9 0h6v2H9zm6 24H9v-2h6zM0 15V9h2v6zm24-6v6h-2V9zM9 2h2v4H9zm6 20h-2v-4h2zM2 15v-2h4v2zm20-6v2h-4V9zm-9-7h2v4h-2zm-2 20H9v-4h2zM2 11V9h4v2zm20 2v2h-4v-2zM7 4h2v2H7zm10 0h-2v2h2zm0 16h-2v-2h2zM7 20h2v-2H7zM2 2h5v2H2zm20 0h-5v2h5zm0 20h-5v-2h5zM2 22h5v-2H2z",
  "M2 2h2v5H2zm20 0h-2v5h2zm0 20h-2v-5h2zM2 22h2v-5H2zM4 7h2v2H4zm16 0h-2v2h2zm0 10h-2v-2h2zM4 17h2v-2H4zm6-9h4v2h-4zm0 6h4v2h-4zm-2-4h2v4H8zm6 0h2v4h-2z",
]);