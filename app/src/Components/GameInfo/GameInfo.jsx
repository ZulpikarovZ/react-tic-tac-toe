import styles from './GameInfo.module.css';
import PropTypes from 'prop-types';

export const GameInfo = ({ draw, info }) => {
	return (
		<header>
			<div className={styles.information}>{draw || info}</div>
		</header>
	);
};

GameInfo.propTypes = {
	draw: PropTypes.string,
	info: PropTypes.string,
};
