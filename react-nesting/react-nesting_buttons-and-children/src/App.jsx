import React from 'react';
import './styles.css';

export default function App() {
	return (
		<main>
			<Button>Click me!</Button>
			<Button>Absenden</Button>
			<Button>Registrieren</Button>
			<Button>Anmelden</Button>
		</main>
	);
}

function Button({ children }) {
	return (
		<button className="button" type="button">
			{children}
		</button>
	);
}
