import styled from "styled-components";

export const CheckedHolder = styled.div`
  width: 24px;
  height: 24px;
  display: none;
  input:checked ~ & {
    display: block;
  }
`;
export const UncheckedHolder = styled.div`
  width: 24px;
  height: 24px;
  display: block;
  input:checked ~ & {
    display: none;
  }
`;
