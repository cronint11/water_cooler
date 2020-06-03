import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styleFontGold } from './Form';

function Stars(props) {
  let icons=[];

  for (let i=0; i<5; i++) {
    let starsLeft = parseFloat(props.stars) - i;
    if (starsLeft <= 0) {
      icons.push({prefix: 'far', iconName:'star'});
    } else if (starsLeft < 1) {
      icons.push({prefix: 'fas', iconName: 'star-half-alt'});
    } else {
      icons.push({prefix: 'fas', iconName: 'star'});
    }
  }
  return <span>
    {icons.map((item, index) => <FontAwesomeIcon style={styleFontGold} icon={item}key={index} />)}
  </span>;
};

export default Stars;