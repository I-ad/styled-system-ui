import React from "react";
import { IconType } from "./IconType";

const ViewIcon: React.FC<IconType> = ({
  width = 24,
  color = "#425165",
}: IconType) => (
  <svg width={width} height={width} viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <rect fill="none" fillRule="nonzero" width={24} height={24} rx={1} />
      <g
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(2 5)"
        stroke={color}
        strokeWidth={2}
      >
        <path d="M0 7s4-7 10-7 10 7 10 7-4 7-10 7S0 7 0 7z" />
        <circle cx={10} cy={7} r={3} />
      </g>
    </g>
  </svg>
);

export default ViewIcon;
