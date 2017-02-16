import React from "react";
import {ajax} from "tools";
import {Layout,Icon,Button,Input,Checkbox,Row,Col,Form,Modal} from "antd";
const {Content} = Layout;
const FormItem =Form.Item;
class Reg extends React.Component{
    constructor(props){
        super(props);
    }
    isRepeat(rule,value,callback){
        ajax({
            type:"get",
            url:"/users/find",
            data:{
                username:value,
                findType:"exact"
            },
            success:function(data){
                console.log(data)
                if(data.length>0){
                    callback('重名')
                }
                else{
                    callback()
                }
            }
        })
    }
    checkPassword(rule, value, callback) {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次密码输入不一致');
    } else {
      callback();
        }
    }  
    handleSubmit() {
        this.props.form.validateFields(function(err,values){
            if(!err){
                    ajax({
                    type:"post",
                    url:"/users/add",
                    data:values,
                    success:function(data){
                        Modal.success({
                            title:"注册成功！"
                        })
                      this.props.router.replace("Login")
                    }.bind(this)
                })  
            }  
        }.bind(this))
  }
    render(){
        const {getFieldDecorator} =this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };  
        const tailFormItemLayout = {
            wrapperCol: {
            span: 14,
            offset: 6,
      },
    };
     return <Content style={{backgroundColor:"#eee"}}>
                <div style={{padding:"100px 0",margin:"0 240px",backgroundColor:"rgb(250,250,250)",borderRadius:"5px"}}>
                 <Row  type="flex" justify="center">
                        <Col span={8}>
                    <Form>
                    <FormItem {...formItemLayout} label="用户名" hasFeedback>
                         {getFieldDecorator('username', {rules: [{ required: true, message: '请输入用户名' },{pattern:/^\w{3,16}$/,message:"3-16位字母或数字"},{validator: this.isRepeat.bind(this)}],})(<Input addonBefore={<Icon type="user" />} />)}
                    </FormItem>
                    <FormItem {...formItemLayout} label="密码" hasFeedback >
                         {getFieldDecorator('password', {rules: [{ required: true, message: '请输入密码' },{pattern:/^\w{3,12}$/,message:"3-12位字母或数字"}],})(<Input type="password" addonBefore={<Icon type="lock" />} />)}
                    </FormItem>
                    <FormItem {...formItemLayout} label="确认密码" hasFeedback>
                         {getFieldDecorator('confirm', {rules: [{ required: true, message: '请输入确认密码' }, {validator: this.checkPassword.bind(this)}],})(<Input type="password" addonBefore={<Icon type="lock" />} />)}
                    </FormItem>
                    <FormItem {...formItemLayout} label="邮箱" hasFeedback>
                         {getFieldDecorator('mail', {rules: [{ required: true, message: '请输入邮箱' },{type: 'email', message: "请输入正确邮箱",}],})(<Input addonBefore={<Icon type="mail" />} />)}
                    </FormItem>
                    <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
                        {getFieldDecorator('agreement', {
                            valuePropName: 'checked',
                        })(
                            <Checkbox>我同意注册<a>协议</a></Checkbox>
                        )}
                    </FormItem>
                    <FormItem {...tailFormItemLayout}>
                    <Button  type="primary" onClick={this.handleSubmit.bind(this)} size="large">Reg</Button>                                        
                    </FormItem>
                    </Form>
                       </Col>
                    </Row>
                </div>
            </Content>
    }
};
export default Form.create()(Reg);