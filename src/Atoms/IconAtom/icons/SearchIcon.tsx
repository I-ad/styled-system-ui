import React from "react";
import { IconType } from "./IconType";

const SearchIcon: React.FC<IconType> = ({
  width = 24,
  color = "#425165",
}: IconType) => (
  <svg width={width} height={width} viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <rect fill="none" fillRule="nonzero" width={24} height={24} rx={1} />
      <g
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(4 4)"
        stroke={color}
        strokeWidth={1.6}
      >
        <path d="M16 16l-5.075-5.075" />
        <circle cx={6.4} cy={6.4} r={6.4} />
      </g>
    </g>
  </svg>
);

export default SearchIcon;
