import React, { useRef, useState } from "react";
import { BoxAtom, ButtonAtom, IconWrapperAtom, TextAtom } from "../../index";
import { useOnClickOutSide } from "../../utilties";
import { DropdownMoleculesType } from "./dropdownType";

const DropdownMolecules: React.FC<DropdownMoleculesType> = ({
  title,
  subtitle,
  avatar,
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
        bg="#FFF"
        position="relative"
        minWidth={600}
        minHeight={50}
        height={80}
        display="inline-block"
        onClick={toggleList}
        p={20}
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
            <TextAtom variant={title.variant || "dropdownTitle"} fontSize={14}>
              {title.text}
            </TextAtom>
            {!!subtitle && (
              <TextAtom
                variant={subtitle.variant || "dropdownSubtitle"}
                fontSize={12}
              >
                {subtitle.text}
              </TextAtom>
            )}
          </BoxAtom>
          <IconWrapperAtom
            name="SelectArrowIcon"
            wrapperProps={{ ml: "auto" }}
          />
        </BoxAtom>
      </ButtonAtom>
      <BoxAtom
        style={{ visibility: show ? "visible" : "hidden" }}
        width="100%"
        height={500}
        bg="#FFF"
        position="absolute"
        top="101%"
        onClick={toggleList}
        zIndex={999}
      />
    </BoxAtom>
  );
};

export default DropdownMolecules;
