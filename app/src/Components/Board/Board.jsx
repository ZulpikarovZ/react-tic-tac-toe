import { Cell } from '../Cell/Cell';
import styles from './Board.module.css';
import PropTypes from 'prop-types';

export const Board = ({ squares, handleClick }) => {
	return (
		<main className={styles.board}>
			<div className={styles.boardRow}>
				<Cell value={squares[0]} handleClick={() => handleClick(0)} />
				<Cell value={squares[1]} handleClick={() => handleClick(1)} />
				<Cell value={squares[2]} handleClick={() => handleClick(2)} />
			</div>
			<div className={styles.boardRow}>
				<Cell value={squares[3]} handleClick={() => handleClick(3)} />
				<Cell value={squares[4]} handleClick={() => handleClick(4)} />
				<Cell value={squares[5]} handleClick={() => handleClick(5)} />
			</div>
			<div className={styles.boardRow}>
				<Cell value={squares[6]} handleClick={() => handleClick(6)} />
				<Cell value={squares[7]} handleClick={() => handleClick(7)} />
				<Cell value={squares[8]} handleClick={() => handleClick(8)} />
			</div>
		</main>
	);
};

Board.propTypes = {
	squares: PropTypes.array,
	handleClick: PropTypes.func,
};
