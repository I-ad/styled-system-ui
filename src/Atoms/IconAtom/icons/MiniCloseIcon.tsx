import React from "react";
import { IconType } from "./IconType";

const MiniCloseIcon: React.FC<IconType> = ({
  width = 24,
  color = "#5E5F5F",
}: IconType) => (
  <svg width={width} height={width} viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <rect fill="none" fillRule="nonzero" width={24} height={24} rx={1} />
      <g
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={color}
        strokeWidth={1.6}
      >
        <path d="M15.2 8.8l-6.4 6.4M15.2 15.2L8.8 8.8" />
      </g>
    </g>
  </svg>
);

export default MiniCloseIcon;
