import styles from './Restart.module.css';
import PropTypes from 'prop-types';

export const Restart = ({ restartHandler }) => {
	return (
		<footer>
			<button className={styles.restartBtn} onClick={restartHandler}>
				Restart!
			</button>
		</footer>
	);
};

Restart.propTypes = {
	restartHandler: PropTypes.func,
};
