import {ajax} from "tools";
import React from "react";
import ShowHall from "./ShowHall";
import {Table,Icon,Button,Select,Form,Input,message,Modal}from "antd";
const {Column,ColumnGroup}=Table;
const FormItem = Form.Item;
const InputGroup = Input.Group;
const Option = Select.Option;
const confirm =Modal.confirm;
class ShowScreen extends React.Component{
      constructor(props){
         super(props);
         this.state={
             screenName:[],
             visible:false,
             confirmLoading:false
         }
     }
  componentWillMount(){
        this.showName();
    }
    componentWillReceiveProps(){
        this.showName();
    }
    addHall(text){
        this.setState({
            visible:true
        })
    }
    handleOk(){
        this.setState({
            confirmLoading:true
        })
        setTimeout(() => {
            this.setState({
            visible: false,
            confirmLoading: false,
             });
        }, 800);
    }
    handleCancel(){
          this.setState({
            visible:false
        })
    }
    del(){
         confirm({
    title: '确定删除该院线?',
    onOk() {
      
    },
    onCancel() {},
  });
    }
     showName(){
         var newData=this.props.data;
         ajax({
             type:"get",
             url:"filmAndScreen/find",
             data:{
                "films.$id":newData,
                 submitType:"findJoin",
                 ref:"screenings"
             },
             success:function(data){
                for(var i=0;i<data.length;i++){
                 data[i].key=i;
                 }
                this.setState({
                    screenName:data
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
        return <div>
        <Table expandedRowRender={record => <ShowHall  rooms={record.rooms}></ShowHall>} dataSource={this.state.screenName} rowKey="_id">
                    <Column width='70%' title="影院" dataIndex="screenings.name" key="screenings.name"/>
                    <Column title="操作" key="action" render={(text, record) => (
                    <span>
                        <Button  icon="setting" onClick={()=>{this.addHall(text)}}>增加放映厅</Button>
                        <span className="ant-divider" />
                        <Button icon="delete" type="danger" onClick={()=>{this.del(text)}}>删除该影院</Button>
                    </span>
                    )}/>
                </Table>
                <Modal title="增加影院" visible={this.state.visible} onOk={this.handleOk.bind(this)} onCancel={this.handleCancel.bind(this)} confirmLoading={this.state.confirmLoading}>
   <Form>
       <FormItem label="放映厅" {...formItemLayout}>
            {getFieldDecorator('name')(<Input/>)}
        </FormItem>
        <FormItem label="时间" {...formItemLayout}>
            {getFieldDecorator('time')(<Input placeholder="格式  20:00"/>)}
        </FormItem>
        <FormItem label="价格" {...formItemLayout}>
            {getFieldDecorator('price')(<Input/>)}
        </FormItem>
         </Form>
                </Modal>
            </div>     
    }
}
export default Form.create()(ShowScreen);