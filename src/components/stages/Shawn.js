import React from 'react';
import ButtonsContainer from '../ButtonsContainer';
import StageContainer from "../StageContainer";
import styled from "styled-components";
import Button from "../Button";
import StageComponent from "./StageComponent";

const ShawnButton = styled(Button)`
  border-color: #59ff48;
  color: #59ff48;
`;

const SeanButton = styled(Button)`
  border-color: #ffbe25;
  color: #ffbe25;
`;

export default class Shawn extends StageComponent {
  onShawnButtonClick = () => {
    this.setState({
      isStageVisible: false
    });
    setTimeout(this.props.onStageComplete, 1000);
  };

  onSeanButtonClick = () => {

  };

  render() {
    return (
      <StageContainer isStageVisible={this.state.isStageVisible}>
        <div>
            <span ref={(ele) => {
              this.textElement = ele;
            }}/>
        </div>
        <video>
          <source src="shawn_let_it_go.mp4" type="video/mp4"/>
          Your browser does not support HTML5 video.
        </video>
        <ButtonsContainer
          visible={!this.state.isTyping}>
          <ShawnButton onClick={this.onShawnButtonClick}>Shawn He</ShawnButton>
          <SeanButton onClick={this.onButtonClick}>Seen Bean</SeanButton>
        </ButtonsContainer>
      </StageContainer>
    );
  }
}