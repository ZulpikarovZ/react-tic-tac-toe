import { useState } from 'react';
import { Restart } from '../Restart/Restart';
import { Board } from '../Board/Board';
import { GameInfo } from '../GameInfo/GameInfo';

export const GameBoard = () => {
	const TOTAL_SQUARES = 9;
	const [squares, setSquares] = useState(Array(TOTAL_SQUARES).fill(null));
	const [isXMove, setIsXMove] = useState(true);

	const getWinner = (squares) => {
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
			if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
				return squares[a];
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
		: isXMove
		? 'Mr.X ☺ turn'
		: 'Sub.O ☻ turn';

	const handleClick = (index) => {
		if (squares[index] || winner) {
			return;
		}

		const copySquares = [...squares];
		copySquares[index] = isXMove ? 'X' : 'O';
		setSquares(copySquares);
		setIsXMove((prev) => !prev);
	};

	const restartHandler = () => {
		setSquares(Array(TOTAL_SQUARES).fill(null));
		setIsXMove(true);
	};

	return (
		<>
			<GameInfo info={info} />
			<Board squares={squares} handleClick={handleClick} />
			<Restart restartHandler={restartHandler} />
		</>
	);
};
