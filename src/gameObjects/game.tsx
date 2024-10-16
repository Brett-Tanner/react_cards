import { prepareDeck } from "./baseDeck";
import { Card } from "./card";

export class Game {
	deck: Card[];
	discardLeft: Card[];
	discardRight: Card[];
	started: boolean;

	constructor() {
		this.deck = prepareDeck();
		this.discardLeft = [];
		this.discardRight = [];
		this.started = false;
	}
}
