import StageComponent from "./StageComponent";
import React from "react";
import TypedText from "../TypedText";
import StageContainer from "../StageContainer";
import ButtonsContainer from "../ButtonsContainer";
import Img from "../Img";
import melodyImg from "../../img/thanos/melody.jpg";
import monaImg from "../../img/thanos/mona.jpg";
import shawnImg from "../../img/thanos/shawn.jpg";
import delphineImg from "../../img/thanos/delphine.jpg";
import oliverImg from "../../img/thanos/oliver.jpg";
import jackieImg from "../../img/thanos/jackie.jpg";
import infinityGauntletIdleImg from "../../img/thanos/thanos_idle.png";
import Loader from "../Loader";

export default class Thanos extends StageComponent {
  constructor(props) {
    super(props);
    this.state = Object.assign(this.state, {
      isMelodyImageLoaded: false,
      isMonaImageLoaded: false,
      isShawnImageLoaded: false,
      isDelphineImageLoaded: false,
      isOliverImageLoaded: false,
      isJackieImageLoaded: false,
      isInfinityGauntletLoaded: false
    })
  }

  render() {
    return (
      <StageContainer isStageVisible={this.state.isStageVisible}>
        <TypedText/>
        <ButtonsContainer visible={!this.state.isTyping}>
          <Loader height={300}
                  width={300}
                  isMediaLoaded={this.state.isOliverImageLoaded}
                  isVisible={this.state.isImageElementVisible}
          />
          <Img src={oliverImg}
               onLoad={() => {
                 this.setState({isOliverImageLoaded: true})
               }}
               isVisible={this.state.isImageElementVisible}
               isLoaded={this.state.isOliverImageLoaded}
          />
          <Loader height={300}
                  width={300}
                  isMediaLoaded={this.state.isJackieImageLoaded}
                  isVisible={this.state.isImageElementVisible}
          />
          <Img src={jackieImg}
               onLoad={() => {
                 this.setState({isJackieImageLoaded: true})
               }}
               isVisible={this.state.isImageElementVisible}
               isLoaded={this.state.isJackieImageLoaded}
          />
          <Loader height={300}
                  width={300}
                  isMediaLoaded={this.state.isShawnImageLoaded}
                  isVisible={this.state.isImageElementVisible}
          />
          <Img src={shawnImg}
               onLoad={() => {
                 this.setState({isShawnImageLoaded: true})
               }}
               isVisible={this.state.isImageElementVisible}
               isLoaded={this.state.isShawnImageLoaded}
          />
        </ButtonsContainer>
        <Loader height={80}
                width={80}
                isMediaLoaded={this.state.isInfinityGauntletLoaded}
                isVisible={this.state.isImageElementVisible}
        />
        <Img src={infinityGauntletIdleImg}
             onLoad={() => {
               this.setState({isInfinityGauntletLoaded: true})
             }}
             isVisible={this.state.isImageElementVisible}
             isLoaded={this.state.isInfinityGauntletLoaded}
        />
        <ButtonsContainer visible={!this.state.isTyping}>
          <Loader height={300}
                  width={300}
                  isMediaLoaded={this.state.isMonaImageLoaded}
                  isVisible={this.state.isImageElementVisible}
          />
          <Img src={monaImg}
               onLoad={() => {
                 this.setState({isMonaImageLoaded: true})
               }}
               isVisible={this.state.isImageElementVisible}
               isLoaded={this.state.isMonaImageLoaded}
          />
          <Loader height={300}
                  width={300}
                  isMediaLoaded={this.state.isMelodyImageLoaded}
                  isVisible={this.state.isImageElementVisible}
          />
          <Img src={melodyImg}
               onLoad={() => {
                 this.setState({isMelodyImageLoaded: true})
               }}
               isVisible={this.state.isImageElementVisible}
               isLoaded={this.state.isMelodyImageLoaded}
          />
          <Loader height={300}
                  width={300}
                  isMediaLoaded={this.state.isDelphineImageLoaded}
                  isVisible={this.state.isImageElementVisible}
          />
          <Img src={delphineImg}
               onLoad={() => {
                 this.setState({isDelphineImageLoaded: true})
               }}
               isVisible={this.state.isImageElementVisible}
               isLoaded={this.state.isDelphineImageLoaded}
          />
        </ButtonsContainer>
      </StageContainer>
    );
  }
}