import React from 'react';
import {connect} from 'react-redux';



class Zixun extends React.Component {
    render() {
        return (
            <div>
                资讯
            </div>
        );
    }
}


export default connect(
    // state=>({state:state.home}),
    // {
    //     // 方法
    // }
)(Zixun)