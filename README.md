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
 ## * have react installed.
 ## * have react-dom installed.
 ## * Babel configured



# The Idea behind this?

## The idea started out to be a somewhat copy of Angular Formbuilder. Angular's Formbuilder can do amazing things such as validating controls, managing state, providing control information, and getting raw values which is the most meaningful part of Angulars Formbuilder. In angular you would call form.get('formcontrol name').value this would output something like

``` js
{'firstname':'myname','lastname':'some lastname', 'somearray':['somevalues']}
```

## Most people underestimate the power behind Formbuilders, and most people have never used Angulars Formbuilder. This should give the client more manuverability not like Angulars Formbuilder where you can't run async validators directly in the control, you have to use it seperatly and its not very organized that way. So here is a 70% done Angular Formbuilder on steroids. enjoy :)


# Basis of a Formgroup

```ts
var formgroup= {
     type:'formGroup',
     JSXContainer: <JSXContainer> ,
     name: <String>,
     state:{
      value:{},
      statuses:{},
      status: (<VALID||INVALID||PENDING>),
      controls:  ("name":<Formgroup> || <FormArray> || <FormControl>)}
     }
```

# Basis of a FormArray

```ts
var formArray = {
     type:'formArray',
     JSXContainer: <JSXContainer> ,
     name: <String>,
     state:{
      value:[],
      statuses:[],
      status: (<VALID||INVALID||PENDING>),
      controls:  ("name":<Formgroup> || <FormArray> || <FormControl>)
      }
     }
```

# Basis of a FormControl

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

### Below is an example of a container class and this is a default for reactformbuilder to use. you can create any type of container you wish as long as you use {this.props.children} in the render or in a functional component, return {props.children}

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

# What options are available for the formControl model?

```ts
  {
    value: <any> "to be able to set the default value for a form Control ",
    label: <string> "usualy the textField label namefrom MUI  but if you make your own control can be anything",
    error: <boolean> "usualy on textFields from MUI",
    required: <boolean> "not operational right now",
    disabled: <boolean> "will prevent access to type in the control",
    helperText: <string> "for default input element helpertext usualy hang at the bottom to guide clients",
    controlType: <string>( 'password' || 'text' || 'ect...'),
    className: <string> "not implemented yet but very soon you can add a class to track each formcontrol if you didnt make the controls your self."
  }

```



 # as we discussed each contianer has JSXElements this is an example of a JSXElement

 ## you can create it in any way you want. If you do not call update on a input change, the value will never change nor will it validate the form.



 ```js

 /*
 this is used because the hight of the formcontrol is too large to shrink it you can use fontsize or this may be what you need
    InputProps={{ style: { fontSize: this.props.InputProps? this.props.InputProp:10 } }}
        InputLabelProps={{ style: { fontSize: (this.props.InputLabelProps? this.props.InputLabelProps:12) } }}
 */
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
        type={this.props.controlType}
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
//you dont have to import Input or Container anymore as these are defaults but its up to you?
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

# Data Injections?

## A data Injection is where the component you define in the model needs data to display to the use, for example a select input may need an array of letters for the user to choose from. in order to give the data to the component you must add in the model a property called dataInjection. You can access the dataInject property like props.dataInjection || this.props.dataInjection.

```js
var letters = ['A','B','C','D']
 "state": {
          "type": "formControl",
          "JSXElement": Selector,
          "dataInject": letters,
          "label": "state"
        }

