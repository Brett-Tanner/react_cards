import { MutableRefObject, useEffect, useRef } from "react";
import { shuffle } from "../gameObjects/baseDeck";
import { Card } from "../gameObjects/card";
import { GameState } from "../gameObjects/gameState";
import { Player } from "../gameObjects/player";

interface props {
	activePlayer: Player;
	setPlayers: React.Dispatch<React.SetStateAction<Player[]>>;
	setGameState: React.Dispatch<React.SetStateAction<GameState>>;
}

export function ChooseDialog({
	activePlayer,
	setGameState,
	setPlayers,
}: props) {
	const { choices } = activePlayer;

	const dialog: MutableRefObject<null | HTMLDialogElement> = useRef(null);
	useEffect(() => {
		dialog.current?.showModal();
	}, []);

	function addToHand(card: Card) {
		const newHand = activePlayer.hand.concat([card]);

		setPlayers((players) => {
			return players.map((player) => {
				if (player.id !== activePlayer.id) return player;

				return { ...player, choices: [], hand: newHand };
			});
		});

		const remainingCards = choices.filter((choice) => choice.id !== card.id);
		choices.length > 2
			? shuffleRemaining(remainingCards)
			: discardRemaining(remainingCards);

		dialog.current?.close();
	}

	function shuffleRemaining(remainingCards: Card[]) {
		return setGameState((state) => {
			return { ...state, deck: shuffle(state.deck.concat(remainingCards)) };
		});
	}

	function discardRemaining(remainingCards: Card[]) {
		let pile = prompt("Discard to L or R pile?");

		while (pile !== "L" && pile !== "R") {
			pile = prompt("Invalid side entered. Discard to L or R pile?");
		}

		switch (pile) {
			case "L":
				setGameState((state) => {
					return {
						...state,
						discardLeft: state.discardLeft.concat(remainingCards),
					};
				});
				break;
			case "R":
				setGameState((state) => {
					return {
						...state,
						discardRight: state.discardRight.concat(remainingCards),
					};
				});
				break;
		}
	}

	return (
		<dialog ref={dialog}>
			<header>Choose a card to keep</header>
			<ul>
				{choices.map((card) => (
					<li key={card.id} onClick={() => addToHand(card)}>
						Name: {card.name}, Color: {card.color}
					</li>
				))}
			</ul>
		</dialog>
	);
}
