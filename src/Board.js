import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Space from './Space';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import './globalstyles.css';

/*
- Check for win/draw conditions
- Do something better than alert for addressing an illegal move 
*/

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            1:'', 2:'', 3:'',
            4:'', 5:'', 6:'',
            7:'', 8:'', 9:'',
            currentPlayer: 'x'
        }
        this.editGrid = this.editGrid.bind(this);
        this.switchPlayer = this.switchPlayer.bind(this);
        this.checkSpaceVacant = this.checkSpaceVacant.bind(this);
    }

    editGrid(pos) {
        if(this.checkSpaceVacant(pos)) {
            this.setState({
                [pos]: this.state.currentPlayer,
            }, this.switchPlayer())
        } else {
            alert("This turn is not legal, please try again.");
        }
    }
    
    checkSpaceVacant(pos) {
        console.log(this.state[pos]);
        if(this.state[pos]) {
            return false; 
        } else {
            return true;
        }
    }

    switchPlayer() {
        if(this.state.currentPlayer == 'x') {
            this.setState({
                currentPlayer: 'o'
            })
        } else {
            this.setState({
                currentPlayer: 'x'
            })
        }
    }

    render() {
        return (<Container fluid>
            <Row noGutters>
                <Col md="auto" className="col-edit"><Space pos={1} editGrid={this.editGrid} symbol={this.state[1]}/></Col>
                <Col md="auto" className="col-edit"><Space pos={2} editGrid={this.editGrid} symbol={this.state[2]}/></Col>
                <Col md="auto" className="col-edit"><Space pos={3} editGrid={this.editGrid} symbol={this.state[3]}/></Col>
            </Row>
            <Row noGutters>
                <Col md="auto" className="col-edit"><Space pos={4} editGrid={this.editGrid} symbol={this.state[4]}/></Col>
                <Col md="auto" className="col-edit"><Space pos={5} editGrid={this.editGrid} symbol={this.state[5]}/></Col>
                <Col md="auto" className="col-edit"><Space pos={6} editGrid={this.editGrid} symbol={this.state[6]}/></Col>
            </Row>
            <Row noGutters>
                <Col md="auto" className="col-edit"><Space pos={7} editGrid={this.editGrid} symbol={this.state[7]}/></Col>
                <Col md="auto" className="col-edit"><Space pos={8} editGrid={this.editGrid} symbol={this.state[8]}/></Col>
                <Col md="auto" className="col-edit"><Space pos={9} editGrid={this.editGrid} symbol={this.state[9]}/></Col>
            </Row>
        </Container>)
    }
}

export default Board;
