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
import infinityGauntletSnapSpritesheet from "../../img/thanos/thanos_snap.png";
import infinityGauntletSnapSound from "../../img/thanos/thanos_snap_sound.mp3";
import dustEffect1 from "../../img/thanos/thanos_dust_1.mp3";
import dustEffect2 from "../../img/thanos/thanos_dust_2.mp3";
import dustEffect3 from "../../img/thanos/thanos_dust_3.mp3";
import Loader from "../Loader";
import Spritesheet from 'react-responsive-spritesheet';
import disintegrate from './Disintegrate';

export default class Thanos extends StageComponent {
  constructor(props) {
    super(props);
    let targets = ["oliver", "jackie", "shawn", "mona", "melody", "delphine"];
    this.shuffle(targets);
    this.state = Object.assign(this.state, {
      isMelodyImageLoaded: false,
      isMonaImageLoaded: false,
      isShawnImageLoaded: false,
      isDelphineImageLoaded: false,
      isOliverImageLoaded: false,
      isJackieImageLoaded: false,
      isInfinityGauntletLoaded: false,
      isSnapped: false,
      snapped: targets.slice(0, Math.round(targets.length / 2))
    });
    this.infinityGauntletSnap = new Audio(infinityGauntletSnapSound);
    this.dustEffects = [new Audio(dustEffect1), new Audio(dustEffect2), new Audio(dustEffect3)];
  }

  shuffle = array => {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  playDustSoundEffect = index => {
    this.dustEffects[index].play();
  };

  snap = (person, i) => {
    let domElement = document.getElementById(`${person}-disintegrate-target`);
    if (i === this.state.snapped.length - 1) {
      disintegrate(domElement, () => {
        this.playDustSoundEffect(i);
        setTimeout(() => {
          this.setState({
            isStageVisible: false
          });
          setTimeout(this.props.onStageComplete, 1000);
        }, 4000);
      });
    } else {
      disintegrate(domElement, () => {
        this.playDustSoundEffect(i);
      });
    }
  };

  render() {
    const imageSize = 250;
    return (
      <StageContainer isStageVisible={this.state.isStageVisible}>
        <TypedText/>
        <ButtonsContainer visible={!this.state.isTyping}>
          <Loader height={imageSize}
                  width={imageSize}
                  isMediaLoaded={this.state.isOliverImageLoaded}
                  isVisible={this.state.isImageElementVisible}
          />
          <Img src={oliverImg}
               id="oliver-disintegrate-target"
               onLoad={() => {
                 this.setState({isOliverImageLoaded: true})
               }}
               isVisible={this.state.isImageElementVisible}
               isLoaded={this.state.isOliverImageLoaded}
          />
          <Loader height={imageSize}
                  width={imageSize}
                  isMediaLoaded={this.state.isJackieImageLoaded}
                  isVisible={this.state.isImageElementVisible}
          />
          <Img src={jackieImg}
               id="jackie-disintegrate-target"
               onLoad={() => {
                 this.setState({isJackieImageLoaded: true})
               }}
               isVisible={this.state.isImageElementVisible}
               isLoaded={this.state.isJackieImageLoaded}
          />
          <Loader height={imageSize}
                  width={imageSize}
                  isMediaLoaded={this.state.isShawnImageLoaded}
                  isVisible={this.state.isImageElementVisible}
          />
          <Img src={shawnImg}
               id="shawn-disintegrate-target"
               onLoad={() => {
                 this.setState({isShawnImageLoaded: true})
               }}
               isVisible={this.state.isImageElementVisible}
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
                     image={infinityGauntletSnapSpritesheet}
                     widthFrame={160}
                     heightFrame={160}
                     steps={48}
                     fps={30}
                     autoplay={false}
                     loop={true}
                     direction={'forward'}
                     onClick={sprite => {
                       sprite.play();
                       this.infinityGauntletSnap.play();
                     }}
                     onLoopComplete={sprite => {
                       sprite.pause();
                       if (!this.state.isSnapped) {
                         this.state.snapped.forEach((person, i) => {
                           setTimeout(() => {
                             this.snap(person, i);
                           }, i * 4000);
                         });
                         this.setState({isSnapped: true});
                       }
                     }}
                     onInit={() => {
                       this.setState({isInfinityGauntletLoaded: true})
                     }}
        />
        <ButtonsContainer visible={!this.state.isTyping}>
          <Loader height={imageSize}
                  width={imageSize}
                  isMediaLoaded={this.state.isMonaImageLoaded}
                  isVisible={this.state.isImageElementVisible}
          />
          <Img src={monaImg}
               id="mona-disintegrate-target"
               onLoad={() => {
                 this.setState({isMonaImageLoaded: true})
               }}
               isVisible={this.state.isImageElementVisible}
               isLoaded={this.state.isMonaImageLoaded}
          />
          <Loader height={imageSize}
                  width={imageSize}
                  isMediaLoaded={this.state.isMelodyImageLoaded}
                  isVisible={this.state.isImageElementVisible}
          />
          <Img src={melodyImg}
               id="melody-disintegrate-target"
               onLoad={() => {
                 this.setState({isMelodyImageLoaded: true})
               }}
               isVisible={this.state.isImageElementVisible}
               isLoaded={this.state.isMelodyImageLoaded}
          />
          <Loader height={imageSize}
                  width={imageSize}
                  isMediaLoaded={this.state.isDelphineImageLoaded}
                  isVisible={this.state.isImageElementVisible}
          />
          <Img src={delphineImg}
               id="delphine-disintegrate-target"
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