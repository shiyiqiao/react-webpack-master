/**
 * Created by Administrator on 2017/6/22 0022.
 */
import $ from "jquery";
import React from 'react';
import {Carousel} from "antd";
let cardsResult={};
class TypeSlider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list:<div></div>,
            clickIndex:0,
            id:this.props.typeId
        };
    }
    handleClick(i,id,e) {
        this.props.callback(id);//子组件调用父组件的方法
        this.setState((prevState, props)=>{
            return {
                    clickIndex:i,
                    id:id
                    };
        })
    }
    componentDidMount(){
        this.serverRequestTypes = $.get(this.props.source,(result) => {
            this.setState({list:result.arr});
        });
    }
    componentWillUnmount() {
        this.serverRequestTypes.abort();
    }
    render() {
        var arr;
        let settings={
            arrows:true,
            dots:false,
            infinite: true,
            speed: 500,
            slidesToShow:6,
            slidesToScroll: 1,
        };
        console.log(`${this.state.id}s组件`)
        if(this.state.list.length>0){
            arr = this.state.list.map((item, i)=> {
                return (
                    <div key={i}  ref={item.id} onClick={this.handleClick.bind(this,i,item.id)} id={item.id}
                         className ={i===this.state.clickIndex?'isActive':''}>
                        {item.name}</div>
                )
            });
        }else{
            arr=<div></div>;
        }
        return (
            <Carousel {...settings}>{arr}</Carousel>
        );
    }
}
module.exports = {TypeSlider};
