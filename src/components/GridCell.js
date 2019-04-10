import styled from 'styled-components';
import React from "react";

const Image = styled.img`
  border: ${(props) => props.selected ? "6px solid #5487ff" : "4px solid #ffffff"};
  max-height: 150px;
  max-width: 150px;
  transition: 0.25s;
  box-sizing: border-box;
`;

export default function (props) {
  return (
      <Image src={props.imageSrc}
             onClick={() => props.onSelect(props.index)}
             selected={props.selected}
             onLoad={() => {
               props.onImageLoad(props.index)
             }}/>
  )
}

