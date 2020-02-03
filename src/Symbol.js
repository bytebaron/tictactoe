import React, {Component} from 'react';

import './globalstyles.css';

class Symbol extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return (<p className="symbol">{this.props.symbol}</p>)
    }
}

export default Symbol;