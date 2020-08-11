import React from "react";
import { IconType } from "./IconType";

const SelectArrowIcon: React.FC<IconType> = ({
  color = "#000",
  width = 24,
}: IconType) => (
  <svg width={width} height={width} viewBox="0 0 24">
    <g fill="none" fillRule="evenodd">
      <rect fill="none" fillRule="nonzero" width={24} height={24} rx={1} />
      <path
        d="M16 10l-4 4-4-4"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={color}
        strokeWidth={2}
      />
    </g>
  </svg>
);

export default SelectArrowIcon;
