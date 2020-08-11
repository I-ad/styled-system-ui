import React, { useContext } from "react";
import { animated, config, useSpring } from "react-spring";
import TextAtom from "../../../Atoms/TextAtom";
import { BoxAtom } from "../../../Atoms/BoxAtom";
import { ThemeContext } from "styled-components";
import { themeGet } from "@styled-system/theme-get";

interface IProps {
  isActive: boolean;
  left: number;
  label?: string;
  labelBackground?: string;
  labelVariant?: string;
}

const FloatingLabel: React.FC<IProps> = ({
  isActive,
  left,
  label,
  labelBackground,
  labelVariant = "label",
}: IProps) => {
  const theme = useContext(ThemeContext);
  const bg = themeGet(
    labelBackground ? `colors.${labelBackground}` : "colors.backgroundBody",
    "#fff",
  )({ theme });
  const translate = `translate(${isActive ? "12px" : left + "px"}, -50%`;
  const scale = `scale(${isActive ? 0.75 : 1})`;
  const labelSprings = useSpring({
    transform: `${scale} ${translate}`,
    top: isActive ? "0%" : "50%",
    transformOrigin: "top left",
    config: { duration: 160, ...config.wobbly },
  });
  return (
    <animated.div
      style={{
        pointerEvents: "none",
        position: "absolute",
        left: 0,
        ...labelSprings,
        zIndex: isActive ? 1 : 0,
      }}
    >
      <TextAtom
        as="label"
        variant={labelVariant}
        pl={isActive ? "8px" : "0px"}
        pr={isActive ? "8px" : "0px"}
      >
        {label}
      </TextAtom>
      {isActive && (
        <BoxAtom
          width="100%"
          height="50%"
          backgroundColor={bg}
          position="absolute"
          top="49%"
          zIndex={-1}
        />
      )}
    </animated.div>
  );
};

FloatingLabel.displayName = "FloatingLabel";

export default FloatingLabel;
