import React from "react";
import { IconType } from "./IconType";

export const RadioChecked: React.FC<IconType> = ({
  color = "#000",
  width = 24,
}: IconType) => {
  const strokeRatio = (width / 24) * 1.6;
  return (
    <svg width={width} height={width} viewBox="0 0 24 24">
      <g fill="none" fillRule="evenodd">
        <path fill="none" d="M0 0h24v24H0z" />
        <circle
          stroke={color}
          strokeWidth={strokeRatio}
          strokeLinecap="round"
          strokeLinejoin="round"
          cx={12}
          cy={12}
          r={8}
        />
        <circle fill={color} cx={12} cy={12} r={4} />
      </g>
    </svg>
  );
};

export const RadioUnchecked: React.FC<IconType> = ({
  color = "#000",
  width = 24,
}) => {
  const strokeRatio = (width / 24) * 1.6;
  return (
    <svg width={width} height={width} viewBox="0 0 24 24">
      <g fill="none" fillRule="evenodd">
        <path fill="none" d="M0 0h24v24H0z" />
        <circle
          stroke={color}
          strokeWidth={strokeRatio}
          strokeLinecap="round"
          strokeLinejoin="round"
          cx={12}
          cy={12}
          r={8}
        />
      </g>
    </svg>
  );
};
