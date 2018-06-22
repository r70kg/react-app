import React from 'react';
import {connect} from 'react-redux';

class My extends React.Component {
    render() {
        return (
            <div>
                我的
            </div>
        );
    }
}


export default connect(
    // state=>({state:state.home}),
    // {
    //     // 方法
    // }
)(My)