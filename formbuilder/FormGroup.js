
import FormControl from './FormControl.js';
import FormArray from './FormArray.js';
import React from 'react';
import {Observable,BehaviorSubject,mergeMap,map,forkJoin} from 'rxjs';
import {Input,Container} from './index.js';

class FormGroup extends React.Component {
  constructor(props) {
    super(props);
    this.type = "formGroup";
    this.name = this.props.name;
    this.Container = this.props.JSXContainer? this.props.JSXContainer:Container;
    this.state = {
      value: this.props.value? this.props.value: {},
      status: this.props.status? this.props.status: "VALID",
      controls:this.props.controls,
      statuses:{},
      color:"#36bc78"
     }
     this.refrences={};
     this.getData = this.getData.bind(this);
     Object.keys(this.props.controls).forEach(key=>{
      this.state.statuses[key]="VALID";
      this.refrences[key]=React.createRef();
       switch (this.props.controls[key].type){
        case 'formControl': this.state.value[key] = "";
        break;
        case 'formArray': this.state.value[key] = [];
        break;
        case 'FormGroup': this.state.value[key] = {};
        break;
       }
     })
     this.setParent = this.setParent.bind(this);
     this.checkStatus = this.checkStatus.bind(this);
     this.reset = this.reset.bind(this);
     this.copyState = Object.assign({},this.state)

  }

  componentDidUpdate(){

  }
    checkStatus(statuses){
      if (Object.values(statuses).includes('PENDING')){
        return 'PENDING'
      } else if (Object.values(statuses).includes('INVALID')){
        return "INVALID"
      } else {
        return "VALID"
      }
    }

    reset(){
      this.setState({...this.copyState},()=>{
        if (this.refrences){
          Object.keys(this.refrences).forEach(key=>{
            var control = this.refrences[key].current;
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
      //this is fine what should happen is the furthest refrenece will validate again

    }

    setParent(key,value,status){
      var statuses =this.state.statuses
          statuses[key]=status;
      var newstatus= this.checkStatus(statuses);
        var statevalue = Object.assign({},this.state.value);
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

    getData(){
      return this.state.value;
    }

  makeChildren(ctls){
   return Object.keys(ctls).map( (key, index)=>{
      var child = ctls[key];
      if (child.type === 'formControl' ){
        if (child.JSXElement === undefined ){
          child.JSXElement = Input;
        }
        return <FormControl ref={this.refrences[key]} disabled={child.disabled} width={child.width}  label={child.label} setParent={this.setParent} validator={child.validator} parent={this} control={child}  index={index}  JSXElement={child.JSXElement} name={key} value={this.state.value[key]} status={this.state.statuses[key]} key={key}/>
        }
      if (child.type === 'formArray' ){
        if (child.JSXContainer === undefined ){
          child.JSXContainer = Container;
        }
        return  <FormArray ref={this.refrences[key]}  setParent={this.setParent}   parent={this}  control={child} value={this.state.value[key]} name={key} key={key}  index={index} JSXContainer={child.JSXContainer} status={this.state.statuses[key]} controls={child.controls} />;
      }
      if (child.type === 'formGroup' ){
        if (child.JSXContainer === undefined ){
          child.JSXContainer = Container;
        }
        return <FormGroup ref={this.refrences[key]} setParent={this.setParent} parent={this}  control={child} value={this.state.value[key]} index={index}  name={key}  controls={child.controls} status={this.state.statuses[key]} JSXContainer={child.JSXContainer} key={key} />;
      }
    })
  }


  render() {

    var getBorder = ()=>{
    if (this.state.status === "VALID") {
      return "#36bc78"
    } else if (this.state.status === "PENDING") {
      return "#f2da33";
    } else if (this.state.status === "INVALID"){
      return "#cb1842";
    }
  }

      return (
        <React.Fragment>
        <div className = "formGroup"  style={{"borderLeft":"10px solid " +getBorder()}}>
        <this.Container ref={this.state.ref} children={this.makeChildren(this.state.controls)}/>
       </div>
      </React.Fragment>)
    }

  };
export default FormGroup;
