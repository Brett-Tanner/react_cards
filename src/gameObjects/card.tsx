export class Card {
	color: cardColor;
	img: string;
	name: cardName;
	action: string;

	constructor(color: cardColor, img: string, name: cardName, action: string) {
		this.color = color;
		this.img = img;
		this.name = name;
		this.action = action;
	}

	static Fish(color: cardColor) {
		return new Card(
			color,
			"placeholderImg",
			"Fish",
			"Play with another fish to take the top card of the deck.",
		);
	}

	static Ship(color: cardColor) {
		return new Card(
			color,
			"placeholderImg",
			"Ship",
			"Play with another ship to immediately take another turn.",
		);
	}

	static Crab(color: cardColor) {
		return new Card(
			color,
			"placeholderImg",
			"Crab",
			"Play with another crab to add a card from either discard pile to your hand.",
		);
	}

	static Starfish(color: cardColor) {
		return new Card(
			color,
			"placeholderImg",
			"Starfish",
			"Play with any other pair to get an additional two point for that pair, at the cost of not activating their effect.",
		);
	}

	static Penguin(color: cardColor) {
		return new Card(
			color,
			"placeholderImg",
			"Penguin",
			"1 = 1 point. 2 = 3 points. 3 = 5 points.",
		);
	}

	static Octopus(color: cardColor) {
		return new Card(
			color,
			"placeholderImg",
			"Octopus",
			"0 points for the first, +3 for every thereafter up to 12 points.",
		);
	}

	static Shell(color: cardColor) {
		return new Card(
			color,
			"placeholderImg",
			"Shell",
			"0 points for the first, +2 for every thereafter up to 10 points.",
		);
	}

	static Swimmer(color: cardColor) {
		return new Card(
			color,
			"placeholderImg",
			"Swimmer",
			"Play with a shark to steal a random card from a player of your choice.",
		);
	}

	static Shark(color: cardColor) {
		return new Card(
			color,
			"placeholderImg",
			"Shark",
			"Play with a swimmer to steal a random card from a player of your choice.",
		);
	}

	static Mermaid() {
		return new Card(
			"colorless",
			"placeholderImg",
			"Mermaid",
			"Gives you one point for each card of your most common color.",
		);
	}

	static Sailor(color: cardColor) {
		return new Card(
			color,
			"placeholderImg",
			"Sailor",
			"0 points for 1, 5 points for both.",
		);
	}

	static Jellyfish(color: cardColor) {
		return new Card(
			color,
			"placeholderImg",
			"Jellyfish",
			"When played with a swimmer, all other players skip their turn by drawing 1.",
		);
	}
}

export type cardColor =
	| "light-blue"
	| "black"
	| "blue"
	| "purple"
	| "grey"
	| "yellow"
	| "green"
	| "colorless"
	| "orange"
	| "pink"
	| "light-orange";

type cardName =
	| "Fish"
	| "School of Fish"
	| "Ship"
	| "Lighthouse"
	| "Crab"
	| "Consortium of Crabs"
	| "Starfish"
	| "Penguin"
	| "Colony of Penguins"
	| "Octopus"
	| "Swimmer"
	| "Shark"
	| "Mermaid"
	| "Shell"
	| "Crayfish"
	| "Jellyfish"
	| "Seahorse"
	| "Sailor"
	| "Captain";
