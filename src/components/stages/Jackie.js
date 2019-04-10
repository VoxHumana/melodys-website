import React from 'react';
import StageContainer from '../StageContainer';
import CaptchaGrid from "../CaptchaGrid";
import StageComponent from "./StageComponent";
import TypedText from "../TypedText";
import Loader from "../Loader";

export default class Jackie extends StageComponent {
  constructor(props) {
    super(props);
    this.selectedIndices = this.initIndices();
    this.loadedIndices = this.initIndices();
    this.state.isFirstImageComplete = false;
    this.state.selectedIndices = this.selectedIndices;
    this.state.imagesLoaded = false;
  }

  toggleSelectedIndex = (index) => {
    this.selectedIndices[index] = !this.selectedIndices[index];
    this.setState({
      selectedIndices: this.selectedIndices
    });
    if (!this.state.isFirstImageComplete) {
      if (this.selectedIndices.every((value, index) => value === this.props.correctIndices[0][index])) {
        this.setState({
          isImageElementVisible: false,
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
    this.loadedIndices = this.initIndices();
    this.setState({
      selectedIndices: this.selectedIndices,
      isFirstImageComplete: true,
      imagesLoaded: false
    });
    setTimeout(() => {
      this.setState({isImageElementVisible: true})
    }, 1000);
  };

  onImageLoad = (index) => {
    this.loadedIndices[index] = true;
    if (this.loadedIndices.every((x) => x === true) && !this.state.imagesLoaded) {
      this.setState({
        imagesLoaded: true
      })
    }
  };

  render() {
    return (
      <StageContainer isStageVisible={this.state.isStageVisible}>
        <TypedText/>
        {this.state.imagesLoaded ? null : <Loader height={600} width={600}/>}
        <CaptchaGrid images={this.state.isFirstImageComplete ? this.props.secondImage : this.props.firstImage}
                     isVisible={this.state.isImageElementVisible}
                     onSelect={this.toggleSelectedIndex}
                     selectedIndices={this.state.selectedIndices}
                     onImageLoad={this.onImageLoad}
                     imagesLoaded={this.state.imagesLoaded}/>
      </StageContainer>
    );
  }
}