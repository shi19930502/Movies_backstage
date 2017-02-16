import {ajax} from "tools";
import React from "react";
import Add from "./Add";
import Update from "./Update";
import Search from "./Search";
import UsersList from "./UsersList";
import {Layout,Icon,Button,Row,Col,Menu} from "antd";
const {Content,Sider} = Layout;
export default class Users extends React.Component{
    constructor(props){
        super(props);
        this.state={
               studentsData:[],
               updateModal: false,
               thisStudent:{}
        }
    }
    componentWillMount(){
        this.show();
    }
    show(page){
        ajax({
            type:"get",
            url:"users/find",
            data:{
                page:page,
                rows:5
            },
            success:function(data){
                this.setState({
                    studentsData:data
                });
            }.bind(this)
        })
    }
    updateModalOpen(e){
         this.setState({
        updateModal: true,
        thisStudent:e
    })
    }
    handleCancel() {
        this.setState({
        updateModal: false,
        })
    }
    render(){       
        return <div>
                <Add show={this.show.bind(this)}></Add>
                <Update show={this.show.bind(this)} thisStudent={this.state.thisStudent}  updateModal={this.state.updateModal} handleCancel={this.handleCancel.bind(this)}></Update>
                <UsersList show={this.show.bind(this)} data={this.state.studentsData} updateModalOpen={this.updateModalOpen.bind(this)}></UsersList>
                </div>
    }
}