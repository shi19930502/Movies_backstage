import {ajax} from "tools";
import React from "react";
import Page from "./Page";
import {Table,Icon,Button,Select,InputNumber,Form,Input,message} from "antd";
const {Column,ColumnGroup} =Table;
const FormItem =Form.Item;
const InputGroup = Input.Group;
const Option = Select.Option;
class UsersList extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        this.props.show() 
    }
    del(e){
        ajax({
            type:"post",
            url:"students/del",
            data:{
                _id:e._id
            },
            success:function(data){
            message.success('删除成功')
                this.props.show()
            }.bind(this)
        })
    }
    render(){
        var data=this.props.data;
        var page=this.props.data.curpage;
        const pagination ={
            current:parseInt(this.props.data.curpage),
            total:data.total,
            pageSize:5,
            onChange:function(page){
                this.props.show(page);
            }.bind(this)
        }
        return <div> 
        <Table dataSource={this.props.data.rows} rowKey="_id" pagination={pagination} bordered>
            <Column title="姓名" dataIndex="username" key="username"/>
            <Column title="性别" dataIndex="gender" key="gender"/>
            <Column title="邮箱" dataIndex="email" key="email"/>
            <Column title="账号等级" dataIndex="privilege" key="privilege"/>
            <Column title="操作" key="action" render={(text, record) => (
               <span>
          <Button  icon="setting" onClick={()=>{this.props.updateModalOpen(text)}}>修改</Button>
          <span className="ant-divider" />
          <Button icon="delete" type="danger" onClick={()=>{this.del(text)}}>删除</Button>
        </span>
            )}/>
        </Table>
        </div>
    }
}
export default Form.create()(UsersList);
