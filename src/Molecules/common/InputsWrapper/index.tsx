import React, { useEffect, useState } from "react";
import { BoxAtom } from "../../../Atoms/BoxAtom";
import { InputWrapper } from "./input.wrapper.type";
import { IconContainer, RightIcons } from "./IconContainer";
import FloatingLabel from "./FloatingLabel";

const InputsWrapper: React.FC<InputWrapper> = ({
  leftIcon,
  rightIcon,
  ClearButton,
  loading,
  value,
  onFocus,
  onBlur,
  floatingLabel,
  labelBackground,
  children,
  labelVariant,
  ...props
}: InputWrapper) => {
  const [isActive, setIsActive] = useState(!!value);
  const [isFocus, setFocus] = useState(false);
  useEffect(() => {
    setIsActive(!!value || isFocus);
  }, [value, isFocus]);
  const SPACE = 16;
  const paddingLeft = leftIcon ? 34 + SPACE : SPACE;
  const paddingRight = (): number => {
    let p = SPACE;
    if (rightIcon) {
      p += 34;
    }
    if (loading) {
      p += 34;
    }
    if (ClearButton) {
      p += 34;
    }

    return p;
  };
  const ON_FOCUS = (e: any) => {
    if (onFocus) {
      onFocus(e);
    }
    setFocus(true);
  };
  const ON_BLUR = (e: any) => {
    if (onBlur) {
      onBlur(e);
    }
    setFocus(false);
  };

  return (
    <BoxAtom {...props.wrapperProps} position="relative">
      {leftIcon && <IconContainer>{leftIcon}</IconContainer>}
      <RightIcons
        rightIcon={rightIcon}
        loading={loading}
        ClearButton={ClearButton}
        value={value}
      />
      {floatingLabel && (
        <FloatingLabel
          isActive={isActive}
          left={paddingLeft}
          label={floatingLabel}
          labelBackground={labelBackground}
          labelVariant={labelVariant}
        />
      )}
      {React.Children.map(children, (child: any) =>
        React.cloneElement(child, {
          onFocus: ON_FOCUS,
          onBlur: ON_BLUR,
          paddingLeft,
          paddingRight: paddingRight(),
        }),
      )}
    </BoxAtom>
  );
};

export default React.memo(InputsWrapper);
