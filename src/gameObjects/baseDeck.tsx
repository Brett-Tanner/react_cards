import { Card, cardColor } from "./card";

export function prepareDeck() {
	const baseDeck: Card[] = [...uniqueCards()];

	const jellyfishColors: cardColor[] = ["pink", "purple"];
	jellyfishColors.forEach((color) => baseDeck.push(Card.Jellyfish(color)));

	const octopusColors: cardColor[] = [
		"purple",
		"light-blue",
		"green",
		"grey",
		"yellow",
	];
	octopusColors.forEach((color) => baseDeck.push(Card.Octopus(color)));

	const shellColors: cardColor[] = [
		"yellow",
		"black",
		"blue",
		"grey",
		"light-blue",
		"green",
	];
	shellColors.forEach((color) => baseDeck.push(Card.Shell(color)));

	const fishColors: cardColor[] = [
		"yellow",
		"blue",
		"blue",
		"black",
		"black",
		"green",
		"light-blue",
	];
	fishColors.forEach((c) => baseDeck.push(Card.Fish(c)));

	const swimmerColors: cardColor[] = [
		"yellow",
		"blue",
		"black",
		"light-blue",
		"light-orange",
	];
	swimmerColors.forEach((c) => baseDeck.push(Card.Swimmer(c)));

	const penguinColors: cardColor[] = ["purple", "light-orange", "pink"];
	penguinColors.forEach((c) => baseDeck.push(Card.Penguin(c)));

	const shipColors: cardColor[] = ["light-blue", "yellow", "blue", "black"];
	shipColors.forEach((color) => {
		// There are two ships of each color
		baseDeck.push(Card.Ship(color), Card.Ship(color));
	});

	const sailorColors: cardColor[] = ["orange", "pink"];
	sailorColors.forEach((c) => baseDeck.push(Card.Sailor(c)));

	const sharkColors: cardColor[] = [
		"purple",
		"black",
		"blue",
		"light-blue",
		"green",
	];
	sharkColors.forEach((c) => baseDeck.push(Card.Shark(c)));

	const crabColors: cardColor[] = ["grey", "green", "black"];
	crabColors.forEach((c) => baseDeck.push(Card.Crab(c)));
	const doubleCrabColors: cardColor[] = ["blue", "light-blue", "yellow"];
	doubleCrabColors.forEach((c) => baseDeck.push(Card.Crab(c), Card.Crab(c)));

	const starfishColors: cardColor[] = ["light-blue", "blue", "yellow"];
	starfishColors.forEach((c) => baseDeck.push(Card.Starfish(c)));

	for (let i = 0; i < 4; i++) {
		baseDeck.push(Card.Mermaid());
	}

	return shuffle(baseDeck);
}

function uniqueCards() {
	return [
		new Card(
			"colorless",
			"placeholderImg",
			"Seahorse",
			"+1 card to any collection (shells, octopii, penguins)",
		),
		new Card(
			"black",
			"placeholderImg",
			"Crayfish",
			"Play with a crab to look at the top 5 cards of the deck, choose one to add to your hand, then shuffle the others back into the deck.",
		),
		new Card(
			"light-orange",
			"placeholderImg",
			"Captain",
			"Gives 3 points for each sailor.",
		),
		new Card(
			"green",
			"placeholderImg",
			"Colony of Penguins",
			"Gives 3 points for each penguin.",
		),
		new Card(
			"grey",
			"placeholderImg",
			"School of Fish",
			"Gives 1 point for each fish.",
		),
		new Card(
			"green",
			"placeholderImg",
			"Consortium of Crabs",
			"Gives 1 point for each crab.",
		),
		new Card(
			"purple",
			"placeholderImg",
			"Lighthouse",
			"Gives 1 point for each ship.",
		),
	];
}

function shuffle(array: Card[]) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}
