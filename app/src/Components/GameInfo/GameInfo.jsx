import styles from './GameInfo.module.css';
import PropTypes from 'prop-types';

export const GameInfo = ({ info }) => {
	return (
		<header>
			<div className={styles.information}>{info}</div>
		</header>
	);
};

GameInfo.propTypes = {
	info: PropTypes.string,
};
