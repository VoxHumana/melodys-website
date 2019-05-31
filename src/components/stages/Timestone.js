import StageComponent from "./StageComponent";
import TypedText from "../TypedText";
import StageContainer from "../StageContainer";
import React from "react";
import ButtonsContainer from "../ButtonsContainer";
import Img from "../Img";
import melodyImg from "../../img/thanos/melody.jpg";
import monaImg from "../../img/thanos/mona.jpg";
import shawnImg from "../../img/thanos/shawn.jpg";
import delphineImg from "../../img/thanos/delphine.jpg";
import oliverImg from "../../img/thanos/oliver.jpg";
import jackieImg from "../../img/thanos/jackie.jpg";
import Loader from "../Loader";
import Spritesheet from 'react-responsive-spritesheet';
import infinityGauntletTimestoneSpritesheet from "../../img/thanos/thanos_time.png";
import infinityGauntletTimestoneSound from "../../img/thanos/thanos_reverse_sound.mp3";

export default class Timestone extends StageComponent {
  constructor(props) {
    super(props);
    this.state = Object.assign(this.state, {
      isMelodyImageLoaded: false,
      isMonaImageLoaded: false,
      isShawnImageLoaded: false,
      isDelphineImageLoaded: false,
      isOliverImageLoaded: false,
      isJackieImageLoaded: false,
      isInfinityGauntletLoaded: false,
      isReversed: false,
      isMelodySnapped: props.snapped.includes("melody"),
      isMonaSnapped: props.snapped.includes("mona"),
      isShawnSnapped: props.snapped.includes("shawn"),
      isDelphineSnapped: props.snapped.includes("delphine"),
      isOliverSnapped: props.snapped.includes("oliver"),
      isJackieSnapped: props.snapped.includes("jackie")
    });
    this.infinityGauntletReverse = new Audio(infinityGauntletTimestoneSound);
  }

  render() {
    const imageSize = 250;
    return (
      <StageContainer isStageVisible={this.state.isStageVisible}>
        <TypedText/>
        <ButtonsContainer visible={!this.state.isTyping}>
          <Loader height={imageSize}
                  width={imageSize}
                  isMediaLoaded={this.state.isOliverImageLoaded}
                  isVisible={this.state.isImageElementVisible && !this.state.isOliverSnapped}
          />
          <Img src={oliverImg}
               id="oliver-disintegrate-target"
               onLoad={() => {
                 this.setState({isOliverImageLoaded: true})
               }}
               isVisible={this.state.isImageElementVisible && !this.state.isOliverSnapped}
               isLoaded={this.state.isOliverImageLoaded}
          />
          <Loader height={imageSize}
                  width={imageSize}
                  isMediaLoaded={this.state.isJackieImageLoaded}
                  isVisible={this.state.isImageElementVisible && !this.state.isJackieSnapped}
          />
          <Img src={jackieImg}
               id="jackie-disintegrate-target"
               onLoad={() => {
                 this.setState({isJackieImageLoaded: true})
               }}
               isVisible={this.state.isImageElementVisible && !this.state.isJackieSnapped}
               isLoaded={this.state.isJackieImageLoaded}
          />
          <Loader height={imageSize}
                  width={imageSize}
                  isMediaLoaded={this.state.isShawnImageLoaded}
                  isVisible={this.state.isImageElementVisible && !this.state.isShawnSnapped}
          />
          <Img src={shawnImg}
               id="shawn-disintegrate-target"
               onLoad={() => {
                 this.setState({isShawnImageLoaded: true})
               }}
               isVisible={this.state.isImageElementVisible && !this.state.isShawnSnapped}
               isLoaded={this.state.isShawnImageLoaded}
          />
        </ButtonsContainer>
        <Loader height={160}
                width={160}
                isMediaLoaded={this.state.isInfinityGauntletLoaded}
                isVisible={this.state.isImageElementVisible}
        />
        <Spritesheet style={{
          display: this.state.isInfinityGauntletLoaded ? "block" : "none",
          opacity: this.state.isImageElementVisible ? 1 : 0,
          transition: "1s",
          margin: "8px"
        }}
                     image={infinityGauntletTimestoneSpritesheet}
                     widthFrame={160}
                     heightFrame={160}
                     steps={48}
                     fps={30}
                     autoplay={false}
                     loop={true}
                     direction={'forward'}
                     onClick={sprite => {
                       sprite.play();
                       this.infinityGauntletReverse.play();
                     }}
                     onLoopComplete={sprite => {
                       sprite.pause();
                       this.setState({
                         isMelodySnapped: false,
                         isMonaSnapped: false,
                         isShawnSnapped: false,
                         isDelphineSnapped: false,
                         isOliverSnapped: false,
                         isJackieSnapped: false,
                         isReversed: true
                       });
                     }}
                     onInit={() => {
                       this.setState({isInfinityGauntletLoaded: true})
                     }}
        />
        <ButtonsContainer visible={!this.state.isTyping}>
          <Loader height={imageSize}
                  width={imageSize}
                  isMediaLoaded={this.state.isMonaImageLoaded}
                  isVisible={this.state.isImageElementVisible && !this.state.isMonaSnapped}
          />
          <Img src={monaImg}
               id="mona-disintegrate-target"
               onLoad={() => {
                 this.setState({isMonaImageLoaded: true})
               }}
               isVisible={this.state.isImageElementVisible && !this.state.isMonaSnapped}
               isLoaded={this.state.isMonaImageLoaded}
          />
          <Loader height={imageSize}
                  width={imageSize}
                  isMediaLoaded={this.state.isMelodyImageLoaded}
                  isVisible={this.state.isImageElementVisible && !this.state.isMelodySnapped}
          />
          <Img src={melodyImg}
               id="melody-disintegrate-target"
               onLoad={() => {
                 this.setState({isMelodyImageLoaded: true})
               }}
               isVisible={this.state.isImageElementVisible && !this.state.isMelodySnapped}
               isLoaded={this.state.isMelodyImageLoaded}
          />
          <Loader height={imageSize}
                  width={imageSize}
                  isMediaLoaded={this.state.isDelphineImageLoaded}
                  isVisible={this.state.isImageElementVisible && !this.state.isDelphineSnapped}
          />
          <Img src={delphineImg}
               id="delphine-disintegrate-target"
               onLoad={() => {
                 this.setState({isDelphineImageLoaded: true})
               }}
               isVisible={this.state.isImageElementVisible && !this.state.isDelphineSnapped}
               isLoaded={this.state.isDelphineImageLoaded}
          />
        </ButtonsContainer>
      </StageContainer>
    )
  }
}