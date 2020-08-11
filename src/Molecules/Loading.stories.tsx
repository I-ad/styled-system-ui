import * as React from "react";
import { useSpring, animated, config } from "react-spring/web";
import { IconAtom } from "../index";

export default {
  title: "Molecules/Loading",
};

export const Loading = (): any => {
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
    unique: true,
    delay: 0,
    config: { duration: 600 },
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
