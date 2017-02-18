import React from "react";
import {ajax} from "tools";
import ShowScreen from "./ShowScreen";
import {Table,Icon,Button,Select,InputNumber,Form,Input,message}from "antd";
const {Column,ColumnGroup}=Table;
const FormItem = Form.Item;
const InputGroup = Input.Group;
const Option = Select.Option;
 class FilmAndScreenList extends React.Component{
     constructor(props){
         super(props);
     }
     componentWillMount(){
         this.props.show();
     }
     addScreen(text){
         console.log(this.props.data.rows)
     }
    render(){
        var data=this.props.data;
        var page=this.props.data.curpage;
        const pagination={
            current:parseInt(this.props.data.curpage),
            total:data.total,
            pageSize:5,
            onChange:function(page){
                this.props.show(page);
            }.bind(this)
        }
        return <div>
                    <Table expandedRowRender={record => <ShowScreen data={record._id}></ShowScreen>} bordered dataSource={this.props.data.rows} rowKey="_id" pagination={pagination}>
                        <Column title="中文名" dataIndex="cnname" key="cnname"/>
                        <Column title="英文名" dataIndex="enname" key="enname"/>
                        <Column title="类型" dataIndex="type" key="type"/>
                        <Column title="年代" dataIndex="year" key="year"/>
                        <Column title="时长" dataIndex="time" key="time"/>
                        <Column title="上映时间" dataIndex="uptime" key="uptime"/>
                        <Column title="上映区域" dataIndex="uparea" key="uparea"/>
                        <Column title="操作" key="action" render={(text, record) => (
                        <span>
                        <Button  icon="setting" onClick={()=>{this.addScreen(text)}}>增加影院</Button>
                        </span>
                    )}/>
                    </Table>
                </div>
    }
 }
 export default Form.create()(FilmAndScreenList);