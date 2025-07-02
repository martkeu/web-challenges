export default function App() {
	function handleClick() {
		alert('You clicked me!');
	}

	return (
		<>
			<Button
				color="green"
				disabled={false}
				text="Click me"
				onClick={handleClick}
			/>

            <Button
                color="red"
                disabled={true}
                text="Vergeblich"
            />
		</>
	);
}


function Button({ color, disabled, text, onClick }) {
	return (
		<button
			style={{ backgroundColor: color, color: 'white' }}
			// onClick={() => alert('You clicked me!')}
			onClick={() => onClick()}
			disabled={disabled}
		>
			{text}
		</button>
	);
}
