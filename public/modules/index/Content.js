import React from "react";
import Header from "./Header";
import Footer from "./Footer";
export default React.createClass({
    render:function(){
        return <div>
                <Header router={this.props.router}></Header>
                {this.props.children}
                <Footer></Footer>
                </div>
    }
})