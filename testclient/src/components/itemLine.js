import React from 'react';
import { addCounter, removeCounter } from '../actionTypes';
//import { selectnumber } from './selector';
import { connect } from 'react-redux';
import { Button, Badge, Card, Col, Row ,Image} from 'react-bootstrap';

const style = {
    border: 0,
    margin: 0,
    cursor:'pointer' 
  };
export class ItemLine extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    CallDetails=()=>{ 
    this.props.OnClickBack()
    }
    render() {
        return (
            //<td>
                <Image style={style} src={this.props.image} onClick={this.CallDetails} />
            //</td>

        );
    }
}
/*const mapStateToProps = (state, ownProps) => {
    return {
        data: selectnumber(state, ownProps)
    };
};

export const HoCCounterItem = connect(
    mapStateToProps, {
        addCounter,
        removeCounter
    }
)(ItemLine);*/