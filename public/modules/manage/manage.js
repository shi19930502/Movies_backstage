import React from "react";
import {Layout,Icon,Menu} from "antd";
const {Sider,Content} = Layout;
export default class Students extends React.Component{
    constructor(props){
        super(props);
        this.state={
            current:"users",
            collapsed:false,
        }
    }
    ComponentWillMount(){
    this.props.router.replace(e.key)
    }
    handleClick(e){
        this.setState({
            current:e.key
        })
        this.props.router.replace(e.key)
    }
    render(){       
        return <Layout>
            <Sider collapsible >
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['users']} onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]} >
            <Menu.Item key="users"><Icon type="team" />用户管理</Menu.Item>
            <Menu.Item key="informations"><Icon type="user" />资讯管理</Menu.Item>
            <Menu.Item key="films"><Icon type="solution" />电影管理</Menu.Item>
            <Menu.Item key="screenings"><Icon type="solution" />院线管理</Menu.Item>
            <Menu.Item key="filmAndScreen"><Icon type="solution" />电影院线匹配管理</Menu.Item>
            <Menu.Item key="show"><Icon type="solution" />正在热映管理</Menu.Item>
            <Menu.Item key="notshow"><Icon type="solution" />即将上映管理</Menu.Item>
            <Menu.Item key="hot"><Icon type="solution" />热播电影管理</Menu.Item>
            </Menu>
            </Sider>
            <Content style={{minHeight:"460px"}}>
           { this.props.children}
           </Content>
            </Layout>
    }
}