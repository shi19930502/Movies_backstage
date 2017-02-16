import {ajax} from "tools";
import React from "react";
import {Modal,Button,Input,InputNumber,Form,Select,Icon} from "antd";
const FormItem =Form.Item;
const InputGroup = Input.Group;
const Option = Select.Option;
class Add extends React.Component{
    constructor(props){
        super(props);
          this.state={
            visible: false
        }
    }
    showModal() {
        this.setState({
        visible: true,
        });
    }
    handleOk() {
       ajax({
           type:"post",
           url:"students/add",
           data:this.props.form.getFieldsValue(),
           success:function(){
                 Modal.success({
                            title:"增加成功"
                        })
               this.setState({
                   visible:false
               });
               this.props.show();
           }.bind(this)
       })
    }
    handleCancel(e) {
        this.setState({
        visible: false,
        });
    }
    render(){
         const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };  
        const {getFieldDecorator} =this.props.form;
        return <div>
            <Button type="primary" size="large" onClick={this.showModal.bind(this)} style={{margin:"5px"}}>增加学生</Button>
            <Modal title="增加学生" visible={this.state.visible}
          onOk={this.handleOk.bind(this)} onCancel={this.handleCancel.bind(this)}>
         <Form>
        <FormItem label="姓名" {...formItemLayout}>
            {getFieldDecorator('name')(<Input/>)}
        </FormItem>
        <FormItem label="年龄" {...formItemLayout}>
            {getFieldDecorator('age')(<InputNumber/>)}
        </FormItem>
        <FormItem label="性别" {...formItemLayout}>
        {getFieldDecorator('sex')( 
            <Select defaultValue="男">
            <Option value="男">男</Option>
            <Option value="女">女</Option>
        </Select>)}
        </FormItem>
        <FormItem label="班级" {...formItemLayout}>
            {getFieldDecorator('class')(<Input/>)}
        </FormItem>
         </Form>
        </Modal>
            </div>
    }
}
export default Form.create()(Add)