import useSWR from 'swr';

export default function HomePage() {
	const fetcher = (url) => fetch(url).then((response) => response.json());

	const {
		data: character,
		isLoading,
		error,
	} = useSWR('/api/random-character/', fetcher);

	if (isLoading) {
		return <h2>...Loading...</h2>;
	}

	if (error || !character) {
		return <h2>No data available</h2>;
	}

	return (
		<div>
			<p>
				<b>First Name</b>: {character.firstName}
			</p>
			<p>
				<b>Last Name</b>: {character.lastName}
			</p>
			<p>
				<b>Twitter Name</b>: {character.twitterName}
			</p>
			<p>
				<b>Geo Hash</b>: {character.geoHash}
			</p>
		</div>
	);
}
