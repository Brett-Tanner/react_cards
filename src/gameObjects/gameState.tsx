import { prepareDeck } from "./baseDeck";
import { Card } from "./card";

export class GameState {
	activePlayerId: number;
	deck: Card[];
	discardLeft: Card[];
	discardRight: Card[];
	stage: "setup" | "draw" | "choosing" | "action";

	constructor() {
		this.activePlayerId = 1;
		this.deck = prepareDeck();
		this.discardLeft = [];
		this.discardRight = [];
		this.stage = "setup";
	}
}
