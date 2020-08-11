import React from "react";
import { IconType } from "./IconType";

const UserIcon: React.FC<IconType> = ({
  width = 12,
  color = "#6C727A",
}: IconType) => (
  <svg width={width} height={width * 0.857} viewBox="0 0 12 14">
    <g fill={color} fillRule="nonzero">
      <path d="M5.989 7.583c1.801 0 3.267-1.57 3.267-3.5V3.5C9.256 1.57 7.79 0 5.989 0 4.187 0 2.722 1.57 2.722 3.5v.583c0 1.93 1.465 3.5 3.267 3.5zM9.975 9.322a14.223 14.223 0 0 0-7.973 0C.824 9.672 0 10.83 0 12.136V14h11.978v-1.864c0-1.307-.824-2.464-2.003-2.814z" />
    </g>
  </svg>
);

export default UserIcon;
