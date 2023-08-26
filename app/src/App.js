import styles from './App.module.css';
import { GameBoard } from './Components/GameBoard/GameBoard';

export const App = () => {
	return (
		<div className={styles.app}>
			<GameBoard />
		</div>
	);
};
