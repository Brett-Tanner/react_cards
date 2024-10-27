import { Card } from "../gameObjects/card";
import { GameState } from "../gameObjects/gameState";
import { Player } from "../gameObjects/player";
import { ChooseDialog } from "./ChooseDialog";

interface props {
	players: Player[];
	gameState: GameState;
	setPlayers: React.Dispatch<React.SetStateAction<Player[]>>;
	setGameState: React.Dispatch<React.SetStateAction<GameState>>;
}

export function Board({ players, gameState, setPlayers, setGameState }: props) {
	const { activePlayerId, deck, discardLeft, discardRight, stage } = gameState;
	const activePlayer =
		players.find((p) => p.id === activePlayerId) || players[0];

	function draw(deck: Card[]) {
		setPlayers((players) => {
			return players.map((player) => {
				if (player.id !== activePlayerId) return player;

				const choices = deck.slice(deck.length - 2);
				return { ...player, choices: choices };
			});
		});
		setGameState((gameState) => {
			return { ...gameState, deck: gameState.deck.slice(0, -2) };
		});
	}

	return (
		<>
			{activePlayer.choices.length > 0 && (
				<ChooseDialog
					activePlayer={activePlayer}
					setGameState={setGameState}
					setPlayers={setPlayers}
				/>
			)}

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
						className={`col-start-3 row-start-1 flex flex-col items-center justify-center border-2 rounded ${deck.length === 0 ? "border-dashed" : "border-solid"}`}
					>
						<p>{deck.length} cards remaining</p>
						<button className="btn" onClick={() => draw(deck)}>
							Draw!
						</button>
					</div>
					<div
						className={`col-start-2 row-start-2 border-2 rounded ${discardLeft.length === 0 ? "border-dashed" : "border-solid"}`}
					>
						{discardLeft.length > 0 && discardLeft[discardLeft.length - 1].name}
					</div>
					<div
						className={`col-start-4 row-start-2 border-2 rounded ${discardRight.length === 0 ? "border-dashed" : "border-solid"}`}
					>
						{discardRight.length > 0 &&
							discardRight[discardRight.length - 1].name}
					</div>
				</section>
			</main>
		</>
	);
}
