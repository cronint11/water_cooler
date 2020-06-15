import React from 'react';

import subs from '../utils/subs.json';

class Subscriptions extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      subscriptions: subs[props.location.state.media],
      mediaType: props.location.state.media
    };
    console.log(this.state);
  }


  render() {
    return (
      <span>
        possible subscriptions for {this.state.mediaType}
        <ul>
        {this.state.subscriptions.map((item, index) => <li>{item.service}</li>)}
        </ul>
      </span>
    );
  }
};

export default Subscriptions;