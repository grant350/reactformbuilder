import FormGroup from './FormGroup.js';
import FormControl from './FormControl.js';
import {BehaviorSubject} from 'rxjs';
import React from 'react';
import {Input,Container} from './index.js';

class FormArray extends React.Component{
  constructor(props){
    super(props);
    this.type = "formArray";
    this.name = this.props.name;
    this.state = {
      statuses:[],
      color:"#36bc78",
      value: this.props.value? this.props.value: [],
      status: this.props.status? this.props.status: "VALID",
      controls:this.props.controls
    }
    this.reset = this.reset.bind(this);

    this.refrences=[];
    this.makeChildren = this.makeChildren.bind(this);
    this.addChild = this.addChild.bind(this);
    this.removeChild = this.removeChild.bind(this);
    this.resetControl= this.resetControl.bind(this);
    this.setParent = this.setParent.bind(this);
    this.checkStatus = this.checkStatus.bind(this);

    this.copyState = Object.assign({},this.state);
    this.autoFill = this.props.autoFill? this.props.autoFill:[];
    this.copy = Object.assign({}, this.props.controls.slice(0,1)[0]);
    this.state.controls.forEach((item,index)=>{
      this.state.statuses[index]="VALID";
      this.refrences[index]=React.createRef();
      var control = this.props.controls[index]
    })

  }


  reset(){

    this.setState({...this.copyState},()=>{
      if (this.refrences){
        this.refrences.forEach(refrences=>{
          var control = refrences.current;
          if ( control instanceof FormControl){
              control.update('');
          }
          if ( control instanceof FormGroup){
              control.reset();
          }
          if ( control instanceof FormArray){
            control.reset();
          }

        });
      }
    });

  }
  //last but not least is to change value from [] to put in controls.

  checkStatus(statuses){
    if (statuses.includes('INVALID')){
      return 'INVALID'
    } else if (statuses.includes('PENDING')){
      return "PENDING"
    } else {
      return "VALID"
    }
  }



  setParent(key,value,status){
    var statuses = this.state.statuses.slice()
    if (status){
      statuses[key]=status;
    }
   var newstatus= this.checkStatus(statuses);
    var statevalue = this.state.value.slice(0);
    statevalue[key] = value;
    this.setState({value:statevalue,statuses:statuses,status:newstatus},()=>{
     if (this.props.setParent){
       if (this.props.parent.type === 'formGroup'){
       this.props.setParent(this.name,this.state.value,this.state.status)
       } else if (this.props.parent.type === 'formArray'){
        this.props.setParent(this.props.index,this.state.value,this.state.status)
       }

     }
    });

   }



  resetControl(control,keepcontrols){
    var removeValues = (control)=>{
      control = Object.assign({},control);
        if (control.type == "formArray"){
          if (!keepcontrols || keepcontrols === undefined){
          control.controls = control.controls.slice(0,1).map((ctl,index)=>{
            return removeValues(ctl)
          })
        } else {
          control.controls = control.controls.slice(0).map((ctl,index)=>{
            return removeValues(ctl)
          })
        }

        } else if (control.type == "formGroup"){
          Object.keys(control.controls).forEach(key=>{
            var ctl = control.controls[key];
            control.controls[key] = removeValues(ctl)
          })
        }
        else if (control.type  === "formControl"){
          if (control.keepvalue){
            //keep the value
          } else {
            control.value = undefined
          }
        }
        return control;
    }
    var result= removeValues(control);
    return result;
  }








    makeChildren(ctls){
     return  ctls.map( (child, index)=>{
      if (this.autoFill[index]){
        this.state.value[index] = this.autoFill[index]
       }
        if (child.type === 'formControl' ){
          if (child.JSXElement === undefined ){
            child.JSXElement = Input;
          }
          return <FormControl controlType={child.controlType} dataInject={child.dataInject} dataType={child.dataType} className={child.className} required={child.required}  helperText={child.helperText} errorMessage={child.errorMessage}  ref={this.refrences[index]} disabled={child.disabled} width={child.width} label={child.label} setParent={this.setParent} parent={this} control={child} validator={child.validator}  VALIDATE={this.VALIDATE} index={index}  JSXElement={child.JSXElement} name={child.name} key={index}  value={this.state.value[index]} status={this.state.statuses[index]} />
          }
        if (child.type === 'formArray' ){
          if (child.JSXContainer === undefined ){
            child.JSXContainer = Container;
          }
          return  <FormArray autoFill={this.autoFill[index]} ref={this.refrences[index]} setParent={this.setParent} parent={this} control={child} index={index} VALIDATE={this.VALIDATE} value={this.state.value[index]} name={child.name} key={index}  JSXContainer={child.JSXContainer} controls={child.controls} />;
        }
        if (child.type === 'formGroup' ){
          if (child.JSXContainer === undefined ){
            child.JSXContainer = Container;
          }
          return <FormGroup  autoFill={this.autoFill[index]}  ref={this.refrences[index]} setParent={this.setParent} parent={this} control={child} index={index} VALIDATE={this.VALIDATE} value={this.state.value[index]}  name={child.name}  key={index}  controls={child.controls} JSXContainer={child.JSXContainer} />;
        }
      })
    }

  addChild(){
    var controls = this.state.controls.slice(0)
    controls.push(this.resetControl(this.copy))

    var length = controls.length;
    var value = this.state.value.slice();
    switch (controls[controls.length-1].type){
      case 'formControl': value.push("");
      break;
      case 'formArray': value.push([]);
      break;
      case 'FormGroup': value.push({});
      break;
     }
    this.setState({controls:controls,value:value});
  }


  removeChild(index){


    if ((this.state.controls.length -1) > 0){
      this.state.controls.pop();
      this.state.value.pop();
      this.state.statuses.pop();
      var newstatus= this.checkStatus(this.state.statuses);

      this.setState({controls:this.state.controls,value:this.state.value,statuses:this.state.statuses,status:newstatus},function(){
        if (this.props.setParent){
          if (this.props.parent.type === 'formGroup'){
          this.props.setParent(this.name,this.state.value,this.state.status)
          } else if (this.props.parent.type === 'formArray'){
           this.props.setParent(this.props.index,this.state.value,this.state.status)
          }

        }
      });
    }
  }

  render(){
    var getBorder = ()=>{
      if (this.state.status === "VALID") {
        return "#36bc78"
      } else if (this.state.status === "PENDING") {
        return "#f2da33";
      } else {
        return "#cb1842";
      }
    }
    return (
      <React.Fragment>
    <div className="formArray" >
      <this.props.JSXContainer border={getBorder()}  addChild={this.addChild} removeChild={this.removeChild} children={this.makeChildren(this.state.controls)} />
    </div>


    </React.Fragment>
    )
  }

};
export default FormArray;
