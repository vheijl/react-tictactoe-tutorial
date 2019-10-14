import React from 'react';
import '../index.css';
import Square from './Square';

export default class Board extends React.Component {

    renderSquare(i) {
        return (
            <Square
                key={ i }
                value={ this.props.squares[i] }
                onClick={ () => this.props.onClick(i) }
            />
        );
    }

    render() {

        let rows = [];
        let counter = 0;
        
        for (let i = 0; i < 3; i++) {
            let squares = [];
            for (let j = 0; j < 3; j++) {
                squares.push(this.renderSquare(counter++));
            }
            rows.push(<div className="board-row" key={i}>{squares}</div>)
        }

        return (
            <div>
                { rows }
            </div>
        );
    }
}