import { useEffect, useState } from 'react';

export default function PokemonList() {
	const [pokemon, setPokemon] = useState([]);
	const [offset, setOffset] = useState(0);

	useEffect(() => {
		async function loadPokemon() {
			try {
				const response = await fetch(
					`https://pokeapi.co/api/v2/pokemon?offset=${offset}`
				);
				const data = await response.json();

				setPokemon(data.results);
			} catch (error) {
				console.log(error);
			}
		}

		loadPokemon();
	}, [offset]);

	function nextPage() {
		setOffset(offset + 20);
	}

	function prevPage() {
		if (offset <= 20) {
			setOffset(0);

			return;
		}

		setOffset(offset - 20);
	}

	return (
		<main>
			<button type="button" onClick={prevPage} disabled={offset === 0}>
				Previous Page
			</button>

			<button type="button" onClick={nextPage}>
				Next Page
			</button>

			<ul>
				{pokemon.map(({ name }) => (
					<li key={name}>{name}</li>
				))}
			</ul>
		</main>
	);
}
