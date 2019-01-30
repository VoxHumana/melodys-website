import React, {Component} from 'react';
import Typed from "typed.js";
import StageContainer from './StageContainer';
import CaptchaGrid from "./CaptchaGrid";

export default class Jackie extends Component {
  constructor(props) {
    super(props);
    this.selectedIndices = this.initIndices();
    this.state = {
      isTyping: true,
      isStageVisible: false,
      isCaptchaGridVisible: false,
      isFirstImageComplete: false,
      selectedIndices: this.selectedIndices
    };
  }

  componentDidMount() {
    setTimeout(this.reveal, 10);
  }

  reveal = () => {
    this.props.typedOptions.onComplete = () => {
      this.setState({
        isTyping: false,
        isCaptchaGridVisible: true
      });
    };
    this.typed = new Typed(this.textElement, this.props.typedOptions);
    this.typed.start();
    this.setState({
      isStageVisible: true,
    });
  };

  componentWillUnmount() {
    this.typed.destroy();
  }

  toggleSelectedIndex = (index) => {
    this.selectedIndices[index] = !this.selectedIndices[index];
    this.setState({
      selectedIndices: this.selectedIndices
    });
    if (!this.state.isFirstImageComplete) {
      if (this.selectedIndices.every((value, index) => value === this.props.correctIndices[0][index])) {
        this.setState({
          isCaptchaGridVisible: false,
        });
        setTimeout(this.loadSecondCaptchaImage, 1000);
      }
    } else if (this.selectedIndices.every((value, index) => value === this.props.correctIndices[1][index])) {
      this.setState({
        isStageVisible: false
      });
      setTimeout(this.props.onStageComplete, 1000);
    }
  };

  initIndices = () =>
    ([false, false, false, false,
      false, false, false, false,
      false, false, false, false,
      false, false, false, false]);

  loadSecondCaptchaImage = () => {
    this.selectedIndices = this.initIndices();
    this.setState({
      selectedIndices: this.selectedIndices,
      isFirstImageComplete: true
    });
    setTimeout(() => {
      this.setState({isCaptchaGridVisible: true})
    }, 1000);
  };

  render() {
    return (
      <StageContainer isStageVisible={this.state.isStageVisible}>
        <div>
        <span ref={(ele) => {
          this.textElement = ele;
        }}/>
        </div>
          <CaptchaGrid images={this.state.isFirstImageComplete? this.props.secondImage : this.props.firstImage}
                       isVisible={this.state.isCaptchaGridVisible}
                       onSelect={this.toggleSelectedIndex}
                       selectedIndices={this.state.selectedIndices}/>
      </StageContainer>
    );
  }
}