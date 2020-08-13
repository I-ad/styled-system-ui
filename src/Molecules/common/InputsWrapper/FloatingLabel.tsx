import { themeGet } from "@styled-system/theme-get";
import React, { useContext } from "react";
import { animated, config, useSpring } from "react-spring";
import { ThemeContext } from "styled-components";
import { BoxAtom } from "../../../Atoms/BoxAtom";
import TextAtom from "../../../Atoms/TextAtom";

interface IProps {
  isActive: boolean;
  left: number;
  label?: string;
  labelBackground?: string;
  labelVariant?: string;
  barWidth?: number | string;
}

const FloatingLabel: React.FC<IProps> = ({
  isActive,
  left,
  label,
  labelBackground,
  labelVariant = "label",
  barWidth = 3,
}: IProps) => {
  const theme = useContext(ThemeContext);
  const bg = themeGet(
    labelBackground ? `colors.${labelBackground}` : "colors.backgroundBody",
    null,
  )({ theme });
  const translate = `translate(${isActive ? "12px" : `${left}px`}, -50%)`;
  const scale = `scale(${isActive ? 0.85 : 1})`;
  const labelSprings = useSpring({
    transform: `${scale} ${translate}`,
    top: isActive ? "0%" : "50%",
    paddingLeft: isActive ? 8 : 0,
    paddingRight: isActive ? 8 : 0,
    transformOrigin: "top left",
    config: { duration: 160, ...config.wobbly },
  });
  return (
    <animated.div
      data-testid="label-wrapper-test-id"
      style={{
        pointerEvents: "none",
        position: "absolute",
        left: 0,
        ...labelSprings,
        zIndex: 1,
      }}
    >
      <TextAtom
        position="relative"
        as="label"
        variant={labelVariant}
        zIndex={3}
      >
        {label}
      </TextAtom>
      {isActive && (
        <BoxAtom
          top={"49.5%"}
          width="auto"
          left={0}
          right={0}
          borderTop={`${barWidth}px solid`}
          borderColor={bg || labelBackground || "#FFF"}
          position="absolute"
          zIndex={2}
        />
      )}
    </animated.div>
  );
};

FloatingLabel.displayName = "FloatingLabel";

export default FloatingLabel;
