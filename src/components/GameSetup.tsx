import { Player } from "../gameObjects/player";
import { PlayerForm } from "./PlayerForm";
import { prepareDeck } from "../gameObjects/baseDeck";
import { GameState } from "../gameObjects/gameState";

interface props {
	players: Player[];
	setPlayers: React.Dispatch<React.SetStateAction<Player[]>>;
	setGameState: React.Dispatch<React.SetStateAction<GameState>>;
}

export function GameSetup({ players, setPlayers, setGameState }: props) {
	const sortedPlayers = players.sort((a, b) => (a.id < b.id ? -1 : 1));

	function addPlayer() {
		let nextId: number;
		for (let i = 1; i <= 4; i++) {
			if (players.find((p) => p.id === i)) continue;

			nextId = i;
			break;
		}
		setPlayers((players) => [...players, new Player(nextId)]);
	}

	function startGame() {
		setGameState((state) => {
			return { ...state, stage: "draw", deck: prepareDeck() };
		});
	}

	return (
		<div className="flex items-center justify-center w-screen h-screen">
			<main className="flex flex-col justify-between items-center gap-3 w-4/5 border-2 border-black rounded p-6">
				<h1 className="text-center text-3xl">Game Options</h1>
				{players.length > 1 && (
					<h2>{sortedPlayers.map((p) => p.name || "???").join(" vs ")}</h2>
				)}

				{players.length >= 4 && <h2>4 players max</h2>}
				<section className="flex gap-3 justify-center items-stretch">
					{sortedPlayers.map((player) => (
						<div
							key={player.id}
							className="h-full flex flex-col justify-between items-center gap-3"
						>
							<h3>{`Player ${player.id}`}</h3>
							<PlayerForm player={player} setPlayers={setPlayers} />
						</div>
					))}
				</section>

				{players.length < 4 && <button onClick={addPlayer}>Add Player</button>}

				<button onClick={startGame}>Start Game!</button>
			</main>
		</div>
	);
}
