import React from "react";
import { IconType } from "./IconType";

const LoadingIcon: React.FC<IconType> = ({
  width = 24,
  color = "#FFF",
}: IconType) => {
  return (
    <svg width={width} height={width} viewBox="0 0 24 24">
      <g fill="none" fillRule="evenodd">
        <rect
          fillOpacity={0.01}
          fill={color}
          fillRule="nonzero"
          width={24}
          height={24}
          rx={1}
        />
        <g
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(3.2 3.2)"
          stroke={color}
          strokeWidth={1.6}
        >
          <circle opacity={0.4} cx={8.8} cy={8.8} r={8.8} />
          <path d="M8.8 0a8.8 8.8 0 0 1 8.8 8.8" />
        </g>
      </g>
    </svg>
  );
};

export default LoadingIcon;
