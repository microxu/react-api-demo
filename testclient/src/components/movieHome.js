import React from 'react';
import { HoCItems } from './items';
import { HoCFilteritem } from './filters';

import { Container, Row, Col, Image } from 'react-bootstrap';
const style = {
    top:'0',
    position:'fixed'
  };

export class MovieHome extends React.PureComponent {

    render() {
        const eventKeys = [{eveKeys:["ALL", "English", "Chinese"],variant:"success"}, {eveKeys:["ALL", "Comedy", "Adventure", "Drama"],variant:"info"}, {eveKeys:["ALL", "8", "5", "3"],variant:"dark"}];
        return (
            <Container>
                <Row >
                    <HoCFilteritem title="Language" name="lang" eventKeys={eventKeys[0]["eveKeys"]} variant={eventKeys[0]["variant"]}/>
                    <HoCFilteritem title="genres" name="genres" eventKeys={eventKeys[1]["eveKeys"]} variant={eventKeys[1]["variant"]}/>
                    <HoCFilteritem title="rating" name="rating" eventKeys={eventKeys[2]["eveKeys"]} variant={eventKeys[2]["variant"]}/>
                </Row>
                <HoCItems history={this.props.history} />
            </Container>
        );
    }
}

