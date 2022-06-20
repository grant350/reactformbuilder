import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _inherits from '@babel/runtime/helpers/inherits';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import React from 'react';
import { FormGroup as FormGroup$2, Button, FormControl as FormControl$1, TextField } from '@mui/material';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _assertThisInitialized from '@babel/runtime/helpers/assertThisInitialized';
import { BehaviorSubject } from 'rxjs';

function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Container = /*#__PURE__*/function (_React$Component) {
  _inherits(Container, _React$Component);

  var _super = _createSuper$4(Container);

  function Container(props) {
    _classCallCheck(this, Container);

    return _super.call(this, props);
  }

  _createClass(Container, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(FormGroup$2, {
        className: "container",
        style: {
          width: "100%",
          height: "auto",
          position: "relative",
          "left": "20px"
        }
      }, /*#__PURE__*/React.createElement("div", null, this.props.children.map(function (item) {
        return item;
      })), this.props.addChild ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
        className: "btn",
        onClick: this.props.addChild
      }, "Add Child"), " ", /*#__PURE__*/React.createElement(Button, {
        className: "btn",
        onClick: this.props.removeChild
      }, "Remove Child")) : null);
    }
  }]);

  return Container;
}(React.Component);

function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Input = /*#__PURE__*/function (_React$Component) {
  _inherits(Input, _React$Component);

  var _super = _createSuper$3(Input);

  function Input(props) {
    _classCallCheck(this, Input);

    return _super.call(this, props);
  }

  _createClass(Input, [{
    key: "render",
    value: function render() {
      var _this = this;

      return /*#__PURE__*/React.createElement(FormControl$1, {
        className: "input",
        style: {
          position: "relative",
          left: this.props.tabOver ? this.props.tabOver.toString() + "px" : "0px"
        }
      }, /*#__PURE__*/React.createElement("label", {
        style: {
          display: "block",
          width: "100%",
          position: "relative",
          margin: "5px"
        }
      }, " ", this.props.label), /*#__PURE__*/React.createElement(TextField, {
        size: "small",
        onChange: function onChange(e) {
          _this.props.update(e.target.value);
        },
        onClick: function onClick(e) {
          _this.props.touchEvent(e);
        },
        value: this.props.value,
        type: this.props.controlType,
        label: this.props.innerlabel ? this.props.s : "type here",
        error: this.props.error ? this.props.error : false,
        required: this.props.required ? this.props.required : false,
        disabled: this.props.disabled ? this.props.disabled : false,
        helperText: this.props.helperText ? this.props.helperText : "",
        InputProps: {
          style: {
            fontSize: this.props.InputProps ? this.props.InputProp : 10
          }
        },
        InputLabelProps: {
          style: {
            fontSize: this.props.InputLabelProps ? this.props.InputLabelProps : 12
          }
        },
        style: {
          background: 'white',
          "borderLeft": "20px solid " + this.props.border,
          "borderRadius": "10px",
          boxSizing: "border-box"
        },
        id: "filled-basic",
        variant: "filled"
      }));
    }
  }]);

  return Input;
}(React.Component);

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var FormControl = /*#__PURE__*/function (_React$Component) {
  _inherits(FormControl, _React$Component);

  var _super = _createSuper$2(FormControl);

  function FormControl(props) {
    var _this;

    _classCallCheck(this, FormControl);

    _this = _super.call(this, props);
    _this.name = _this.props.name;
    _this.type = "formControl";
    _this.validator = _this.props.validator ? _this.props.validator : null;
    _this.required = _this.props.required;
    _this.className = _this.props.className;
    _this.update = _this.update.bind(_assertThisInitialized(_this));
    _this.subject$ = new BehaviorSubject(null);
    _this.label = _this.props.label ? _this.props.label : 'type here';
    _this.width = _this.props.width ? _this.props.width : '200px';
    _this.dataType = _this.props.dataType;
    _this.parent = _this.props.parent; // this.disabled= this.props.disabled? this.props.disabled:false;

    _this.dataType = _this.props.dataType;
    _this.getDataType = _this.getDataType.bind(_assertThisInitialized(_this));
    _this.state = {
      error: false,
      touched: false,
      dirty: false,
      enabled: true,
      disabled: _this.props.disabled ? _this.props.disabled : false
    };
    _this.value = _this.props.value ? _this.props.value : _this.getDataType();
    _this.helperMessage = _this.props.helperMessage;
    _this.errorMessage = _this.props.errorMessage;
    _this.touchEvent = _this.touchEvent.bind(_assertThisInitialized(_this));
    _this.copyvalue = _this.props.value;
    _this.wrapperRef = /*#__PURE__*/React.createRef();
    _this.handleClickOutside = _this.handleClickOutside.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FormControl, [{
    key: "handleClickOutside",
    value: function handleClickOutside(event) {// if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      //   if (this.props.value !== undefined){
      //   console.log('was touched',this.state.touched,JSON.stringify(this.props.value));
      //   if (this.state.touched &&  JSON.stringify(this.props.value).length <= 0){
      //     alert("You clicked outside of me!");
      //   }
      // }
      // }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.update(this.value);
    }
  }, {
    key: "getDataType",
    value: function getDataType() {
      if (this.dataType !== undefined) {
        if (this.dataType.toLowerCase() === "object") {
          return {};
        }

        if (this.dataType.toLowerCase() === "string") {
          return "";
        }

        if (this.dataType.toLowerCase() === "number") {
          return 0;
        }

        if (this.dataType.toLowerCase() === "array") {
          return [];
        }
      } else {
        return "";
      }
    } //needs work not sure what to do. when touch is true and val <= 0 control invalid;
    //

  }, {
    key: "touchEvent",
    value: function touchEvent(e) {
      this.setState({
        touched: true
      }, function () {// console.log('after touch',this.state)
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
      });
    }
  }, {
    key: "update",
    value: function update(value, error) {
      var _this2 = this;

      if (error === undefined) {
        if (this.validator) {
          this.subject$.next(null);
          this.validator(value, this.subject$, this);
        } else {
          this.subject$.next(true);
        }
      } else {
        this.subject$.next(false);
      }

      this.subject$.subscribe(function (x) {
        var status;

        if (x === null) {
          status = 'PENDING';
        } else if (x === false) {
          status = 'INVALID';
        } else if (x === true) {
          status = "VALID";
        }

        if (_this2.props.parent.type === 'formGroup') {
          _this2.props.setParent(_this2.name, value, status);
        }

        if (_this2.props.parent.type === 'formArray') {
          _this2.props.setParent(_this2.props.index, value, status);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var getBorder = function getBorder() {
        if (_this3.props.status === "VALID") {
          return "#36bc78";
        } else if (_this3.props.status === "PENDING") {
          return "#f2da33";
        } else if (_this3.props.status === "INVALID") {
          return "#cb1842";
        }
      };

      return /*#__PURE__*/React.createElement("div", {
        className: "formControl",
        onMouseDown: this.handleClickOutside,
        ref: this.wrapperRef
      }, /*#__PURE__*/React.createElement(this.props.JSXElement, {
        controlType: this.props.controlType,
        dataInject: this.props.dataInject,
        touchEvent: this.touchEvent,
        disabled: this.state.disabled,
        errorMessage: this.errorMessage,
        helperText: this.props.helperText,
        required: this.required,
        label: this.label,
        update: this.update,
        border: getBorder(),
        name: this.props.name,
        value: this.props.value ? this.props.value : this.getDataType(),
        status: this.props.status
      }));
    }
  }]);

  return FormControl;
}(React.Component);

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var FormArray = /*#__PURE__*/function (_React$Component) {
  _inherits(FormArray, _React$Component);

  var _super = _createSuper$1(FormArray);

  function FormArray(props) {
    var _this;

    _classCallCheck(this, FormArray);

    _this = _super.call(this, props);
    _this.type = "formArray";
    _this.name = _this.props.name;
    _this.state = {
      statuses: [],
      color: "#36bc78",
      value: _this.props.value ? _this.props.value : [],
      status: _this.props.status ? _this.props.status : "VALID",
      controls: _this.props.controls
    };
    _this.reset = _this.reset.bind(_assertThisInitialized(_this));
    _this.refrences = [];
    _this.makeChildren = _this.makeChildren.bind(_assertThisInitialized(_this));
    _this.addChild = _this.addChild.bind(_assertThisInitialized(_this));
    _this.removeChild = _this.removeChild.bind(_assertThisInitialized(_this));
    _this.resetControl = _this.resetControl.bind(_assertThisInitialized(_this));
    _this.setParent = _this.setParent.bind(_assertThisInitialized(_this));
    _this.checkStatus = _this.checkStatus.bind(_assertThisInitialized(_this));
    _this.copyState = Object.assign({}, _this.state);
    _this.autoFill = _this.props.autoFill ? _this.props.autoFill : [];
    _this.copy = Object.assign({}, _this.props.controls.slice(0, 1)[0]);

    _this.state.controls.forEach(function (item, index) {
      _this.state.statuses[index] = "VALID";
      _this.refrences[index] = /*#__PURE__*/React.createRef();
      _this.props.controls[index];
    });

    return _this;
  }

  _createClass(FormArray, [{
    key: "reset",
    value: function reset() {
      var _this2 = this;

      this.setState(_objectSpread$1({}, this.copyState), function () {
        if (_this2.refrences) {
          _this2.refrences.forEach(function (refrences) {
            var control = refrences.current;

            if (control instanceof FormControl) {
              control.update('');
            }

            if (control instanceof FormGroup$1) {
              control.reset();
            }

            if (control instanceof FormArray) {
              control.reset();
            }
          });
        }
      });
    } //last but not least is to change value from [] to put in controls.

  }, {
    key: "checkStatus",
    value: function checkStatus(statuses) {
      if (statuses.includes('INVALID')) {
        return 'INVALID';
      } else if (statuses.includes('PENDING')) {
        return "PENDING";
      } else {
        return "VALID";
      }
    }
  }, {
    key: "setParent",
    value: function setParent(key, value, status) {
      var _this3 = this;

      var statuses = this.state.statuses.slice();

      if (status) {
        statuses[key] = status;
      }

      var newstatus = this.checkStatus(statuses);
      var statevalue = this.state.value.slice(0);
      statevalue[key] = value;
      this.setState({
        value: statevalue,
        statuses: statuses,
        status: newstatus
      }, function () {
        if (_this3.props.setParent) {
          if (_this3.props.parent.type === 'formGroup') {
            _this3.props.setParent(_this3.name, _this3.state.value, _this3.state.status);
          } else if (_this3.props.parent.type === 'formArray') {
            _this3.props.setParent(_this3.props.index, _this3.state.value, _this3.state.status);
          }
        }
      });
    }
  }, {
    key: "resetControl",
    value: function resetControl(control, keepcontrols) {
      var removeValues = function removeValues(control) {
        control = Object.assign({}, control);

        if (control.type == "formArray") {
          if (!keepcontrols || keepcontrols === undefined) {
            control.controls = control.controls.slice(0, 1).map(function (ctl, index) {
              return removeValues(ctl);
            });
          } else {
            control.controls = control.controls.slice(0).map(function (ctl, index) {
              return removeValues(ctl);
            });
          }
        } else if (control.type == "formGroup") {
          Object.keys(control.controls).forEach(function (key) {
            var ctl = control.controls[key];
            control.controls[key] = removeValues(ctl);
          });
        } else if (control.type === "formControl") {
          if (control.keepvalue) ; else {
            control.value = undefined;
          }
        }

        return control;
      };

      var result = removeValues(control);
      return result;
    }
  }, {
    key: "makeChildren",
    value: function makeChildren(ctls) {
      var _this4 = this;

      return ctls.map(function (child, index) {
        if (_this4.autoFill[index]) {
          _this4.state.value[index] = _this4.autoFill[index];
        }

        if (child.type === 'formControl') {
          if (child.JSXElement === undefined) {
            child.JSXElement = Input;
          }

          return /*#__PURE__*/React.createElement(FormControl, {
            controlType: child.controlType,
            dataInject: child.dataInject,
            dataType: child.dataType,
            className: child.className,
            required: child.required,
            helperText: child.helperText,
            errorMessage: child.errorMessage,
            ref: _this4.refrences[index],
            disabled: child.disabled,
            width: child.width,
            label: child.label,
            setParent: _this4.setParent,
            parent: _this4,
            control: child,
            validator: child.validator,
            VALIDATE: _this4.VALIDATE,
            index: index,
            JSXElement: child.JSXElement,
            name: child.name,
            key: index,
            value: _this4.state.value[index],
            status: _this4.state.statuses[index]
          });
        }

        if (child.type === 'formArray') {
          if (child.JSXContainer === undefined) {
            child.JSXContainer = Container;
          }

          return /*#__PURE__*/React.createElement(FormArray, {
            autoFill: _this4.autoFill[index],
            ref: _this4.refrences[index],
            setParent: _this4.setParent,
            parent: _this4,
            control: child,
            index: index,
            VALIDATE: _this4.VALIDATE,
            value: _this4.state.value[index],
            name: child.name,
            key: index,
            JSXContainer: child.JSXContainer,
            controls: child.controls
          });
        }

        if (child.type === 'formGroup') {
          if (child.JSXContainer === undefined) {
            child.JSXContainer = Container;
          }

          return /*#__PURE__*/React.createElement(FormGroup$1, {
            autoFill: _this4.autoFill[index],
            ref: _this4.refrences[index],
            setParent: _this4.setParent,
            parent: _this4,
            control: child,
            index: index,
            VALIDATE: _this4.VALIDATE,
            value: _this4.state.value[index],
            name: child.name,
            key: index,
            controls: child.controls,
            JSXContainer: child.JSXContainer
          });
        }
      });
    }
  }, {
    key: "addChild",
    value: function addChild() {
      var controls = this.state.controls.slice(0);
      controls.push(this.resetControl(this.copy));
      controls.length;
      var value = this.state.value.slice();

      switch (controls[controls.length - 1].type) {
        case 'formControl':
          value.push("");
          break;

        case 'formArray':
          value.push([]);
          break;

        case 'FormGroup':
          value.push({});
          break;
      }

      this.setState({
        controls: controls,
        value: value
      });
    }
  }, {
    key: "removeChild",
    value: function removeChild(index) {
      if (this.state.controls.length - 1 > 0) {
        this.state.controls.pop();
        this.state.value.pop();
        this.state.statuses.pop();
        var newstatus = this.checkStatus(this.state.statuses);
        this.setState({
          controls: this.state.controls,
          value: this.state.value,
          statuses: this.state.statuses,
          status: newstatus
        }, function () {
          if (this.props.setParent) {
            if (this.props.parent.type === 'formGroup') {
              this.props.setParent(this.name, this.state.value, this.state.status);
            } else if (this.props.parent.type === 'formArray') {
              this.props.setParent(this.props.index, this.state.value, this.state.status);
            }
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var getBorder = function getBorder() {
        if (_this5.state.status === "VALID") {
          return "#36bc78";
        } else if (_this5.state.status === "PENDING") {
          return "#f2da33";
        } else {
          return "#cb1842";
        }
      };

      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        className: "formArray"
      }, /*#__PURE__*/React.createElement(this.props.JSXContainer, {
        border: getBorder(),
        addChild: this.addChild,
        removeChild: this.removeChild,
        children: this.makeChildren(this.state.controls)
      })));
    }
  }]);

  return FormArray;
}(React.Component);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var FormGroup = /*#__PURE__*/function (_React$Component) {
  _inherits(FormGroup, _React$Component);

  var _super = _createSuper(FormGroup);

  function FormGroup(props) {
    var _this;

    _classCallCheck(this, FormGroup);

    _this = _super.call(this, props);
    _this.type = "formGroup";
    _this.name = _this.props.name;
    _this.Container = _this.props.JSXContainer ? _this.props.JSXContainer : Container;
    _this.state = {
      value: _this.props.value ? _this.props.value : {},
      status: _this.props.status ? _this.props.status : "VALID",
      controls: _this.props.controls,
      statuses: {},
      color: "#36bc78"
    };
    _this.refrences = {};
    _this.getData = _this.getData.bind(_assertThisInitialized(_this));
    Object.keys(_this.props.controls).forEach(function (key) {
      _this.state.statuses[key] = "VALID";
      _this.refrences[key] = /*#__PURE__*/React.createRef();
    });
    _this.setParent = _this.setParent.bind(_assertThisInitialized(_this));
    _this.checkStatus = _this.checkStatus.bind(_assertThisInitialized(_this));
    _this.reset = _this.reset.bind(_assertThisInitialized(_this));
    _this.copyState = Object.assign({}, _this.state);
    _this.autoFill = _this.props.autoFill ? _this.props.autoFill : {};
    return _this;
  }

  _createClass(FormGroup, [{
    key: "checkStatus",
    value: function checkStatus(statuses) {
      if (Object.values(statuses).includes('PENDING')) {
        return 'PENDING';
      } else if (Object.values(statuses).includes('INVALID')) {
        return "INVALID";
      } else {
        return "VALID";
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      var _this2 = this;

      this.setState(_objectSpread({}, this.copyState), function () {
        if (_this2.refrences) {
          Object.keys(_this2.refrences).forEach(function (key) {
            var control = _this2.refrences[key].current;

            if (control instanceof FormControl) {
              control.update('');
            }

            if (control instanceof FormGroup) {
              control.reset();
            }

            if (control instanceof FormArray) {
              control.reset();
            }
          });
        }
      }); //this is fine what should happen is the furthest refrenece will validate again
    }
  }, {
    key: "setParent",
    value: function setParent(key, value, status) {
      var _this3 = this;

      var statuses = this.state.statuses;
      statuses[key] = status;
      var newstatus = this.checkStatus(statuses);
      var statevalue = Object.assign({}, this.state.value);
      statevalue[key] = value;
      this.setState({
        value: statevalue,
        statuses: statuses,
        status: newstatus
      }, function () {
        if (_this3.props.setParent) {
          if (_this3.props.parent.type === 'formGroup') {
            _this3.props.setParent(_this3.name, _this3.state.value, _this3.state.status);
          } else if (_this3.props.parent.type === 'formArray') {
            _this3.props.setParent(_this3.props.index, _this3.state.value, _this3.state.status);
          }
        }
      });
    }
  }, {
    key: "getData",
    value: function getData() {
      return this.state.value;
    }
  }, {
    key: "makeChildren",
    value: function makeChildren(ctls) {
      var _this4 = this;

      return Object.keys(ctls).map(function (key, index) {
        var child = ctls[key];

        if (_this4.autoFill[key]) {
          _this4.state.value[key] = _this4.autoFill[key];
        }

        if (child.type === 'formControl') {
          if (child.JSXElement === undefined) {
            child.JSXElement = Input;
          }

          return /*#__PURE__*/React.createElement(FormControl, {
            controlType: child.controlType,
            dataInject: child.dataInject,
            dataType: child.dataType,
            className: child.className,
            required: child.required,
            helperText: child.helperText,
            errorMessage: child.errorMessage,
            ref: _this4.refrences[key],
            disabled: child.disabled,
            width: child.width,
            label: child.label,
            setParent: _this4.setParent,
            validator: child.validator,
            parent: _this4,
            control: child,
            index: index,
            JSXElement: child.JSXElement,
            name: key,
            value: _this4.state.value[key],
            status: _this4.state.statuses[key],
            key: key
          });
        }

        if (child.type === 'formArray') {
          var _React$createElement;

          if (child.JSXContainer === undefined) {
            child.JSXContainer = Container;
          }

          return /*#__PURE__*/React.createElement(FormArray, (_React$createElement = {
            autoFill: _this4.autoFill[key],
            ref: _this4.refrences[key],
            value: _this4.state.value[key],
            setParent: _this4.setParent,
            parent: _this4,
            control: child
          }, _defineProperty(_React$createElement, "value", _this4.state.value[key]), _defineProperty(_React$createElement, "name", key), _defineProperty(_React$createElement, "key", key), _defineProperty(_React$createElement, "index", index), _defineProperty(_React$createElement, "JSXContainer", child.JSXContainer), _defineProperty(_React$createElement, "status", _this4.state.statuses[key]), _defineProperty(_React$createElement, "controls", child.controls), _React$createElement));
        }

        if (child.type === 'formGroup') {
          var _React$createElement2;

          if (child.JSXContainer === undefined) {
            child.JSXContainer = Container;
          }

          return /*#__PURE__*/React.createElement(FormGroup, (_React$createElement2 = {
            autoFill: _this4.autoFill[key],
            ref: _this4.refrences[key],
            value: _this4.state.value[key],
            setParent: _this4.setParent,
            parent: _this4,
            control: child
          }, _defineProperty(_React$createElement2, "value", _this4.state.value[key]), _defineProperty(_React$createElement2, "index", index), _defineProperty(_React$createElement2, "name", key), _defineProperty(_React$createElement2, "controls", child.controls), _defineProperty(_React$createElement2, "status", _this4.state.statuses[key]), _defineProperty(_React$createElement2, "JSXContainer", child.JSXContainer), _defineProperty(_React$createElement2, "key", key), _React$createElement2));
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var getBorder = function getBorder() {
        if (_this5.state.status === "VALID") {
          return "#36bc78";
        } else if (_this5.state.status === "PENDING") {
          return "#f2da33";
        } else if (_this5.state.status === "INVALID") {
          return "#cb1842";
        }
      };

      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        className: "formGroup"
      }, /*#__PURE__*/React.createElement(this.Container, {
        ref: this.state.ref,
        border: getBorder(),
        children: this.makeChildren(this.state.controls)
      })));
    }
  }]);

  return FormGroup;
}(React.Component);
var FormGroup$1 = FormGroup;

export { Container, FormArray, FormControl, FormGroup$1 as FormGroup, Input };
