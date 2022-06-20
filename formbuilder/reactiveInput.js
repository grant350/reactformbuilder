import React from 'react';
import {TextField,FormControl} from  '@mui/material';

class Input extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <FormControl className="input" style={{position:"relative",left:this.props.tabOver? this.props.tabOver.toString()+"px":"0px"}}>
        <label style={{display:"block", width:"100%",position:"relative", margin: "5px"}}> {this.props.label}</label>
        <TextField
        size="small"
        onChange={(e)=>{this.props.update(e.target.value)}}
        onClick={(e)=>{this.props.touchEvent(e)}}
        value={this.props.value}
        type={this.props.controlType}
        label={this.props.innerlabel? this.props.s:"type here"}
        error={this.props.error? this.props.error:false}
        required={this.props.required? this.props.required:false}
        disabled={this.props.disabled? this.props.disabled:false}
        helperText={this.props.helperText? this.props.helperText:""}
        InputProps={{ style: { fontSize: this.props.InputProps? this.props.InputProp:10 } }}
        InputLabelProps={{ style: { fontSize: (this.props.InputLabelProps? this.props.InputLabelProps:12) } }}
        style={{background:'white', "borderLeft":"20px solid "+this.props.border,"borderRadius": "10px",boxSizing: "border-box"}}
        id="filled-basic"
        variant="filled" />
      </FormControl>
    );
  }
}
export default Input;