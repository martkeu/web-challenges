import { useState } from 'react';
import './App.css';
import EntriesSection from './components/EntriesSection';
import EntryForm from './components/EntryForm';
import Footer from './components/Footer';
import Header from './components/Header';
import { uid } from 'uid';

const initialEntries = [
	{
		id: 1000,
		date: 'Feb 5, 2025',
		motto: 'We are in a state of chaos',
		notes: "Today I learned about React State. It was fun! I can't wait to learn more.",
		isFavorite: false,
	},
	{
		id: 999,
		date: 'Feb 4, 2025',
		motto: 'Props, Props, Props',
		notes: 'Today I learned about React Props. Mad props to everyone who understands this!',
		isFavorite: false,
	},
	{
		id: 998,
		date: 'Feb 3, 2025',
		motto: 'How to nest components online fast',
		notes: 'Today I learned about React Components and how to nest them like a pro. Application design is so much fun!',
		isFavorite: false,
	},
	{
		id: 997,
		date: 'Feb 2, 2025',
		motto: "I'm a React Developer",
		notes: 'My React-ion when I learned about React: Yay!',
		isFavorite: false,
	},
];

function App() {
    const [entries, setEntries] = useState(initialEntries);

	function handleAddEntry(newEntry) {
		const date = new Date().toLocaleDateString('en-us', {
			dateStyle: 'medium',
		});

		setEntries([{ id: uid(), date, isFavorite: false, ...newEntry }, ...entries]);
	}

    //Favorite-Feature --mk
	function handleToggleFavorite(id) {
		const toggledEntry = entries.map((entry) => {
			return entry.id === id
				? { ...entry, isFavorite: !entry.isFavorite }
				: entry;
        });
        
        setEntries(toggledEntry);
	}

	return (
		<div className="app">
			<Header />

			<main className="app__main">
				<EntryForm onAddEntry={handleAddEntry} />
				<EntriesSection
					entries={entries}
					onToggleFavorite={handleToggleFavorite}
				/>
			</main>

			<Footer />
		</div>
	);
}

export default App;
