import Card from './components/Card';

export default function App() {
	const fruits = [
		{
			id: 1337,
			name: '🍌 Banana',
			color: 'yellow',
		},
		{
			id: 1339,
			name: '🍑 Peach',
			color: 'orange',
		},
		{
			id: 1336,
			name: '🍒 cherry',
			color: 'red',
		},
		{
			id: 1335,
			name: '🥝 Kiwi',
			color: 'green',
		},
		{
			id: 1338,
			name: '🍍 Pineapple',
			color: 'yellow',
		},
	];

	return (
		<div className="app">
			{fruits.map((fruit) => (
				<Card key={fruit.id} name={fruit.name} color={fruit.color} />
			))}
		</div>
	);
}
