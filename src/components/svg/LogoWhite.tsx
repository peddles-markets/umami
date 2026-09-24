import type { SVGProps } from 'react';

/** The Peddles mark for dark surfaces, where `currentColor` is not white. */
const SvgLogoWhite = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 100 100"
    fill="none"
    {...props}
  >
    <rect x={24} y={30} width={19} height={46} rx={5.5} fill="#2b8bff" />
    <rect x={57} y={20} width={19} height={36} rx={5.5} fill="#F3F0E8" />
    <rect x={42} y={46} width={16} height={5.5} rx={2.75} fill="#2b8bff" />
  </svg>
);
export default SvgLogoWhite;
