import React from "react";
import {Layout,Icon,Menu} from "antd";
const {Sider,Content} = Layout;
export default class Students extends React.Component{
    constructor(props){
        super(props);
        this.state={
            current:"users",
            collapsed:false,
            mode:'inline',
            spanWords:"inline-block",
            IconPic:"16px"
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
    onCollapse(collapsed){
        this.setState({
         collapsed,
         mode: collapsed ? 'vertical' : 'inline',
         spanWords: collapsed ? 'none' : 'inline-block',
         IconPic: collapsed ? '24px' : '16px',
        });
    }
    render(){
       var spanCss={
            display:this.state.spanWords
        }
        var IconCss={
           fontSize:this.state.IconPic
        }
        return <Layout>
            <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse.bind(this)}>
            <Menu theme="dark" mode={this.state.mode} defaultSelectedKeys={['users']} onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]} >
            <Menu.Item key="users"><Icon style={IconCss} type="team" /><span style={spanCss}>用户管理</span></Menu.Item>
            <Menu.Item key="informations"><Icon style={IconCss} type="book" /><span style={spanCss}>资讯管理</span></Menu.Item>
            <Menu.Item key="films"><Icon style={IconCss} type="video-camera" /><span style={spanCss}>电影管理</span></Menu.Item>
            <Menu.Item key="screenings"><Icon style={IconCss} type="scan" /><span style={spanCss}>院线管理</span></Menu.Item>
            <Menu.Item key="filmAndScreen"><Icon style={IconCss} type="switcher" /><span style={spanCss}>电影院线匹配管理</span></Menu.Item>
            <Menu.Item key="show"><Icon style={IconCss} type="area-chart" /><span style={spanCss}>正在热映管理</span></Menu.Item>
            <Menu.Item key="notshow"><Icon style={IconCss} type="dot-chart" /><span style={spanCss}>即将上映管理</span></Menu.Item>
            <Menu.Item key="hot"><Icon style={IconCss} type="bar-chart" /><span style={spanCss}>热播电影管理</span></Menu.Item>
            </Menu>
            </Sider>
            <Content style={{minHeight:"460px"}}>
           { this.props.children}
           </Content>
            </Layout>
    }
}