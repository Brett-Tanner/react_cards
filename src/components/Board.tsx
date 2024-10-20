import { GameState } from "../gameObjects/gameState";
import { Player } from "../gameObjects/player";

interface props {
	players: Player[];
	gameState: GameState;
	setGameState: React.Dispatch<React.SetStateAction<GameState>>;
}

export function Board({ players, gameState, setGameState }: props) {
	const { deck, discardLeft, discardRight, stage } = gameState;

	return (
		<>
			<main className="h-screen w-screen flex flex-col gap-6">
				<header className="flex w-100 text-3xl">
					<div className="grow"></div>
					<h1 className="border-2 border-t-0 py-3 px-6">
						{stage.charAt(0).toUpperCase() + stage.slice(1)} Stage
					</h1>
					<div className="grow"></div>
				</header>
				<section className="grid h-1/2 grid-cols-5 grid-rows-2">
					<ol className="col-start-1 row-start-1 row-span-2 flex flex-col justify-evenly items-center gap-3">
						{players.map((player) => (
							<li key={player.id}>
								{player.name}: {player.score}
							</li>
						))}
					</ol>
					<div
						className={`col-start-3 row-start-1 flex items-center justify-center border-2 rounded ${deck.length === 0 ? "border-dashed" : "border-solid"}`}
					>
						<p>{deck.length} cards remaining</p>
					</div>
					<div
						className={`col-start-2 row-start-2 border-2 rounded ${discardLeft.length === 0 ? "border-dashed" : "border-solid"}`}
					></div>
					<div
						className={`col-start-4 row-start-2 border-2 rounded ${discardRight.length === 0 ? "border-dashed" : "border-solid"}`}
					></div>
				</section>
			</main>
		</>
	);
}
