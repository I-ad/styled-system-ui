import React from "react";
import { BoxAtom, TextAtom } from "../../index";

const TextFieldMolecules: React.FC = () => {
  return (
    <BoxAtom p={100} bg="#f1f1f1">
      <BoxAtom width={400} height={50} position="relative">
        <BoxAtom
          border={1}
          borderColor="red"
          width="100%"
          height="100%"
          bg="#FFF"
        />
        <BoxAtom
          position="absolute"
          top="0"
          left={10}
          px="4px"
          style={{ transform: "translateY(-50%)" }}
        >
          <TextAtom
            position="relative"
            zIndex={2}
            style={{ transform: "translateY(150%)" }}
          >
            Hello
          </TextAtom>
          <BoxAtom
            left={0}
            right={0}
            height={1}
            bg="#f1f1f1"
            top="50%"
            position="absolute"
            zIndex={1}
          />
        </BoxAtom>
      </BoxAtom>
    </BoxAtom>
  );
};

export default TextFieldMolecules;
