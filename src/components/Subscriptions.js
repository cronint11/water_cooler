import React from 'react';

import subs from '../utils/subs.json';

class Subscriptions extends React.Component {
  constructor(props)
  {
    super(props);
  }


  render() {
    return (
      <span>
        {subs[this.props.media].map()}
      </span>
    );
  }
};

export default Subscriptions;