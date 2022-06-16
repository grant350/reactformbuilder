# How to compile the formbuilder for developers

## 'npm install' if you havent already
## 'npm start' to start rollup and compile the code.
## 'npm run end' to remove node_modules so there isnt duplicate react error which is compicated to fix.

<h1 align="center"> React Formbuilder like angular formbuilder</h1>

<p align="center">
React Formbuilder has asynchornous observables from rxjs
</p>

## Documentation
Get started with reactFormbuilder!

### Prerequisites
 # * have react installed.
 # * have react-dom installed.
 # * Babel configured

# Formgroup

```ts
var formgroup= {
     type:'formGroup',
     JSXContainer: <JSXElement> ,
     name: <String>,
     state:{
      value:{},
      statuses:{},
      status: (<VALID||INVALID||PENDING>),
      controls:  ("name":<Formgroup> || <FormArray> || <FormControl>)}
     }
}
```

# FormArray

```ts
var formArray = {
     type:'formArray',
     JSXContainer: <JSXElement> ,
     name: <String>,
     state:{
      value:[],
      statuses:[],
      status: (<VALID||INVALID||PENDING>),
      controls:  ("name":<Formgroup> || <FormArray> || <FormControl>)}
     }
}

```

# FormControl

```ts
 var formControl= {
     validator:<any>,
     type:'formControl',
     JSXElement: <JSXElement> ,
     name: <String>
     value: "" || props.value
}
```

 # What is a JSXElmenet?.
 ## A JSXElement is a React Component that can be a class or a functional component.

### To be able to update the values in your input fields you need to call props.update.  also if you want to get the status color for the border of an input field you need to use props.border.

 ```js
 var Input = function (props){
  return (<div className="input" style={"border":"2px solid "+props.border}>
      <span style={{width:'100%'}}>{props.status}</span>
    {props.name} <input onChange={ (e)=>{props.update(e.target.value)}} value={props.value}/>
        </div>)
}
```





# how to work with prebuilt components
## Containers!

### Below is an example of a container class and this is a default for reactformbuilder to use. you can create any type of container you wish as long as you use {this.props.children} in the render or in a functional component, return {this.props.children}

## each child of the children array is a JSXElement you have defined in the form.

```js
class Container extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className="container" style={{background:"red", width:"100%", height:"auto",position:"relative","left":"20px"}}>
          {this.props.children}
      </div>
    );
  }
}
 ```

 # as we discussed each contianer has JSXElements this is an example of a JSXElement

 ## you can create it in any way you want. If you do not call update on a input change, the value will never change nor will it validate the form.

 ```js
import {TextField} from  '@mui/material';
class Input extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className="input" style={{position:"relative",left:this.props.tabOver? this.props.tabOver.toString()+"px":"0px"}}>
        <label style={{display:"block", width:"100%",position:"relative", margin: "5px"}}> {this.props.labelName}</label>
        <TextField
        size="small"
        onChange={(e)=>{this.props.update(e.target.value)}}
        value={this.props.value}
        label={this.props.label? this.props.label:"type here"}
        error={this.props.error? this.props.error:false}
        required={this.props.required? this.props.required:false}
        disabled={this.props.disabled? this.props.disabled:false}
        helperText={this.props.helperText? this.props.helperText:""}
        InputProps={{ style: { fontSize: this.props.InputProps? this.props.InputProp:10 } }}
        InputLabelProps={{ style: { fontSize: (this.props.InputLabelProps? this.props.InputLabelProps:12) } }}
        style={{background:'white', "borderLeft":"20px solid "+this.props.border,"borderRadius": "10px",width: this.props.width !== undefined ? this.props.width.toString()+"px":"100px"}}
        id="filled-basic"
        variant="filled" />
      </div>
    );
  }
}
 ```


 # what happend if you dont specify JSXContainer or JSXElment and or its not valid JSX?

 ## reactformbuilder will select a default container so the code does not break and a default input. so if you have a textbox and you are wondering why its an input proably because you have invalid JSX or the component isnt in the form.


# How to get started.

## First import reactformbuilder.

```js
  import {FormGroup,Input,Container} from '@zenabyss/reactformbuilder';
```


## next build a model formgroup
```js
   var formgroup = {
      "name":{
        "type":"formControl",
         "validator": (value,obs)=>{
              //you can use set time out or not or any async call
              // true === "VALID"
              // false === "INVALID"
              // null === "PENDING"
             setTimeout(()=>{
                if (value === "bob"){
                  obs.next(true);
                } else {
                  obs.next(false)
                }
              },3000);
          }
        },
      "address":{
        "type":"formGroup",
        "JSXContainer":JSXContainer
        "controls":{
          "zipcode":{
            "type":"formControl",
            "value":"84932"
          },
          "streetAddress":{
            "type":"formControl",
            "JSXElement":JSXElement
          }
        }
      }
      "skills":{
        "type":"formArray",
        "controls": [{
          "name":"skillname",
          "value":"bob builder mastery",
          "JSXElement":JSXElement
        }]
      }
   }
```




# How to getdata from the formGroup?

 ```js
 // to get data you must use a refrence to the formGroup.
   function submit(){
      var formvalue = this.myRef.current.getData();
      console.log('formvalue',formvalue)
   }
  <FormGroup ref={this.myRef} controls={formgroup} name={'order'}  />
  <button onClick={this.submit|| submit}></button>

```

# How to clear the form?

 ```js
 // to get data you must use a refrence to the formGroup.
   function submit(){
      this.myRef.current.reset();
   }

  <FormGroup ref={this.myRef} controls={formgroup} name={'order'}  />
   <button onClick={this.submit|| submit}></button>
```


## How to Contribute?

### you can contribute by emailing my at welcometoreality2808@gmail.com or https://www.linkedin.com/in/grant-mitchell-82a756150/.


## The process is to branch off the main and make some minor changes to the code or add component features. once you have finished your changes make a pull requests to be reviewed. once reviewed, the branch will be merged to main.

## for major changes please fork the project.

## this code cannot be distributed for commercial use, please contact me for commercial use.

## whats needed majorly is efficency and pre build components for people to use. now since this is nested there should be an option for a server middleware for images to load 64bit data.
