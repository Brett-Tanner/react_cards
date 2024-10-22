import { Card } from "./card";

export class Player {
	choices: Card[];
	hand: Card[];
	id: number;
	name: string;
	playedCards: Card[];
	score: number;

	constructor(
		id: number,
		choices = [],
		name = "",
		hand = [],
		playedCards = [],
		score = 0,
	) {
		this.choices = choices;
		this.hand = hand;
		this.id = id;
		this.name = name;
		this.playedCards = playedCards;
		this.score = score;
	}
}
