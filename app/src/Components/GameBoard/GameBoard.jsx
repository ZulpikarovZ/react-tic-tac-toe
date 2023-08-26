import { useState } from 'react';
import { Restart } from '../Restart/Restart';
import { Board } from '../Board/Board';
import { GameInfo } from '../GameInfo/GameInfo';

export const GameBoard = () => {
	const [squares, setSquares] = useState(Array(9).fill(null));
	const [isXMove, setIsXMove] = useState(true);
	const [draw, setDraw] = useState('');
	let isDraw = [];
	let info = '';

	info = getWinner(squares)
		? `${getWinner(squares)} Wins!`
		: isXMove
		? 'Mr.X ☺ turn'
		: 'Sub.O ☻ turn';

	const handleClick = (index) => {
		if (squares[index] || getWinner(squares)) {
			return;
		}

		const copySquares = [...squares];
		isXMove ? (copySquares[index] = 'X') : (copySquares[index] = 'O');

		setSquares(copySquares);
		setIsXMove((prev) => !prev);

		isDraw = copySquares.filter((el) => el === 'X' || el === 'O');
		isDraw.length === squares.length ? setDraw('Is draw!') : setDraw('');
	};

	function getWinner(squares) {
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
	}

	const restartHandler = () => {
		setSquares(Array(9).fill(null));
		setIsXMove(true);
		setDraw('');
	};

	return (
		<>
			<GameInfo draw={draw} info={info} />
			<Board squares={squares} handleClick={handleClick} />
			<Restart restartHandler={restartHandler} />
		</>
	);
};
