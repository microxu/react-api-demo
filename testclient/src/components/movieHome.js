import React from 'react';
import { HoCItems } from './items';
import { HoCFilteritem } from './filters';

import { Container, Row, Col, Image } from 'react-bootstrap';
const style = {
    "line-height": '60px',
    background: 'Black',
    position: 'fixed',
    width: '100%',
    top:'0'
};

export class MovieHome extends React.PureComponent {

    render() {
        const eventKeys = [{ eveKeys: ["ALL", "English", "Chinese"], variant: "success" }, { eveKeys: ["ALL", "Comedy", "Adventure", "Drama"], variant: "info" }, { eveKeys: ["ALL", "8", "5", "3"], variant: "dark" }];
        return (
            <div style={{margin:0,padding:0}}>
                <div style={style}>
                    <div style={{ float: 'left' }}>
                        <HoCFilteritem title="Language" name="lang" eventKeys={eventKeys[0]["eveKeys"]} variant={eventKeys[0]["variant"]} />
                    </div>
                    <div style={{ float: 'left' }}>
                        <HoCFilteritem title="genres" name="genres" eventKeys={eventKeys[1]["eveKeys"]} variant={eventKeys[1]["variant"]} />
                    </div>
                    <div style={{ float: 'left' }}>
                        <HoCFilteritem title="rating" name="rating" eventKeys={eventKeys[2]["eveKeys"]} variant={eventKeys[2]["variant"]} />
                    </div>
                </div>
                <div style={{"margin-top":'60px'}}>
                    <HoCItems history={this.props.history} />
                </div>
            </div>
        );
    }
}

