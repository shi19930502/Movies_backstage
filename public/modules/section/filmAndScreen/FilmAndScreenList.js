import React from "react";
import {ajax} from "tools";
import ShowScreen from "./ShowScreen";
import {Table,Icon,Button,Select,InputNumber,Form,Input,message,Modal}from "antd";
const {Column,ColumnGroup}=Table;
const FormItem = Form.Item;
const InputGroup = Input.Group;
const Option = Select.Option;
 class FilmAndScreenList extends React.Component{
     constructor(props){
         super(props);
         this.state={
        visible:false,
        confirmLoading:false,
        children:[]
         }
     }
     componentWillMount(){
         this.props.show();
     }
     addScreen(text){
         ajax({
             type:"get",
             url:"screenings/find",
                success:function(data){
                    var getScreenName=[];
                    var children=[];
                    for(var i=0;i<data.length;i++){
                        getScreenName.push(data[i].name)
                    }
                    for(let i=0;i<getScreenName.length;i++){
                        children.push(<Option key={text._id+getScreenName[i]} value={getScreenName[i]}>{getScreenName[i]}</Option>)
                    }
                    this.setState({
                        children:children
                    })
                }.bind(this)
         })
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
    handleChange(e){
        console.log(e)
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
                    <Table expandedRowRender={record => <ShowScreen visible={this.state.visible} data={record._id}></ShowScreen>} bordered dataSource={this.props.data.rows} rowKey="_id" pagination={pagination}>
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
                    <Modal title="增加影院" visible={this.state.visible} onOk={this.handleOk.bind(this)} onCancel={this.handleCancel.bind(this)} confirmLoading={this.state.confirmLoading}>
                    <Select onChange={this.handleChange}  size="large" style={{width:400}} placeholder="选择需要增添的院线">
                  {this.state.children}
                    </Select>
                    </Modal>
                    
                </div>
    }
 }
 export default Form.create()(FilmAndScreenList);