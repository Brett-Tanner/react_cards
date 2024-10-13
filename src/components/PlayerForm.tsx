import { Player } from "../gameObjects/player";

interface props {
	player: Player;
	setPlayers: React.Dispatch<React.SetStateAction<Player[]>>;
}

export function PlayerForm({ player, setPlayers }: props) {
	function updateName(name: string) {
		setPlayers((players) => {
			return players.map((p) => {
				return p.id === player.id ? { ...player, name: name } : p;
			});
		});
	}

	function removePlayer() {
		setPlayers((players) => players.filter((p) => p.id !== player.id));
	}

	return (
		<form className="flex flex-col justify-between items-center gap-3">
			<input
				type="text"
				name={`player${player.id}name`}
				id={`player${player.id}name`}
				onChange={(e) => updateName(e.target.value)}
				className="text-center"
			/>

			{player.id > 1 && <button onClick={removePlayer}>Remove</button>}
		</form>
	);
}
