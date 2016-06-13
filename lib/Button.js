'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.Button=undefined;var _jsxFileName='src/Button.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var propTypes={
style:_react.PropTypes.object,
onPress:_react.PropTypes.func.isRequired,
disabled:_react.PropTypes.bool,
loading:_react.PropTypes.bool,
text:_react.PropTypes.string,
loadingText:_react.PropTypes.string};

var defaultProps={
style:{},
disabled:false,
loading:false,
text:''};


var styles=_reactNative.StyleSheet.create({
container:{
padding:12,
position:'relative',
backgroundColor:'white',
marginLeft:10,
marginRight:10,
borderRadius:2},

disabled:{
backgroundColor:'lightgray'},

text:{
color:'#DB4437',
textAlign:'center',
fontWeight:'bold'},

loading:{
flexDirection:'row',
justifyContent:'center',
alignItems:'center'}});



var Button=exports.Button=function Button(props){return (
_react2.default.createElement(_reactNative.TouchableOpacity,{
style:[
styles.container,
_reactNative.StyleSheet.create(props.style),
props.disabled?styles.disabled:{}],

onPress:function onPress(){
if(!props.disabled&&!props.loading)props.onPress();},__source:{fileName:_jsxFileName,lineNumber:44}},


props.loading?
_react2.default.createElement(_reactNative.View,{style:styles.loading,__source:{fileName:_jsxFileName,lineNumber:55}},
_react2.default.createElement(_reactNative.ProgressBarAndroid,{styleAttr:'Small',__source:{fileName:_jsxFileName,lineNumber:56}}),
_react2.default.createElement(_reactNative.Text,{style:styles.text,__source:{fileName:_jsxFileName,lineNumber:57}},' ',props.loadingText?props.loadingText:props.text)):


_react2.default.createElement(_reactNative.Text,{style:styles.text,__source:{fileName:_jsxFileName,lineNumber:60}},props.text)));};



Button.propTypes=propTypes;
Button.defaultProps=defaultProps;