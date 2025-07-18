import { useState } from 'react';
import './styles.css';

export default function App() {
	const [holiday, setHoliday] = useState('');
	const [date, setDate] = useState('');

	function handleSubmit(event) {
		event.preventDefault();

		console.log(event.target.elements.holiday.value);
		console.log(event.target.elements.date.value);

		const holidayValue = event.target.elements.holiday.value;
		const dateValue = event.target.elements.date.value;

		setHoliday(holidayValue);
		setDate(dateValue);

		const form = document.querySelector('form');
		const holidayField = document.querySelector('#holiday');

		form.reset();
		holidayField.focus();
	}

	return (
		<div className="container">
			<h1>Favourite Holiday Data Storage</h1>
			<h2 id="favourite-holiday">Please tell us your favourite holiday!</h2>

			<form
				className="form"
				name="form"
				aria-labelledby="favourite-holiday"
				onSubmit={handleSubmit}
			>
				<label htmlFor="holiday">My Favourite Holiday: </label>
				<input
					id="holiday"
					type="text"
					name="holiday"
					placeholder="e.g. Christmas"
				/>
				<label htmlFor="date">Date: </label>
				<input id="date" type="date" name="date" />

				<button type="submit" className="form__submit-button">
					Submit
				</button>
			</form>

			<h2>Output of Submitted Data</h2>
			<p>
				Favourite Holiday: <span className="output">{holiday}</span>
			</p>
			<p>
				Date: <span className="output">{date}</span>
			</p>
		</div>
	);
}
