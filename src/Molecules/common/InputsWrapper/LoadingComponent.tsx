import React from "react";
import { animated, useSpring } from "react-spring/web";
import { IconAtom } from "../../../Atoms/IconAtom";

const LoadingComponent: React.FC = () => {
  const { rotateZ }: any = useSpring({
    from: {
      rotateZ: 0,
    },
    to: async (next: any) => {
      while (1) {
        await next({ rotateZ: 360 });
      }
    },
    reset: true,
    config: { duration: 500 },
  });

  return (
    <animated.div
      style={{
        width: 24,
        height: 24,
        transform: rotateZ.interpolate((z) => `rotateZ(${z}deg)`),
      }}
    >
      <IconAtom name="LoadingIcon" />
    </animated.div>
  );
};

export default LoadingComponent;
