import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import asyncComponent from '../utils/asyncComponent';





const Index = asyncComponent(() => import("../pages/home"));
const Zixun = asyncComponent(() => import("../pages/zixun"));
const Ac = asyncComponent(() => import("../pages/actions"));
const My = asyncComponent(() => import("../pages/my"));



// react-router4 不再推荐将所有路由规则放在同一个地方集中式路由，子路由应该由父组件动态配置，组件在哪里匹配就在哪里渲染，更加灵活
export default class RouteConfig extends Component{
    render(){
        return(
            <Switch>
                <Route exact path="/index" component={Index} />
                <Route  path="/zx" component={Zixun} />
                <Route  path="/ac" component={Ac} />
                <Route  path="/my" component={My} />
                <Redirect to="/index" />
            </Switch>
        )
    }
}