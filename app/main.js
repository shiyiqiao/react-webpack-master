/**
 * Created by zeng on 2016/5/9.
 */
import React from "react";
import ReactDOM from "react-dom";
import "../fonts/serviceHall/iconfont.css";
import { Row,Col,Button} from 'antd';
import {NowTime} from './components/nowTime';
import {TypeSlider} from './components/slider';
import {Cards} from './components/cards';
import "../css/base.css"
import path from "path"
import { Input} from 'antd';

class App extends React.Component{
    constructor(){
        super();
        this.state={
            id:1
        }
    }
    _callback(id){
        this.setState(()=>{
            return {
                id:id
            }
        })
    }
    render(){
        return(
            <div className="index-body" id={this.state.id}>
                <header className="header clearfix">
                    <Row>
                        <Col push={15} span={9}>
                            <span className="iconfont color_01bae2 pull-left time-icon">&#xe706;</span>
                            <NowTime />
                            <div className="user pull-left">
                                <span className="iconfont color_01bae2 user-icon">&#xe688;</span>
                                <span className="userName">马处</span>
                            </div>
                            <Button className="pull-left out" type="primary" >退出</Button>
                        </Col>
                    </Row>
                    <div className="img-wrapper">
                        <div className="logo"></div>
                        <div className="text pull-right">
                            <div>
                                <span>专业</span><span>便捷</span><span>透明</span>
                            </div>
                            <div>
                                <span>规范</span><span>高效</span><span>公开</span>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="main-box">
                    <div className="operate clearfix">
                        <div className="pull-left types">
                            <TypeSlider typeId={this.state.id} callback={this._callback.bind(this)} source="http://localhost:63342/react-webpack-master/app/json/types.json"/>
                        </div>
                        <div className="search pull-right">
                            <div className="pull-left">
                                <Input placeholder="请输入服务编号或名称" />
                            </div>
                            <Button className="pull-right" type="primary" >查询</Button>
                        </div>
                    </div>
                    <Row className="container clearfix">
                        <Col className="leftContent pull-left" span={17}>
                            <Cards typeId={this.state.id} cardUrl="http://localhost:63342/react-webpack-master/app/json/cards.json"/>
                        </Col>
                        <Col className="rightContent pull-right" span={7}>
                            <div className="doing-task">
                                <div className="bottom-line">
                                    <div className="content-bottom-line">
                                        <span className="iconfont taskIcon">&#xe629;</span>
                                        <span className="pull-left taskText">工作待办</span>
                                    </div>
                                    <div className="content-items">
                                        <div className="item clearfix">
                                            <div className="pull-left">
                                                <div className="pull-left icon-wrapper color-34a6ff">
                                                    <span className="iconfont">&#xe63c;</span>
                                                </div>
                                                <span className="item-text">待办：</span>
                                            </div>
                                            <div className="pull-left color-34a6ff-text font-18">0</div>
                                        </div>
                                        <div className="item clearfix">
                                            <div className="pull-left">
                                                <div className="pull-left icon-wrapper color-44e2b7">
                                                    <span className="iconfont">&#xe63c;</span>
                                                </div>
                                                <span className="item-text">处理中：</span>
                                            </div>
                                            <div className="pull-left color-34a6ff-text font-18">0</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="done-task">
                                <div className="bottom-line">
                                    <div className="content-bottom-line">
                                        <span className="iconfont taskIcon">&#xe629;</span>
                                        <span className="pull-left taskText">办结历史</span>
                                    </div>
                                    <div className="content-items">
                                        <div className="item clearfix">
                                            <div className="pull-left">
                                                <div className="pull-left icon-wrapper color-34a6ff">
                                                    <span className="iconfont">&#xe62f;</span>
                                                </div>
                                                <span className="item-text">本人总计：</span>
                                            </div>
                                            <div className="pull-left color-34a6ff-text font-18">0</div>
                                        </div>
                                        <div className="item clearfix">
                                            <div className="pull-left">
                                                <div className="pull-left icon-wrapper color-44e2b7">
                                                    <span className="iconfont">&#xe62f;</span>
                                                </div>
                                                <span className="item-text">平台总计：</span>
                                            </div>
                                            <div className="pull-left color-34a6ff-text font-18">0</div>
                                        </div>
                                        <div className="item clearfix">
                                            <div className="pull-left">
                                                <div className="pull-left icon-wrapper color-a978ff">
                                                    <span className="iconfont">&#xe62f;</span>
                                                </div>
                                                <span className="item-text">**总计：</span>
                                            </div>
                                            <div className="pull-left color-34a6ff-text font-18">0</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('content')
);