import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Symbol from './Symbol';

import './globalstyles.css';

class Space extends Component {
    constructor(props) {
        super(props);
        this.state={
            symbol:''
        }
        this.makeMove = this.makeMove.bind(this);
    }

    makeMove() {
        this.setState({
            symbol:'x'
        })
        this.props.editGrid(this.props.pos);
    }

    render() {
        return (<Container onClick={() => this.makeMove()}className ="space border border-dark"><Symbol symbol={this.state.symbol}/></Container>)
    }
}

export default Space;