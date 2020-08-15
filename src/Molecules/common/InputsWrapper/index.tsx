import React, { useEffect, useState } from "react";
import { BoxAtom } from "../../../Atoms/BoxAtom";
import { TextAtom } from "../../../index";
import FloatingLabel from "./FloatingLabel";
import { IconContainer, RightIcons } from "./IconContainer";
import { InputWrapper } from "./input.wrapper.type";

const InputsWrapper: React.FC<InputWrapper> = ({
  leftIcon,
  rightIcon,
  ClearButton,
  loading,
  value,
  onFocus,
  onBlur,
  children,
  floatingLabelProps,
  errorMessage,
  helpMessage,
  suggestions,
  themeKey = "forms",
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
    setTimeout(() => {
      setFocus(false);
    }, 150);
  };

  return (
    <BoxAtom position="relative" display="inline-block">
      <BoxAtom position="relative" display="inline-block">
        {leftIcon && <IconContainer>{leftIcon}</IconContainer>}
        <RightIcons
          rightIcon={rightIcon}
          loading={loading}
          ClearButton={ClearButton}
          value={value}
        />
        {floatingLabelProps && (
          <FloatingLabel
            isActive={isActive}
            left={paddingLeft}
            label={floatingLabelProps.label}
            labelBackground={floatingLabelProps.barBackground}
            labelVariant={floatingLabelProps.variant}
            barWidth={floatingLabelProps.barWidth}
            themeKey={themeKey}
          />
        )}
        {React.Children.map(children, (child: any) =>
          React.cloneElement(child, {
            paddingLeft,
            paddingRight: paddingRight(),
            themeKey,
            variant: "inputStyle",
            variantStatus:
              !!suggestions && isFocus
                ? "withSuggestions"
                : isFocus
                ? "inputFocus"
                : !isFocus && !!errorMessage
                ? "inputError"
                : "",
            onFocus: ON_FOCUS,
            onBlur: ON_BLUR,
          }),
        )}
        {!!suggestions && (
          <BoxAtom
            themeKey={themeKey}
            style={{ visibility: isFocus ? "visible" : "hidden" }}
            width="100%"
            height="auto"
            bg="#f1f1f1"
            position="absolute"
            top="100%"
            zIndex={999}
          >
            {suggestions}
          </BoxAtom>
        )}
      </BoxAtom>
      {!!errorMessage && (
        <TextAtom variant="errorMessage" themeKey={themeKey} ml={SPACE}>
          {errorMessage}
        </TextAtom>
      )}
      {!!helpMessage && (
        <TextAtom variant="helpMessage" themeKey={themeKey} ml={SPACE}>
          {helpMessage}
        </TextAtom>
      )}
    </BoxAtom>
  );
};

export default React.memo(InputsWrapper);
