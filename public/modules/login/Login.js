import React from "react";
import {ajax} from "tools";
import {Layout,Icon,Button,Input,Row,Modal,message,Col,Form} from "antd";
const {Content} = Layout;
const FormItem =Form.Item;
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            notice:{
                info:""
            }
        }
    }
    handleSubmit(){
             ajax({
                type:"get",
                url:"/users/find",
                data:{
                    username:this.props.form.getFieldValue('username'),
                    pwd:this.props.form.getFieldValue('password'),
                    findType:"exact",
                    addSession:1
                },
                success:function(data){
                if(data.length>0){
                    console.log(data.length)
                this.props.router.replace("Users")
                    }
                else{
                    message.error('登录失败',2)
                    console.log(data)
                }
                }.bind(this)
               })      
    }
    render(){
        const {getFieldDecorator} =this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        return <Content style={{backgroundColor:"#eee"}}>
                    <div style={{padding:"100px 0",margin:"0 240px",backgroundColor:"rgb(250,250,250)",borderRadius:"5px"}}>
                    <Row  type="flex" justify="center">
                        <Col span={8}>
                        <Form>
                        <FormItem {...formItemLayout}>
                            {getFieldDecorator('username', {rules: [{ required: true, message: '请输入用户名' }],})(<Input addonBefore={<Icon type="user"/>}  placeholder="username"/>)}
                         </FormItem>
                        <FormItem {...formItemLayout}>
                            {getFieldDecorator('password', {rules: [{ required: true, message: '请输入密码' }],})(<Input addonBefore={<Icon type="lock" />}  placeholder="password" type="password"/>)}
                        </FormItem>
                        <FormItem {...formItemLayout}>
                        <Button type="primary" onClick={this.handleSubmit.bind(this)}>Login</Button>  
                        </FormItem>
                        </Form>
                        </Col>
                    </Row>
                    </div>
            </Content>
    }
}
export default Form.create()(Login)