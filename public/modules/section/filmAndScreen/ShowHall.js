import {ajax} from "tools";
import React from "react";
import {Table,Icon,Button,Select,InputNumber,Form,Input,message,Modal}from "antd";
const {Column,ColumnGroup}=Table;
const FormItem = Form.Item;
const InputGroup = Input.Group;
const Option = Select.Option;
const confirm =Modal.confirm;
class ShowHall extends React.Component{
    constructor(props){
        super(props);
        this.state={
            hallData:[]
        }
    }
    componentWillMount(){
        this.showHall()
    }
    showHall(){
        if(this.props.rooms){
            var newData=this.props.rooms;
            for(var i=0;i<newData.length;i++){
                newData[i].key=i;
            }
            this.setState({
                hallData:newData
            })
        }
       
    }
      del(){
        confirm({
            title: '确定删除该放映厅?',
            onOk() { },
            onCancel() {},
        });
    }
    render(){
        //  rowKey="this.props.data"
        return <Table  dataSource={this.state.hallData}>
                    <Column title="放映厅" dataIndex="name" key="name"/>
                    <Column title="放映时间" dataIndex="time" key="time"/>
                    <Column title="票价" dataIndex="price" key="price"/>
                    <Column title="操作" key="action" render={(text, record) => (
                    <span>
                        <Button icon="delete" type="danger" onClick={()=>{this.del(text)}}>删除该放映厅</Button>
                    </span>
                    )}/>
                </Table>
    }
}
export default Form.create()(ShowHall);