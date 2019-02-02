import React, {Component} from 'react';
import Typed from "../../../node_modules/typed.js/lib/typed";
import styled from 'styled-components';
import StageContainer from '../StageContainer';
import ButtonsContainer from '../ButtonsContainer';
import Button from '../Button';

const StyledReadyButton = styled(Button)`
  border-color: #59ff48;
  color: #59ff48;
`;

export default class Primer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isTyping: true,
      isStageVisible: false
    }
  }

  componentDidMount() {
    setTimeout(this.reveal, 10);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  reveal = () => {
    this.props.typedOptions.onComplete = () => {
      this.setState({
        isTyping: false
      })
    };
    this.typed = new Typed(this.textElement, this.props.typedOptions);
    this.typed.start();
    this.setState({
      isStageVisible: true
    });
  };

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