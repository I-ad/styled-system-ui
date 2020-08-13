import React, { ReactNode } from "react";
import { BoxAtom } from "../../../Atoms/BoxAtom";
import { IconAtom, IconButtonAtom } from "../../../Atoms/IconAtom";

export const RightIconHolder = React.memo(({ children }: { children: any }) => (
  <BoxAtom
    width={24}
    height={24}
    mr={8}
    maxHeight={24}
    maxWidth={24}
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    {children}
  </BoxAtom>
));

RightIconHolder.displayName = "RightIconHolder";

interface IProps {
  children: any;
  isRight?: boolean;
}

export const IconContainer: React.FC<IProps> = React.memo(
  ({ children, isRight }: IProps) => {
    return (
      <BoxAtom
        position="absolute"
        left={isRight ? "auto" : 16}
        right={isRight ? 8 : "auto"}
        top="50%"
        style={{ transform: "translateY(-50%)", pointerEvents: "none" }}
        maxHeight={isRight ? "auto" : 24}
        maxWidth={isRight ? "auto" : 24}
        display="flex"
        flexDirection="row"
      >
        {children}
      </BoxAtom>
    );
  },
);

IconContainer.displayName = "IconContainer";

interface RightIconsProps {
  value?: string | number | readonly string[];
  rightIcon?: ReactNode;
  loading?: boolean;
  ClearButton?: ReactNode;
}

export const RightIcons: React.FC<RightIconsProps> = React.memo(
  ({ rightIcon, loading, ClearButton, value }: RightIconsProps) => {
    const showRightIcons = !!rightIcon || !!ClearButton || loading;
    if (!showRightIcons) {
      return null;
    }
    return (
      <IconContainer isRight={true}>
        {!!ClearButton && !!value && (
          <RightIconHolder>{ClearButton}</RightIconHolder>
        )}
        {loading && (
          <RightIconHolder>
            <IconAtom name="LoadingIcon" />
          </RightIconHolder>
        )}
        {rightIcon && <RightIconHolder>{rightIcon}</RightIconHolder>}
      </IconContainer>
    );
  },
);

RightIcons.displayName = "RightIcons";
