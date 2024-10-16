import { Card } from "./card";

export class Player {
	hand: Card[];
	id: number;
	name: string;
	playedCards: Card[];
	score: number;

	constructor(id: number, name = "", hand = [], playedCards = [], score = 0) {
		this.hand = hand;
		this.id = id;
		this.name = name;
		this.playedCards = playedCards;
		this.score = score;
	}
}
