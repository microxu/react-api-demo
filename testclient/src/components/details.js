import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { ButtonToolbar, Badge, Button, Container, Row, Col, Image } from 'react-bootstrap';
import { fetchDetailSaga } from '../actionTypes';
class Detail extends React.PureComponent {
    componentDidMount() {
            // this.props.fetchDetailSaga(this.props.location.state.title);
            this.props.fetchDetailSaga(this.props.match.params.title);            
    }
    render() {

        return (
            <Fragment>
                <Container>
                    <Row>
                        <h1>
                            <Badge variant="secondary">{this.props.detail.name}</Badge>
                        </h1>
                    </Row>
                    <Row>
                        <ButtonToolbar>
                            <Button variant="light">Main</Button>
                            <Button variant="light">Episodes</Button>
                            <Button variant="light">Cast</Button>
                            <Button variant="light">Crew</Button>
                            <Button variant="light">Characters</Button>
                            <Button variant="light">Gallery</Button>
                            <Button variant="light">New</Button>
                        </ButtonToolbar>
                    </Row>
                    <Row>
                        <Col xs={6} md={4}>
                        {JSON.stringify(this.props.detail)!="{}" && <Image src={this.props.detail.image["medium"].toString()} rounded />} 
                        </Col>
                        <Col xs={6} md={4}>
                        <div dangerouslySetInnerHTML = {{ __html: this.props.detail.summary}}></div>
                        </Col>
                        <Col xs={6} md={4}>
                            <Row>
                                <h2>
                                    <Badge variant="light">{this.props.detail.name}</Badge>
                                </h2>
                            </Row>
                            <Row>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        detail: state.detail
    };
};

export const HoCDetail = connect(
    mapStateToProps, {
        fetchDetailSaga
    }
    )(Detail)