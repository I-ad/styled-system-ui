import React from "react";
import { animated, config, useSpring } from "react-spring";
import { BoxAtom } from "../../../Atoms/BoxAtom";
import TextAtom from "../../../Atoms/TextAtom";

interface IProps {
  isActive: boolean;
  left: number;
  label?: string;
  labelBackground?: string;
  labelVariant?: string;
  barWidth?: number | string;
  themeKey?: string;
}

const FloatingLabel: React.FC<IProps> = ({
  isActive,
  left,
  label,
  labelVariant = "label",
  barWidth = 3,
  themeKey,
}: IProps) => {
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
        themeKey={themeKey}
        position="relative"
        as="label"
        variant="label"
        zIndex={3}
      >
        {label}
      </TextAtom>
      {isActive && (
        <BoxAtom
          themeKey={themeKey}
          variant="labelBar"
          top={"49.5%"}
          width="auto"
          left={0}
          right={0}
          position="absolute"
          zIndex={2}
        />
      )}
    </animated.div>
  );
};

FloatingLabel.displayName = "FloatingLabel";

export default FloatingLabel;
