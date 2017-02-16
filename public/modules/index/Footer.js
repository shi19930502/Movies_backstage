import React from "react";
import {Layout} from "antd";
const {Footer} = Layout;
export default React.createClass({
    render:function(){
        return <Footer style={{backgroundColor:"rgba(0,0,0,.3)",textAlign:"center"}}>
            <small>注册商标</small>
            </Footer>
    }
})