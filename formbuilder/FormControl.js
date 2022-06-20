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
    this.parent = this.props.parent;
    this.dataType = this.props.dataType;
    this.getDataType = this.getDataType.bind(this)
    this.state = {error:false, touched:false,dirty:false,enabled:true,disabled:this.props.disabled? this.props.disabled:false}
    this.value = this.props.value? this.props.value:this.getDataType();
    if (this.state.disabled){
      this.value = ''
    }
    this.helperMessage = this.props.helperMessage;
    this.errorMessage = this.props.errorMessage;
    this.touchEvent = this.touchEvent.bind(this);
    this.copyvalue = this.props.value;
    this.wrapperRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);

  }

  handleClickOutside(event) {
    // if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
    //   if (this.props.value !== undefined){
    //   console.log('was touched',this.state.touched,JSON.stringify(this.props.value));
    //   if (this.state.touched &&  JSON.stringify(this.props.value).length <= 0){
    //     alert("You clicked outside of me!");
    //   }
    // }
    // }
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

//needs work not sure what to do. when touch is true and val <= 0 control invalid;
//
  touchEvent(e){e
    this.setState({touched:true},()=>{
      // console.log('after touch',this.state)
      // if (this.required){
      //   if (typeof this.props.value === 'string'){
      //     if (this.props.value.length <= 0){
      //       this.update(this.props.value,true)
      //     }
      //   } else
      //       if (this.state.touched === true && JSON.stringify(this.props.value) === JSON.stringify(this.copyvalue)){
      //         this.update(this.props.value,true)
      //       }
      //   }
    })
  }

  update(value,error){
    if (error === undefined){
      if (this.validator){
          this.subject$.next(null);
          this.validator(value,this.subject$,this);
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


   return( <div className="formControl" onMouseDown={this.handleClickOutside} ref={this.wrapperRef} >
            <this.props.JSXElement controlType={this.props.controlType} dataInject={this.props.dataInject} touchEvent={this.touchEvent} disabled={this.state.disabled} errorMessage={this.errorMessage} helperText={this.props.helperText} required={this.required} label={this.label} update={this.update} border={getBorder()} name={this.props.name}  value={ this.props.value? this.props.value: this.getDataType() } status={this.props.status}/>
    </div>
   )
  }
}
export default FormControl;