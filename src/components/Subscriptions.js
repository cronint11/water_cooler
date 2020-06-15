import React from 'react';

import DynamicHeader from './DynamicHeader';
import subs from '../utils/subs.json';

class Subscriptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subscriptions: subs[props.location.state.media],
      mediaType: props.location.state.media
    };
    console.log(this.state);
  }

  renderColor(index) {
    let styleObj = { height: "60px" };
    switch (index % 4) {
      case 0:
        styleObj.background = "red";
        styleObj.color = "gold";
        break;
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
      default:
        break;
    }

    return styleObj;
  }


  render() {
    return (
      <span>
        <DynamicHeader headerTitle="My Subscriptions" />
        possible subscriptions for {this.state.mediaType}
        <ul style={{ "list-style-type": "none" }}>
          {this.state.subscriptions.map((item, index) =>
            <li style={this.renderColor(index)} ><input type="checkbox" /> {item.service}</li>)}
        </ul>
      </span>
    );
  }
};

export default Subscriptions;