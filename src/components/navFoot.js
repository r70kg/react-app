import {TabBar} from 'antd-mobile';
import React from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import {navList} from './navArr'   // 底部菜单数组
import {footShow} from '../utils/footShow'

class NavFoot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'redTab',
            hidden: false,
            fullScreen: false,
            list: []
        };
    }

    render() {

        let _show = footShow()

        return (
            <div style={{
                position: 'fixed',
                width: '100%',
                bottom: 0,
                display:_show
            }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                >
                    {
                        navList.map(v => (
                            <TabBar.Item
                                title={v.title}
                                key="Life"
                                icon={<div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
                                }}
                                />
                                }
                                selectedIcon={<div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                                }}
                                />
                                }
                                selected={
                                    this.props.location.pathname === v.path
                                }
                                onPress={() => {
                                    this.props.history.push(v.path)
                                }}
                            >
                            </TabBar.Item>
                        ))
                    }
                </TabBar>
            </div>
        );
    }
}


export default withRouter(connect(
    // state=>({state:state.home}),
    // {
    //     // 方法
    // }
)(NavFoot))