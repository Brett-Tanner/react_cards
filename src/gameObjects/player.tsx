export class Player {
	hand: card[];
	id: number;
	name: string;
	playedCards: card[];
	score: number;

	constructor(id: number, name = "", hand = [], playedCards = [], score = 0) {
		this.hand = hand;
		this.id = id;
		this.name = name;
		this.playedCards = playedCards;
		this.score = score;
	}
}
