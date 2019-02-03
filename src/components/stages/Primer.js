import React from 'react';
import styled from 'styled-components';
import StageContainer from '../StageContainer';
import ButtonsContainer from '../ButtonsContainer';
import Button from '../Button';
import StageComponent from "./StageComponent";

const StyledReadyButton = styled(Button)`
  border-color: #59ff48;
  color: #59ff48;
`;

export default class Primer extends StageComponent {
  onButtonClick = () => {
    this.setState({
      isStageVisible: false
    });
    setTimeout(this.props.onStageComplete, 1000);
  };

  render() {
    return(
      <StageContainer
        isStageVisible={this.state.isStageVisible}>
        <div><span ref={(ele) => {
          this.textElement = ele;
        }}/></div>
        <ButtonsContainer visible={!this.state.isTyping}>
          <StyledReadyButton
            onClick={this.onButtonClick}>
            Yes
          </StyledReadyButton>
        </ButtonsContainer>
      </StageContainer>
    )
  }
}