import React from 'react';
import {Observable,BehaviorSubject} from 'rxjs';
class FormControl extends React.Component {

  constructor(props) {
    super(props)
    this.name = this.props.name;
    this.type = "formControl";
    this.validator = this.props.validator? this.props.validator:null;
    this.required = this.props.required;
    this.className= this.props.className;
    this.update = this.update.bind(this);
    this.subject$ = new BehaviorSubject(null);
    this.label = this.props.label? this.props.label:'type here';
    this.width = this.props.width? this.props.width:'200px';
    this.dataType = this.props.dataType;
    this.disabled= this.props.disabled? this.props.disabled:false;
    this.dataType = this.props.dataType;
    this.getDataType = this.getDataType.bind(this)
    this.state = {error:false, touched:false}
    this.value = this.props.value? this.props.value:this.getDataType();
    this.helperMessage = this.props.helperMessage;
    this.errorMessage = this.props.errorMessage;
    this.touched = this.props.touched? this.props.touched:false;
    this.touchEvent = this.touchEvent.bind(this);
    this.copyvalue = this.props.value;
  }


  componentDidMount(){
    this.update(this.value)
  }

   getDataType(){
     if (this.dataType !== undefined){
    if (this.dataType.toLowerCase() === "object"){
      return {};
    }
    if (this.dataType.toLowerCase() === "string"){
      return "";
    }
    if (this.dataType.toLowerCase() === "number"){
      return 0;
    }
    if (this.dataType.toLowerCase() === "array"){
      return [];
    }
  } else {
    return "";
  }
}

  touchEvent(e){
    this.setState({touched:true},()=>{
      if (this.required){
        if (typeof this.props.value === 'string'){
          if (this.props.value.length <= 0){
            this.update(this.props.value,true)
          }
        } else
            if (this.state.touched === true && JSON.stringify(this.props.value) === JSON.stringify(this.copyvalue)){
              this.update(this.props.value,true)
            }
        }
    })
  }

  update(value,error){
    if (error === undefined){
      if (this.validator){
          this.subject$.next(null);
          this.validator(value,this.subject$);
      }
      else {
          this.subject$.next(true);
        }
      } else {
        this.subject$.next(false)
      }
      this.subject$.subscribe((x)=>{
      var status;
      if (x === null){
        status = 'PENDING'
      } else if (x === false){
        status ='INVALID'
      } else if (x === true){
        status = "VALID"
      }
        if (this.props.parent.type === 'formGroup'){
          this.props.setParent(this.name,value,status)
        }
        if (this.props.parent.type === 'formArray'){
          this.props.setParent(this.props.index,value,status)
        }

    })


  }

  render(){

    var getBorder = ()=>{
      if (this.props.status === "VALID") {
        return "#36bc78"
      } else if (this.props.status === "PENDING") {
        return "#f2da33";
      } else if (this.props.status === "INVALID") {
        return "#cb1842";
      }
    }


   return( <div className="formControl">
            <this.props.JSXElement dataInject={this.props.dataInject} touchEvent={this.touchEvent} disabled={this.disabled} errorMessage={this.errorMessage} helperMessage={this.helperMessage} required={this.required} label={this.label} update={this.update} border={getBorder()} name={this.props.name}  value={ this.props.value? this.props.value: this.getDataType() } status={this.props.status}/>
    </div>
   )
  }
}
export default FormControl;