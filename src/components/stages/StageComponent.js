import {Component} from 'react';
import Typed from "typed.js";

export default class StageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTyping: true,
      isStageVisible: false,
      isImageElementVisible: false,
    }
  }

  componentDidMount() {
    setTimeout(this.reveal, 1000);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  reveal = () => {
    console.log(this.props);
    this.props.typedOptions.onComplete = () => {
      this.setState({
        isTyping: false,
        isImageElementVisible: true,
      })
    };
    this.typed = new Typed(this.textElement, this.props.typedOptions);
    this.typed.start();
    this.setState({
      isStageVisible: true
    });
  };

  hide = () => {
    this.setState({
      isStageVisible: false,
      isImageElementVisible: false
    });
  };

  onCorrectButtonClick = () => {
    this.setState({
      isStageVisible: false
    });
    setTimeout(this.props.onStageComplete, 1000);
  }
}