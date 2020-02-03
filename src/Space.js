import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';

import './globalstyles.css';

class Space extends Component {
    constructor(props) {
        super(props);
        //this.state;
        this.makeMove = this.makeMove.bind(this);
    }

    makeMove() {
        console.log(this.props.pos);
        this.props.editGrid(this.props.pos);
    }

    render() {
        return (<Container onClick={() => this.makeMove()}className ="space border border-dark">
            
        </Container>)
    }
}

export default Space;