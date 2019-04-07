import ContentLoader from 'react-content-loader';
import React from "react";

export default (props) =>
  <ContentLoader
    height={props.height}
    width={props.width}
    speed={2}
    primaryColor="#ff90ca"
    secondaryColor="#ff51ac"
    style={{width: props.width, height: props.height}}
  />