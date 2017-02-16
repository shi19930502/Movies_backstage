import {ajax} from "tools";
import React from "react";
import {} from "antd";
import {Button,Modal,Select,InputNumber,Form,Input} from "antd";
const FormItem =Form.Item;
const InputGroup = Input.Group;
const Option = Select.Option;
class Update extends React.Component{
    constructor(props){
        super(props);
    }
    handleOk() {
        var values=this.props.form.getFieldsValue();
        values._id=this.props.thisStudent._id;
        ajax({
            type:"post",
            url:"/students/update",
            data:values,
            success:function(){
                this.props.show()
                this.props.handleCancel()
                Modal.success({
                    title:"修改成功"
                })
            }.bind(this)
        })
    }
    render(){
          const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        const {getFieldDecorator} =this.props.form;
        return <Modal title="修改信息" visible={this.props.updateModal}
          onOk={this.handleOk.bind(this)} onCancel={this.props.handleCancel}>
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
    }
}
export default Form.create(
    {
    mapPropsToFields(props){
        return {
            name:{value:props.thisStudent.name},
            age:{value:props.thisStudent.age},
            sex:{value:props.thisStudent.sex},
            class:{value:props.thisStudent.class},
        }
    }
}
)(Update)