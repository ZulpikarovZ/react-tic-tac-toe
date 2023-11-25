import { Restart } from '../Restart/Restart';
import { Board } from '../Board/Board';
import { GameInfo } from '../GameInfo/GameInfo';
import { TOTAL_SQUARES } from '../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { squaresSelector, turnSelector } from '../../redux/selectors/selectors';
import { changeTurn, makeAMove, resetATurn, restartABoard } from '../../redux/actionCreators/actionCreators';

export const GameBoard = () => {
	const squares = useSelector(squaresSelector);
	const isXTurn = useSelector(turnSelector);
	const dispatch = useDispatch();

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
		dispatch(makeAMove(copySquares));
		dispatch(changeTurn(isXTurn));
	};

	const restartHandler = () => {
		dispatch(restartABoard());
		dispatch(resetATurn())
	};

	return (
		<>
			<GameInfo info={info} />
			<Board squares={squares} handleClick={handleClick} />
			<Restart restartHandler={restartHandler} />
		</>
	);
};
