import {ajax} from "tools";
import React from "react";
import FilmAndScreenList from "./FilmAndScreenList";
export default class FilmAndScreen extends React.Component {
    constructor(props){
        super(props);
        this.state={
            filmsData:[],
        }
    }
    componentWillMount(){
        this.show();
    }
    show(cnname){
        if(cnname){
             ajax({
            type:"get",
            url:"films/find",
            data:{
                cnname:cnname
            },
            success:function(data){
                  for(var i=0;i<data.length;i++){
                    data[i].key=i;
                }
                this.setState({
                    filmsData:data
                });
            }.bind(this)
        })
    }
    else{
          ajax({
            type:"get",
            url:"films/find",
            success:function(data){
                  for(var i=0;i<data.length;i++){
                    data[i].key=i;
                }
                this.setState({
                    filmsData:data
                });
            }.bind(this)
        })
    }
      
    }
    render(){
        return <div>
                <FilmAndScreenList show={this.show.bind(this)} data={this.state.filmsData}></FilmAndScreenList>
               </div>
    }
}