import type { CSSProperties } from 'styled-components';

type Props = {
  style?: CSSProperties;
};

export function ChevronIcon({ style }: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        d="M6 15L12 9L18 15"
        stroke="#007BFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
