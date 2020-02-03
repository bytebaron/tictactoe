import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Space from './Space';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import './globalstyles.css';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            1:'', 2:'', 3:'',
            4:'', 5:'', 6:'',
            7:'', 8:'', 9:'',
        }
        this.editGrid = this.editGrid.bind(this);
    }

    editGrid(pos) {
        console.log(pos);
        this.setState({
            [pos]:'x',
        })
    }

    render() {
        return (<Container fluid>
            <Row noGutters>
                <Col md="auto" className="col-edit"><Space pos={1} editGrid={this.editGrid} /></Col>
                <Col md="auto" className="col-edit"><Space pos={2} editGrid={this.editGrid}/></Col>
                <Col md="auto" className="col-edit"><Space pos={3} editGrid={this.editGrid}/></Col>
            </Row>
            <Row noGutters>
                <Col md="auto" className="col-edit"><Space pos={4} editGrid={this.editGrid}/></Col>
                <Col md="auto" className="col-edit"><Space pos={5} editGrid={this.editGrid}/></Col>
                <Col md="auto" className="col-edit"><Space pos={6} editGrid={this.editGrid}/></Col>
            </Row>
            <Row noGutters>
                <Col md="auto" className="col-edit"><Space pos={7} editGrid={this.editGrid}/></Col>
                <Col md="auto" className="col-edit"><Space pos={8} editGrid={this.editGrid}/></Col>
                <Col md="auto" className="col-edit"><Space pos={9} editGrid={this.editGrid}/></Col>
            </Row>
        </Container>)
    }
}

export default Board;
