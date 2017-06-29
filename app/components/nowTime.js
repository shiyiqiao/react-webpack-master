/**
 * Created by Administrator on 2017/6/20 0020.
 */
import React from 'react'
 let getDateFun = ()=> {
    let obj={};
    let date = new Date();
    obj.year = date.getFullYear();//年
    obj.mouth = date.getMonth();//月
    obj.day = date.getDate();//日
    obj.week = date.getDay();//星期
    obj.time=date.toLocaleTimeString();//当前时间
    switch (obj.week){
        case 0: obj.week="星期日";break;
        case 1: obj.week="星期一";break;
        case 2: obj.week="星期二";break;
        case 3: obj.week="星期三";break;
        case 4: obj.week="星期四";break;
        case 5: obj.week="星期五";break;
        case 6: obj.week="星期六";break;
    }
    return obj;
};
//getInitialState 只能用在React.createClass里面
class NowTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = { obj: getDateFun() };
    }
    componentDidMount(){
        this.timer = setInterval(()=>{
            var obj = getDateFun();
            this.setState({
                year:obj.year,
                mouth:obj.mouth,
                day:obj.day,
                week:obj.week,
                time:obj.time
            });
        },1000)
    }
    render(){
        return (
            <div className="nowTime pull-left">
                <span className="timeSpan">{this.state.year} </span> 年
                <span className="timeSpan"> {this.state.mouth} </span>月
                <span className="timeSpan"> {this.state.day} </span> 日
                <span className="week"> {this.state.week} </span>
                <span className="timeSpan"> {this.state.time} </span>
            </div>
        )
    }
}
module.exports = {NowTime};