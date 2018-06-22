import React from 'react';
import {connect} from 'react-redux';



class Ac extends React.Component {
    render() {
        return (
            <div>
                活动
            </div>
        );
    }
}


export default connect(
    // state=>({state:state.home}),
    // {
    //     // 方法
    // }
)(Ac)