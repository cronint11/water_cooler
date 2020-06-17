import React from 'react';
import DynamicHeader from './DynamicHeader';
import { Row, Col } from 'react-bootstrap';
import subs from '../utils/subs.json';

const style= {
  headerBuffer: {
    paddingTop: '100px'
  }
};

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
    let styleObj = { 
      height: "80px", 
      paddingTop: "30px",
      paddingLeft: "20px"    
    };

    switch (index % 4) {
      case 0:
        styleObj.background = "#ffca18";
        styleObj.color = "#88001b";
        break;
      case 1:
        styleObj.background = "#88001b";
        styleObj.color = "#ffca18";
        break;
      case 2:
        styleObj.background = "#033d5b";
        styleObj.color = "white";
        break;
      case 3:
        styleObj.background = "#92d7f8";
        styleObj.color = "#033d5b";
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
        <div style={style.headerBuffer}></div>
        {/* <div className="subscriptions">Possible subscriptions for {this.state.mediaType}</div> */}
        <Row>
        <Col style={{ "list-style-type": "none" }}>
          {this.state.subscriptions.map((item, index) =>
            <li style={this.renderColor(index)} ><input type="checkbox" /> {item.service}</li>)}
        </Col>
        </Row>
      </span>
      
    );
  }
};

export default Subscriptions;