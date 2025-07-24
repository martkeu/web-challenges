// import { useEffect, useState } from 'react';
import Controls from '../Controls/index';
import Map from '../Map/index';
import useSWR from 'swr';

const URL = 'https://api.wheretheiss.at/v1/satellites/25544';

//fetcher-Function
async function fetcher(url) {
	const res = await fetch(url);

	if (!res.ok) {
		const error = new Error('An error occurred while fetching the data.');
		// Attach extra info to the error object.
		error.info = await res.json();
		error.status = res.status;
		throw error;
	}

	return await res.json();
}

export default function ISSTracker() {
	const {
		data: coords,
		isLoading,
		error,
		mutate,
	} = useSWR(URL, fetcher, { refreshInterval: 5000 });

	if (isLoading) {
		return <p>Data will be loading...</p>;
	}

	if (error) {
		// return <p>{error.message}</p>;
		return <p>An error has been occured...</p>;
	}

	function handleRefresh() {
		mutate();
	}

	//   const [coords, setCoords] = useState({
	//     longitude: 0,
	//     latitude: 0,
	//   });

	//   async function getISSCoords() {
	//     try {
	//       const response = await fetch(URL);
	//       if (response.ok) {
	//         const data = await response.json();
	//         setCoords({ longitude: data.longitude, latitude: data.latitude });
	//       }
	//     } catch (error) {
	//       console.error(error);
	//     }
	//   }

	//   useEffect(() => {
	//     const timer = setInterval(() => {
	//       getISSCoords();
	//     }, 5000);

	//     return () => {
	//       clearInterval(timer);
	//     };
	//   }, []);

	return (
		<main>
			<Map longitude={coords.longitude} latitude={coords.latitude} />
			<Controls
				longitude={coords.longitude}
				latitude={coords.latitude}
				// onRefresh={getISSCoords}
				// onRefresh={() => mutate()}
				onRefresh={handleRefresh}
			/>
		</main>
	);
}
