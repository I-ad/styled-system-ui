import React from "react";
import { IconType } from "./IconType";

const UnViewedIcon: React.FC<IconType> = ({
  width = 24,
  color = "#425165",
}: IconType) => (
  <svg width={width} height={width} viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <rect fill="none" fillRule="nonzero" width={24} height={24} rx={1} />
      <g
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(2 3)"
        stroke={color}
        strokeWidth={2}
      >
        <path d="M0 9s4-7 10-7 10 7 10 7-4 7-10 7S0 9 0 9z" />
        <circle cx={10} cy={9} r={3} />
        <path d="M1 18L19 0" />
      </g>
    </g>
  </svg>
);

export default UnViewedIcon;
