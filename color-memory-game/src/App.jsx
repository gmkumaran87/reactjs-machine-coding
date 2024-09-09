import './App.css';
import Game from './pages/Game';
import { getRandomColors } from './utils/helper';
const TOTAL_BOXES = 12;

function App() {
	const colors = getRandomColors(TOTAL_BOXES / 2);
	console.log('Colors: ', colors);
	return <Game total={TOTAL_BOXES} colors={colors} />;
}

export default App;
