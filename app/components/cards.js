/**
 * Created by Administrator on 2017/6/24.
 */
import $ from "jquery";
import React from 'react';
import {Carousel,Row,Col} from "antd";
let resultArr = (arr) =>{
    var temp = []; //临时数组
    var result = [];//二维数组
    var k = 0;//二维数组的下标
    for(var i = 0; i<arr.length; ++i){
        if(i%8 == 0){
            temp = [];
            for(var j = 0; j<8; ++j){
                if(arr[i+j] == undefined){
                    continue;
                } else{
                    temp[j] = arr[i+j];
                }
            }
            result[k] = temp;
            k++;
        }
    }
    return result;
}
class Cards extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list:<div></div>,
            id:this.props.typeId
        };
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.typeId!=this.state.id){
            this.setState({id:nextProps.typeId})
        }
    }
    componentDidMount(){
        this.serverRequestCards = $.get(this.props.cardUrl,(result) => {
            this.setState({list:result.cards});
        });
    }
    componentWillUnmount() {
        this.serverRequestCards.abort();
    }
    render() {
        console.log(`${this.state.id}c组件`);
        var arr;
        let settings={
            //vertical:true,
            dots:true,
            infinite: true,
            speed: 500,
            slidesToShow:1,
            slidesToScroll: 1,
            //dotsClass:'dotsClass',
            swipe:true
        };
        if(this.state.list.length>0){
            var newArr = resultArr(this.state.list);
            arr = newArr.map((items, i)=> {
                return (
                    <Row key={i} className="clearfix cards">
                        {
                            items.map((item,n)=>{
                                return(
                                    <Col key={n} span={6}>
                                        <div className="card">
                                            <div style={{padding: '10px 10px 5px 10px'}}>
                                                <div className="bg-img">
                                                    <img src={item.imgUrl} />
                                                </div>
                                            </div>
                                            <div className="ID">{item.id}</div>
                                            <Row className="btns">
                                                <Col span={12} className="name">{item.name}</Col>
                                                <Col span={12}>{item.detail}</Col>
                                            </Row>
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    </Row>
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
module.exports={Cards};