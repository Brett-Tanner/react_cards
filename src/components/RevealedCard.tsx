import { Card } from "../gameObjects/card";

interface props {
	card: Card;
}

export function RevealedCard({ card }: props) {
	return (
		<div className="max-h-full flex flex-col justify-center items-center rounded-2xl border-2 border-solid aspect-card cursor-pointer text-wrap gap-6 p-3">
			<p>{card.name}</p>
			<p>{card.color}</p>
			<p>{card.action}</p>
		</div>
	);
}
