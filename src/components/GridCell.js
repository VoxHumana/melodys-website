import styled from 'styled-components';
import React from "react";
import ReactPlaceholder from "react-placeholder";

const Image = styled.img`
  border: ${(props) => props.selected ? "6px solid #5487ff" : "4px solid #ffffff"};
  max-height: 150px;
  max-width: 150px;
  transition: 0.25s;
  box-sizing: border-box;
`;

export default function (props) {
  return (
    <ReactPlaceholder firstLaunchOnly={true}
                      ready={props.imagesLoaded}
                      type={'rect'}
                      color={'#ff90ca'}
                      style={{width: 150, height: 150, marginRight: 0}}
                      showLoadingAnimation={true}>
      <Image src={props.imageSrc}
             onClick={() => props.onSelect(props.index)}
             selected={props.selected}
             onLoad={props.onImageLoad(props.index)}/>
    </ReactPlaceholder>
  )
}

