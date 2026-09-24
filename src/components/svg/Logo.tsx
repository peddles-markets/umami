import type { SVGProps } from 'react';

/**
 * The Peddles mark — the "wicks" glyph.
 *
 * Deliberately NOT the full brand tile: the lockup's dark rounded square would sit as a black
 * block inside the nav on a light theme. The two bars carry the identity on their own, so the
 * background is dropped and the taller bar is `currentColor`, which lets the mark invert with the
 * surface it is on instead of needing a second asset per theme.
 *
 * The shorter bar keeps the brand blue at all times — it is the one element that says Peddles
 * rather than "some glyph", and it reads on both themes.
 */
const SvgLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 100 100"
    fill="none"
    {...props}
  >
    <rect x={24} y={30} width={19} height={46} rx={5.5} fill="#2b8bff" />
    <rect x={57} y={20} width={19} height={36} rx={5.5} fill="currentColor" />
    <rect x={42} y={46} width={16} height={5.5} rx={2.75} fill="#2b8bff" />
  </svg>
);
export default SvgLogo;
