import React, { useRef, useState } from "react";
import { BoxAtom, ButtonAtom, IconWrapperAtom, TextAtom } from "../../index";
import { useOnClickOutSide } from "../../utilties";
import { DropdownMoleculesType } from "./dropdownType";

const DropdownMolecules: React.FC<DropdownMoleculesType> = ({
  title,
  subtitle,
  avatar,
  options,
  themeKey = "dropdownStyle",
}: DropdownMoleculesType) => {
  const [show, setShow] = useState(false);
  const toggleList = () => {
    setShow(!show);
  };
  const REF = useRef();
  useOnClickOutSide(REF, () => setShow(false));
  return (
    <BoxAtom ref={REF} position="relative" display="inline-block">
      <ButtonAtom
        themeKey={themeKey}
        variant="dropdown"
        minWidth={600}
        minHeight={50}
        display="inline-block"
        onClick={toggleList}
        position="relative"
        variantStatus={show && !!options ? "dropdownOpen" : ""}
      >
        <BoxAtom
          width="100%"
          height="100%"
          display="flex"
          flexDirection="row"
          alignItems="center"
        >
          {avatar}
          <BoxAtom
            display="inline-block"
            textAlign="left"
            overflow="hidden"
            ml="20px"
          >
            <TextAtom themeKey={themeKey} variant={"title"} fontSize={14}>
              {title}
            </TextAtom>
            {!!subtitle && (
              <TextAtom themeKey={themeKey} variant={"subtitle"} fontSize={12}>
                {subtitle}
              </TextAtom>
            )}
          </BoxAtom>
          <IconWrapperAtom
            name="SelectArrowIcon"
            wrapperProps={{ ml: "auto" }}
          />
        </BoxAtom>
      </ButtonAtom>
      {options && (
        <BoxAtom
          themeKey={themeKey}
          variant="dropdownOptionsWrapper"
          width="100%"
          height="auto"
          position="absolute"
          top="101%"
          onClick={toggleList}
          zIndex={999}
          style={{ visibility: show ? "visible" : "hidden" }}
        >
          {options}
        </BoxAtom>
      )}
    </BoxAtom>
  );
};

export default DropdownMolecules;
