import React from 'react';
import { addFilter } from '../actionTypes';
//import { selectnumber } from './selector';
import { connect } from 'react-redux';
import { ButtonToolbar, DropdownButton, Dropdown, Container, Row, Col, Image, Alert } from 'react-bootstrap';


class Filteritem extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state={
           title:this.props.title
        }

    }
    handleSelect= (evt,eventKey) =>{
        /*{ key: match[1], value: match[2] };*/
        this.props.addFilter({key:this.props.name,value:evt})
        this.setState({title:evt});
    }

    render() {
        return (
            <DropdownButton id="dropdown-basic-button" title={this.state.title} variant={this.props.variant}>

                {this.props.eventKeys.map((ele) => {
                        return <Dropdown.Item eventKey={ele} onSelect={this.handleSelect} >{ele}</Dropdown.Item>
                      })}    

            </DropdownButton>

        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        filter:state.filter
    };
};

export const HoCFilteritem = connect(
    mapStateToProps,{
        addFilter
    }
)(Filteritem);
