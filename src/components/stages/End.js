import StageComponent from "./StageComponent";
import TypedText from "../TypedText";
import StageContainer from "../StageContainer";
import React from "react";

export default class End extends StageComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <StageContainer isStageVisible={this.state.isStageVisible}>
        <TypedText/>
      </StageContainer>
    );
  }
}