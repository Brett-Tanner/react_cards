import { Card, cardColor } from "./card";

export function prepareDeck() {
	const baseDeck: Card[] = [...uniqueCards()];

	// 7 unique cards were already added
	let n = 8;

	const jellyfishColors: cardColor[] = ["pink", "purple"];
	jellyfishColors.forEach((color) => {
		baseDeck.push(Card.Jellyfish(color, n));
		n++;
	});

	const octopusColors: cardColor[] = [
		"purple",
		"light-blue",
		"green",
		"grey",
		"yellow",
	];
	octopusColors.forEach((color) => {
		baseDeck.push(Card.Octopus(color, n));
		n++;
	});

	const shellColors: cardColor[] = [
		"yellow",
		"black",
		"blue",
		"grey",
		"light-blue",
		"green",
	];
	shellColors.forEach((color) => {
		baseDeck.push(Card.Shell(color, n));
		n++;
	});

	const fishColors: cardColor[] = [
		"yellow",
		"blue",
		"blue",
		"black",
		"black",
		"green",
		"light-blue",
	];
	fishColors.forEach((c) => {
		baseDeck.push(Card.Fish(c, n));
		n++;
	});

	const swimmerColors: cardColor[] = [
		"yellow",
		"blue",
		"black",
		"light-blue",
		"light-orange",
	];
	swimmerColors.forEach((c) => {
		baseDeck.push(Card.Swimmer(c, n));
		n++;
	});

	const penguinColors: cardColor[] = ["purple", "light-orange", "pink"];
	penguinColors.forEach((c) => {
		baseDeck.push(Card.Penguin(c, n));
		n++;
	});

	const shipColors: cardColor[] = ["light-blue", "yellow", "blue", "black"];
	shipColors.forEach((color) => {
		// There are two ships of each color
		baseDeck.push(Card.Ship(color, n), Card.Ship(color, n + 1));
		n += 2;
	});

	const sailorColors: cardColor[] = ["orange", "pink"];
	sailorColors.forEach((c) => {
		baseDeck.push(Card.Sailor(c, n));
		n++;
	});

	const sharkColors: cardColor[] = [
		"purple",
		"black",
		"blue",
		"light-blue",
		"green",
	];
	sharkColors.forEach((c) => {
		baseDeck.push(Card.Shark(c, n));
		n++;
	});

	const crabColors: cardColor[] = ["grey", "green", "black"];
	crabColors.forEach((c) => {
		baseDeck.push(Card.Crab(c, n));
		n++;
	});
	const doubleCrabColors: cardColor[] = ["blue", "light-blue", "yellow"];
	doubleCrabColors.forEach((c) => {
		baseDeck.push(Card.Crab(c, n), Card.Crab(c, n + 1));
		n += 2;
	});

	const starfishColors: cardColor[] = ["light-blue", "blue", "yellow"];
	starfishColors.forEach((c) => {
		baseDeck.push(Card.Starfish(c, n));
		n++;
	});

	for (let i = 0; i < 4; i++) {
		baseDeck.push(Card.Mermaid(n + i));
	}

	return shuffle(baseDeck);
}

function uniqueCards() {
	return [
		new Card(
			"colorless",
			1,
			"placeholderImg",
			"Seahorse",
			"+1 card to any collection (shells, octopii, penguins)",
		),
		new Card(
			"black",
			2,
			"placeholderImg",
			"Crayfish",
			"Play with a crab to look at the top 5 cards of the deck, choose one to add to your hand, then shuffle the others back into the deck.",
		),
		new Card(
			"light-orange",
			3,
			"placeholderImg",
			"Captain",
			"Gives 3 points for each sailor.",
		),
		new Card(
			"green",
			4,
			"placeholderImg",
			"Colony of Penguins",
			"Gives 3 points for each penguin.",
		),
		new Card(
			"grey",
			5,
			"placeholderImg",
			"School of Fish",
			"Gives 1 point for each fish.",
		),
		new Card(
			"green",
			6,
			"placeholderImg",
			"Consortium of Crabs",
			"Gives 1 point for each crab.",
		),
		new Card(
			"purple",
			7,
			"placeholderImg",
			"Lighthouse",
			"Gives 1 point for each ship.",
		),
	];
}

export function shuffle(array: Card[]) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}