```

# More examples...
## Here is an example of an order form

### in this form below we have alot of synchronous validators, these validators run instantly. Down in the products array upc lookup input makes an axios call which is asynchronous. Soo if the call to get data back from the server took 3 seconds, the form border color's will be (yellow || PENDING). when the 3 seconds is up, the input field will be red or green (INVALID || VALID)


```js
 var formgroup = {
        "customer_name": {
          "type": "formControl",
          "label": "name",
          "validator": (value, obs) => {
            if (value.length !== 0) {
              obs.next(true)
            } else {
              obs.next(false)
            }
          }
        },
        "customer_street": {
          "type": "formControl",
          "label": "street address"
        },
        "state": {
          "type": "formControl",
          "JSXElement": Selector,
          "dataInject": this.states,
          "label": "state"
        },
        "city": {
          "type": "formControl",
          "label": "city"
        },
        "tax": {
          "type": "formControl",
          "label": "tax",
          "validator": (val, obs) => {
            var countDecimals = function (v) {
              if (v.length >= 1) {
                var split = v.split('.')
                if (split.length >= 2) {
                  return v.split(".")[1].length || 0;
                } else {
                  return 0;
                }
              } else {
                return 0
              }
            }
            if (countDecimals(val) === 2) {
              obs.next(true);
            } else {
              obs.next(false);
            }
          }
        },
        "total": {
          "type": "formControl",
          "label": "total",
          "validator": (val, obs) => {
            var countDecimals = function (v) {
              if (v.length >= 1) {
                var split = v.split('.')
                if (split.length >= 2) {
                  return v.split(".")[1].length || 0;
                } else {
                  return 0;
                }
              } else {
                return 0
              }
            }
            if (countDecimals(val) === 2) {
              obs.next(true);
            } else {
              obs.next(false);
            }
          }
        },
        "tracking": {
          "type": "formControl",
          "label": "tracking",
          "validator": (val, obs) => {
            if (isNaN(val) === false && val.length > 7) {
              obs.next(true);
            } else {
              obs.next(false)
            }
          }
        },

        "shipping_cost": {
          "type": "formControl",
          "label": "shipping cost",
          "validator": (val, obs) => {
            var countDecimals = function (v) {
              if (v.length >= 1) {
                var split = v.split('.')
                if (split.length >= 2) {
                  return v.split(".")[1].length || 0;
                } else {
                  return 0;
                }
              } else {
                return 0
              }
            }
            if (countDecimals(val) === 2) {
              obs.next(true);
            } else {
              obs.next(false);
            }
          }
        },
        "products": {
          "type": "formArray",
          "controls": [{
            "name": "product",
            "type": "formGroup",
            "controls": {
              "model": {
                "type": "formControl",
                "label": "model"
              },
              "product_cost": {
                "type": "formControl",
                "label": "product cost",
                "validator": (val, obs) => {
                  var countDecimals = function (v) {
                    if (v.length >= 1) {
                      var split = v.split('.')
                      if (split.length >= 2) {
                        return v.split(".")[1].length || 0;
                      } else {
                        return 0;
                      }
                    } else {
                      return 0
                    }
                  }
                  if (countDecimals(val) === 2) {
                    obs.next(true);
                  } else {
                    obs.next(false);
                  }
                }
              },
              "upc": {
                "type": "formControl",
                "label": "upc",
                "validator": (value, obs) => {
                  if (value.length === 12) {
                    axios.get('http://127.0.0.1:8080/searchProducts', {
                      params: {
                        query: value
                      }
                    }).then(response => {
                      if (response.data.data.length === 1) {
                        obs.next(true);
                      } else {
                        obs.next(false);
                      }
                    })
                  } else {
                    obs.next(false)
                  }
                }
              },
              "quantity": {
                "type": "formControl",
                "label": "quantity",
                "validator": (value, obs) => {
                  if (isNaN(parseInt(value)) === false) {
                    obs.next(true)
                  } else {
                    obs.next(false)
                  }
                }
              }
            }
          }]
        }
 }

```



# Future Features

## The ability to redefine the value in FormControl as it goes through validation.

## The ability to auto fill the entire form with values when formControl is validated.

## The ability to load a validator file to run on each child

## The ability to load a values file to run on each child


# How to Contribute?
### you can contribute by emailing welcometoreality2808@gmail.com or https://www.linkedin.com/in/grant-mitchell-82a756150/.


## The process is to branch off the main and make some minor changes to the code or add component features. once you have finished your changes make a pull requests to be reviewed. once reviewed, the branch will be merged to main.

## for major changes please fork the project.

## Whats needed majorly is efficency and pre built components for people to use.
