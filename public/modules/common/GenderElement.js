import React from "react";
import ReactDOM from "react-dom";
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
        return <div>
            <span>{this.props.children}</span>
            <input type={this.props.type} name="gender" ref="male" value="男" onChange={this.change} checked={this.state.value=="男"}/><span>{this.props.male}</span>
            <input type={this.props.type} name="gender" ref="female" value="女" onChange={this.change} checked={this.state.value=="女"}/><span>{this.props.female}</span>
            </div>
    }
});