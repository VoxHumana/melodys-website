import ContentLoader from 'react-content-loader';
import React from "react";
import styled from "styled-components";

const StyledContentLoader = styled(ContentLoader)`
  border: 6px solid #ff90ca;
  border-radius: 4px;
  box-shadow: inset 0 8px 12px 6px rgba(0,0,0,0.2), inset 0 6px 16px 6px rgba(0,0,0,0.19), 0 8px 12px 6px rgba(0,0,0,0.2), 0 6px 16px 6px rgba(0,0,0,0.19);
  margin: 8px;
`;

export default (props) =>
  <StyledContentLoader
    height={props.height}
    width={props.width}
    speed={2}
    primaryColor="#ff73bc"
    secondaryColor="#FFABD9"
    style={{width: props.width, height: props.height}}
  />