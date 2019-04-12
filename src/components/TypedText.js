import React from 'react';
import styled from "styled-components";

const TypedTextContainer = styled.div`
  text-shadow: 0 6px 4px rgba(0,0,0,0.6);
`;
export default function TypedText() {
  return (
    <TypedTextContainer>
      <span id="typed"/>
    </TypedTextContainer>);
}