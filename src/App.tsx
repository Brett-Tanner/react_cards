import { useState } from "react";
import { GameSetup } from "./components/GameSetup";
import { GameState } from "./gameObjects/gameState";
import { Player } from "./gameObjects/player";
import { Board } from "./components/Board";

function App() {
	const [gameState, setGameState] = useState(new GameState());
	const [players, setPlayers] = useState<Player[]>([new Player(1)]);

	if (gameState.stage === "setup") {
		return (
			<GameSetup
				players={players}
				setGameState={setGameState}
				setPlayers={setPlayers}
			/>
		);
	} else {
		return (
			<Board
				players={players}
				gameState={gameState}
				setGameState={setGameState}
			/>
		);
	}
}

export default App;
