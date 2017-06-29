/**
 * Created by Administrator on 2017/6/24.
 */
import $ from "jquery";
import React from 'react';
import {Carousel} from "antd";
let resultArr = (arr) =>{
    var temp = []; //临时数组
    var result = [];//二维数组
    var k = 0;//二维数组的下标
    for(var i = 0; i<arr.length; ++i){
        if(i%8 == 0){
            b = [];
            for(var j = 0; j<8; ++j){
                if(arr[i+j] == undefined){
                    continue;
                } else{
                    b[j] = arr[i+j];
                }
            }
            result[k] = b;
            k++;
        }
    }
    return result;
};
class Cards extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list:<div></div>,
        };
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
        var arr;
        let settings={
            //vertical:true,
            dots:true,
            infinite: true,
            speed: 500,
            slidesToShow:1,
            slidesToScroll: 1,
        };
        if(this.state.list.length>0){
            //将this.state.list变成二维数组
            arr=<div></div>;
            //var newArr = resultArr(this.state.list);
            /*arr = newArr.map((items, m)=> {
                return (
                    <div key={m}>
                        {
                            items.map((item,n)=>{
                                return <div>item.name</div>
                            })
                        }
                    </div>
                    )
            });*/
        }else{
            arr=<div></div>;
        }
        return (
            <div> {...settings}>{arr}</div>
        );
    }
}
module.exports={Cards};