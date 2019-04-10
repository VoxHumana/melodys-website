import GridCell from './GridCell'
import styled from 'styled-components';
import React from "react";

let StyledGridContainer = styled.div`
  display: ${(props) => props.imagesLoaded ? 'grid' : 'none'};
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  max-width: 616px;
  align-self: center;
  opacity: ${(props) => props.isVisible ? 1 : 0};
  transition: 1s;
  background: #ffffff;
`;

export default function (props) {
  let index = 0;
  return (
    <StyledGridContainer isVisible={props.isVisible}
                         imagesLoaded={props.imagesLoaded}>
      {
        props.images.map((imageSrc) => {
            let cell = <GridCell imageSrc={imageSrc}
                                 index={index}
                                 key={index}
                                 selected={props.selectedIndices[index]}
                                 onSelect={props.onSelect}
                                 onImageLoad={props.onImageLoad}/>;
            index++;
            return cell
          }
        )
      }
    </StyledGridContainer>
  )
}
