import React from 'react';
import {Observable,BehaviorSubject} from 'rxjs';
class FormControl extends React.Component {

  constructor(props) {
    super(props)
    this.name = this.props.name;
    this.type = "formControl"
    this.validator = this.props.validator? this.props.validator:null;
    this.required = props.required;
    this.update = this.update.bind(this);
    this.subject$ = new BehaviorSubject(null);
    this.label = this.props.label? this.props.label:'type here';
    this.width = this.props.width? this.props.width:'200px';
    this.disabled= this.props.disabled? this.props.disabled:false;

  }


  componentDidMount(){
    this.update(this.props.value)
  }

  update(value){
      if (this.validator){
          this.subject$.next(null);
          this.validator(value,this.subject$);
      } else {
        this.subject$.next(true);
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
            <this.props.JSXElement labelName={this.name} label={this.label} update={this.update} border={getBorder()} name={this.props.name}  value={this.props.value } status={this.props.status}/>
    </div>
   )
  }
}
export default FormControl;