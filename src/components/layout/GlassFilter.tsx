/**
 * Liquid-glass lens for the floating header capsule, used as `backdrop-filter: url(#nw-glass)`.
 * The map keeps the centre neutral (no displacement) and bends the backdrop towards the rim;
 * each colour channel bends by a slightly different amount for a soft chromatic edge.
 * Only Chromium applies SVG filters to backdrops, so HeaderScrollState opts in per browser.
 */
const MAP = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 992 56" preserveAspectRatio="none">
    <defs>
      <linearGradient id="x"><stop offset="0" stop-color="#000"/><stop offset="1" stop-color="#f00"/></linearGradient>
      <linearGradient id="y" x2="0" y2="1"><stop offset="0" stop-color="#000"/><stop offset="1" stop-color="#0f0"/></linearGradient>
      <filter id="b"><feGaussianBlur stdDeviation="9"/></filter>
    </defs>
    <rect width="992" height="56" fill="url(#x)"/>
    <rect width="992" height="56" fill="url(#y)" style="mix-blend-mode:screen"/>
    <rect x="16" y="11" width="960" height="34" rx="17" fill="#808000" filter="url(#b)"/>
  </svg>`,
)}`;

export function GlassFilter() {
  return (
    <svg aria-hidden="true" focusable="false" width="0" height="0" style={{ position: "absolute" }}>
      <filter id="nw-glass" x="0" y="0" width="100%" height="100%" colorInterpolationFilters="sRGB">
        <feImage href={MAP} preserveAspectRatio="none" result="map" />
        <feDisplacementMap in="SourceGraphic" in2="map" scale="58" xChannelSelector="R" yChannelSelector="G" result="r" />
        <feColorMatrix in="r" type="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="rOnly" />
        <feDisplacementMap in="SourceGraphic" in2="map" scale="54" xChannelSelector="R" yChannelSelector="G" result="g" />
        <feColorMatrix in="g" type="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" result="gOnly" />
        <feDisplacementMap in="SourceGraphic" in2="map" scale="50" xChannelSelector="R" yChannelSelector="G" result="b" />
        <feColorMatrix in="b" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" result="bOnly" />
        <feBlend in="rOnly" in2="gOnly" mode="screen" result="rg" />
        <feBlend in="rg" in2="bOnly" mode="screen" />
        <feGaussianBlur stdDeviation="5" />
      </filter>
    </svg>
  );
}
