import styles from './Cell.module.css';
import PropTypes from 'prop-types';

export const Cell = ({ value, handleClick }) => {
	return (
		<button
			className={styles.cell}
			onClick={handleClick}
			style={{ color: value === 'X' ? 'green' : 'red' }}
		>
			{value}
		</button>
	);
};

Cell.propTypes = {
	value: PropTypes.string,
	handleClick: PropTypes.func,
};
