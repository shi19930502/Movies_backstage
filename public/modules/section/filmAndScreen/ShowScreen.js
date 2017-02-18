import {ajax} from "tools";
import React from "react";
import ShowHall from "./ShowHall";
import {Table,Icon,Button,Select,InputNumber,Form,Input,message}from "antd";
const {Column,ColumnGroup}=Table;
const FormItem = Form.Item;
const InputGroup = Input.Group;
const Option = Select.Option;
class ShowScreen extends React.Component{
      constructor(props){
         super(props);
         this.state={
             screenName:[]
         }
     }
  componentWillMount(){
        this.showName();
    }
    componentWillReceiveProps(){
        this.showName();
    }
    addHall(text){
        console.log(this.state.screenName)
        // console.log(this.props.data)
    }
    del(){

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
        return <Table expandedRowRender={record => <ShowHall  rooms={record.rooms}></ShowHall>} dataSource={this.state.screenName} rowKey="_id">
                    <Column width='70%' title="影院" dataIndex="screenings.name" key="screenings.name"/>
                    <Column title="操作" key="action" render={(text, record) => (
                    <span>
                        <Button  icon="setting" onClick={()=>{this.addHall(text)}}>增加放映厅</Button>
                        <span className="ant-divider" />
                        <Button icon="delete" type="danger" onClick={()=>{this.del(text)}}>删除该影院</Button>
                    </span>
                    )}/>
                </Table>
    }
}
export default Form.create()(ShowScreen);