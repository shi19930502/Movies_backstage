import React from "react";
import {ajax} from "tools";
import {Layout,Row,Col,Menu,Icon,Modal,message} from "antd";
const {Header} = Layout;
export default React.createClass({
     getInitialState(){
            return{
                current:"login",
                username:""
            };
        },
        componentWillMount(){
            this.show()
        },
        componentWillReceiveProps(){
            this.show()
        },
        handleClick(e){
            this.setState({
                current:e.key
            });
        },
        show(){
            ajax({
                type:"get",
                url:"/getSession",
                success:function(data){
                   this.setState({
                       username:data.username
                   })
                }.bind(this)
            })
        },
        Logout(){
            ajax({
                type:"get",
                url:"/logout",
                success:function(data){
                     message.success('注销成功')
                    this.props.router.replace("Login")
            }.bind(this)
            })
        },
    render:function(){
        var info;
        if(this.state.username){info=<span>{this.state.username}<a style={fontStyle} onClick={this.Logout.bind(this)}> 注销</a></span>}
        else{
           info=<a href="#/Login" >登录</a>
        };
        var h1Style={
            fontSize:"20px",
            color:"#fff"
        };
        var fontStyle={
            fontSize:"18px",
            diplay:"block",
            height:"63px",
            lineHeight:"63px"
        };
        return <Header style={{backgroundColor:"#404040"}}>
            <Row type="flex" justify="space-between">
            <Col span={4}><h1 style={h1Style}>猫眼-微信-后台管理</h1></Col>
            <Menu theme="dark" mode="horizontal" selectedKeys={[this.state.current]} onClick={this.handleClick} >
            <Menu.Item key="reg"><a href="#/reg" style={fontStyle}>注册</a></Menu.Item>
            <Menu.Item key="login" style={fontStyle}>{info}</Menu.Item>
            </Menu>
            </Row>         
            </Header>
    }
})