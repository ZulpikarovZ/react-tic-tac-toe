import { Restart } from '../Restart/Restart';
import { Board } from '../Board/Board';
import { GameInfo } from '../GameInfo/GameInfo';
import { TOTAL_SQUARES } from '../../constants';
import { store } from '../../redux/store';
import { CHANGE_TURN, MAKE_A_MOVE, RESTART_A_BOARD } from '../../redux/actions';
import { useGetStateFromRedux } from '../../hooks/get-state-from-redux';

export const GameBoard = () => {
	const { state, refreshStore } = useGetStateFromRedux();
	const { squares, isXTurn } = state;

	const getWinner = (cells) => {
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
	};

	const winner = getWinner(squares);
	const isDraw = squares.filter((el) => el).length === TOTAL_SQUARES;
	const info = winner
		? `${winner} Wins!`
		: isDraw
		? 'Is draw!'
		: isXTurn
		? 'Mr.X ☺ turn'
		: 'Sub.O ☻ turn';

	const handleClick = (index) => {
		if (squares[index] || winner) {
			return;
		}

		const copySquares = [...squares];
		copySquares[index] = isXTurn ? 'X' : 'O';
		store.dispatch({ type: MAKE_A_MOVE, payload: copySquares });
		store.dispatch({ type: CHANGE_TURN, payload: isXTurn });
		refreshStore();
	};

	const restartHandler = () => {
		store.dispatch({ type: RESTART_A_BOARD });
		refreshStore();
	};

	return (
		<>
			<GameInfo info={info} />
			<Board squares={squares} handleClick={handleClick} />
			<Restart restartHandler={restartHandler} />
		</>
	);
};
