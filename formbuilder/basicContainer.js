import React from 'react';
import { FormGroup as FG,Button} from '@mui/material';

class Container extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <FG className="container" style={{ width:"100%", height:"auto",position:"relative","left":"20px"}}>
          <div>{this.props.children.map(item=>{
            return item
          })}
          </div>
          {this.props.addChild? <div><Button className="btn" onClick={this.props.addChild}>Add Child</Button> <Button className="btn"  onClick={this.props.removeChild}>Remove Child</Button></div>:null }
      </FG>
    );
  }
}
export default Container;
