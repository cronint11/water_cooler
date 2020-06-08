import React from 'react';

class Discussion extends React.Component {

  render() {
    return (
      <span>
        here's the discussion for {this.props.reviewID}
      </span>
    )
    };
}

export default Discussion;