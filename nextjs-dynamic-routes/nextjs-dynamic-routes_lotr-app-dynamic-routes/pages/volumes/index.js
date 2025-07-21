import Link from 'next/link';
import { introduction } from '../../lib/data';
import { volumes } from '../../lib/data.js';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Volumes() {
	const router = useRouter();

	function getRandomElement(array) {
		const randomSlug = array[Math.floor(Math.random() * array.length)].slug;
		console.log(randomSlug);

		router.push('/volumes/' + randomSlug);
	}

	return (
		<>
			<Head>
				<title>Volumes | Lord Of The Rings</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>

			<h1>The Lord of the Rings</h1>
			<p>{introduction}</p>

			<ul>
				{volumes.map(({ slug, title }) => (
					<li key={slug}>
						<Link href={`volumes/${slug}`}>{title}</Link>
					</li>
				))}
			</ul>

			<button onClick={() => getRandomElement(volumes)}>
				Randomly choose a volume!
			</button>
		</>
	);
}
