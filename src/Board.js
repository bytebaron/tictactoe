import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Space from './Space';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './globalstyles.css';

class Board extends Component {
    constructor(props) {
        super(props);
        //this.state;
    }

    render() {
        return (<Container fluid>
            <Row noGutters>
                <Col md="auto" className="col-edit"><Space /></Col>
                <Col md="auto" className="col-edit"><Space /></Col>
                <Col md="auto" className="col-edit"><Space /></Col>
            </Row>
            <Row noGutters>
                <Col md="auto" className="col-edit"><Space /></Col>
                <Col md="auto" className="col-edit"><Space /></Col>
                <Col md="auto" className="col-edit"><Space /></Col>
            </Row>
            <Row noGutters>
                <Col md="auto" className="col-edit"><Space /></Col>
                <Col md="auto" className="col-edit"><Space /></Col>
                <Col md="auto" className="col-edit"><Space /></Col>
            </Row>
        </Container>)
    }
}

export default Board;
