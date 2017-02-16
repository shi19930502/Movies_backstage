import React from "react";
import ReactDOM from "react-dom";
import {Icon,Input} from "antd";
export default React.createClass({
    getInitialState:function(){
        return {
            value:this.props.value
        }
    },
    componentWillReceiveProps:function(newProps){
        this.setState({
            value:newProps.value
        })
    },
    change:function(event){
        this.setState({
            value:event.target.value
        })
    },
    render:function(){
        var style={
            margin:"2px 0",
            width:"200px"
        }
        return <div>
            <span>{this.props.children}</span>
             <Input size="large" ref="input" addonBefore={<Icon type={this.props.icon}/>} placeholder={this.props.placeholder} type={this.props.type} style={style} value={this.state.value} onChange={this.change} onBlur={this.props.validate}/>
            <label style={this.props.style}>{this.props.info}</label>
            </div>
    }
});
