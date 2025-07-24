import Card from '../../components/Card';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import useSWR from 'swr';

async function fetcher(url) {
	const response = await fetch(url);

	if (!response.ok) {
		const error = new Error('An error occurred while fetching the data.');
		error.info = await response.json();
		error.status = response.status;
		throw error;
	}

	return response.json();
}

export default function Character() {
	const router = useRouter();
	const { characterId } = router.query;

	const {
		data: character,
		error,
		isLoading,
	} = useSWR(`https://swapi.py4e.com/api/people/${characterId}`, fetcher);

   console.log(character);
   
	if (isLoading) {
		return <p>Loading is in progrss...</p>;
	}

	if (error) {
		return <p>Data could not be loaded...</p>;
	}

	return (
		<Layout>
			<Card
				id={characterId}
				name={character.name}
				height={character.height}
				eyeColor={character.eye_color}
				birthYear={character.birth_year}
			/>
		</Layout>
	);
}
