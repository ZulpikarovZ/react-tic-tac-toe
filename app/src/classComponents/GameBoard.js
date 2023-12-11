import { Board, GameInfo, Restart } from '../classComponents';
import { Component } from 'react';
import { TOTAL_SQUARES } from '../constants';
import { connect } from 'react-redux';
import {
	changeTurn,
	makeAMove,
	resetATurn,
	restartABoard,
} from '../redux/actionCreators/actionCreators';

export class OldappContainer extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
		this.restartHandler = this.restartHandler.bind(this);
	}

	getWinner(cells) {
		const winCombinations = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		for (let i = 0; i < winCombinations.length; i++) {
			const [a, b, c] = winCombinations[i];
			if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
				return cells[a];
			}
		}
		return null;
	}

	handleClick(index) {
		const winner = this.getWinner(this.props.squares.squares);
		if (this.props.squares.squares[index] || winner) {
			return;
		}

		const copySquares = [...this.props.squares.squares];
		copySquares[index] = this.props.isXTurn.isXTurn ? 'X' : 'O';
		this.props.dispatch(makeAMove(copySquares));
		this.props.dispatch(changeTurn(this.props.isXTurn.isXTurn));
	}

	restartHandler() {
		this.props.dispatch(restartABoard());
		this.props.dispatch(resetATurn());
	}

	render() {
		const winner = this.getWinner(this.props.squares.squares);
		const isDraw =
			this.props.squares.squares.filter((el) => el).length === TOTAL_SQUARES;
		const info = winner
			? `${winner} Wins!`
			: isDraw
			? 'Is draw!'
			: this.props.isXTurn.isXTurn
			? 'Mr.X ☺ turn'
			: 'Sub.O ☻ turn';

		return (
			<>
				<GameInfo info={info} styles='' />
				<Board
					squares={this.props.squares.squares}
					handleClick={this.handleClick}
				/>
				<Restart restartHandler={this.restartHandler} />
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	squares: state.squaresState,
	isXTurn: state.turnState,
});

export const Oldapp = connect(mapStateToProps)(OldappContainer);