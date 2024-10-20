import { prepareDeck } from "./baseDeck";
import { Card } from "./card";

export class GameState {
	deck: Card[];
	discardLeft: Card[];
	discardRight: Card[];
	stage: "setup" | "draw" | "action";

	constructor() {
		this.deck = prepareDeck();
		this.discardLeft = [];
		this.discardRight = [];
		this.stage = "setup";
	}
}
