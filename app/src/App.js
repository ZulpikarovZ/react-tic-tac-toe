// import styles from './App.module.css';
// import { GameBoard } from './Components/GameBoard/GameBoard';
import { Oldapp } from './classComponents/GameBoard';

export const App = () => {
	return (
		<div className="text-center bg-gray-700 min-h-screen flex flex-col justify-center items-center text-white">
			{/* //   <div className={styles.app}> */}
			{/* <GameBoard /> */}
			<Oldapp />
		</div>
	);
};
