import React from 'react';
import { connect } from 'react-redux';
import { getMemoList } from '../../actions';

class List extends React.Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getMemoList());
    }
    
    render() {
        return (
            <div>
                {this.props.list}
            </div>
        )
    }
};


const mapStateToProps = (state) => {
    console.log(state);
    return {
        onRequest: state.memoList.onRequest,
        list: state.memoList.list
    }
}

export default connect(mapStateToProps)(List);
