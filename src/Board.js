import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Space from './Space';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import './globalstyles.css';

/*


- Do something better than alert for addressing an illegal move 
*/

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            1:'', 2:'', 3:'',
            4:'', 5:'', 6:'',
            7:'', 8:'', 9:'',
            currentPlayer: 'x',
            gameActive : true
        }
        this.editGrid = this.editGrid.bind(this);
        this.switchPlayer = this.switchPlayer.bind(this);
        this.checkSpaceVacant = this.checkSpaceVacant.bind(this);
        this.checkForWin = this.checkForWin.bind(this);
        this.lookForWinCondition = this.lookForWinCondition.bind(this);
        this.setGameInactive = this.setGameInactive.bind(this);
        this.checkIfDraw = this.checkIfDraw.bind(this);
        this.resetGame = this.resetGame.bind(this); 
    }

    editGrid(pos) {
        if(!(this.state.gameActive)) {
            alert("Game is not active, it has either been drawn or won!");
            return false;
        }
        if(this.checkSpaceVacant(pos)) {
            this.setState({
                [pos]: this.state.currentPlayer,
            }, this.checkForWin)
        } else {
            alert("This turn is not legal, please try again.");
        }
    }
    
    checkSpaceVacant(pos) {
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

    checkForWin() {
        if(this.lookForWinCondition()) {
            alert(`${this.state.currentPlayer} has won the game!`);
            this.setState({
                gameActive: false
            })
            return; 
        }
        if(this.checkIfDraw()) {
            alert(`It's a draw!`);
            this.setState({
                gameActive: false
            })
        }
        else {
            this.switchPlayer();
            return; 
        }
    }

    checkIfDraw() {
        for(let i = 1; i <=10; i++) {
            if(this.state[i]) { 
                if(i == 9) {
                    return true; 
                }
                continue;
            }
            else {
                break;
            }
        }
        return false; 
    }

    lookForWinCondition() {
        // Check by row
        let score = 0; 
        let j = 1; 
        for(let i = 1; i <= 9; i++) {
            if(this.state[j] == this.state.currentPlayer) {
                score++;
                j++;
                i--;
                if(score >= 3) {
                    return true; 
                }
            }
            else {
                j = i + 3;
                i = i + 2; 
                score = 0;
            }
        }
        
        // Check by column 
        let col = 1;
        let space = 1; 
        score = 0;
        while(true) {
            if(score >= 3) {
                return true; 
            }
            if(this.state[space] == this.state.currentPlayer) {
                score++;
                space += 3; 
            }
            else {
                if(col == 3) {
                    break;
                }
                 else {
                     col++; 
                     space = col;
                     score =0;  
                 }
            }
        }

        // Check diagonal right-to-left
        space = 1; 
        score = 0;
        while(true) {
            if(score >= 3) {
                return true; 
            }
            if(this.state[space] == this.state.currentPlayer) {
                score++;
                space += 4; 
            }
            else {
                break;
            }
        }

        // Check diagonal left-to-right
        space = 3; 
        score = 0;
        while(true) {
            if(score >= 3) {
                console.log("Diag check returned a win condition.");
                return true; 
            }
            if(this.state[space] == this.state.currentPlayer) {
                score++;
                space += 2; 
            }
            else {
                break; 
            }
        }
        return false; 

    }

    setGameInactive() {
        this.setState({
            gameActive: false
        })
    }

    resetGame() {
        this.setState({
            gameActive: true,
            currentPlayer: 'x'
        })
        for(let i = 1; i <= 9; i++) {
            this.setState({
                [i]: ''
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
            <Row className="button-row">
                <Button className='mt-3' onClick={() => this.resetGame()}>Reset Game</Button>
            </Row>
        </Container>)
    }
}

export default Board;
