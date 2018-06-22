import React from 'react';
import {connect} from 'react-redux';



class Home extends React.Component {
    render() {
        return (
            <div>
                首页
            </div>
        );
    }
}


export default connect(
    // state=>({state:state.home}),
    // {
    //     // 方法
    // }
)(Home)