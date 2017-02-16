import React from "react";
export default class Page extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div>
            <a>上一页</a>
            <a>1</a>
            <a>2</a>
            <a>3</a>
            <a>下一页</a>
            </div>
    }
}