import { useState } from 'react';
import { StyledForm, StyledInputContainer } from './Form.styled';
import { useImmer } from 'use-immer';

export default function Form() {
	// const [mountain, setMountain] = useState({
	const [mountain, updateMountain] = useImmer({
		name: 'Mount Everest',
		values: {
			altitude: 8848,
			mountainRange: 'Himalayas',
		},
	});

	/*-----------------------------------------------------------------------------mk--
   | Updating with Spread Syntax
   |----------------------------------------------------------------------------------
   | 
   
	function handleNameChange(event) {
		event.preventDefault();

		setMountain({ ...mountain, name: event.target.value });
	}

	function handleAltitudeChange(event) {
		event.preventDefault();

		setMountain({
			...mountain,
			values: { ...mountain.values, altitude: event.target.value },
		});
	}

	function handleMountainRangeChange(event) {
		event.preventDefault();

		setMountain({
			...mountain,
			values: { ...mountain.values, mountainRange: event.target.value },
		});
	}*/

	/*-----------------------------------------------------------------------------mk--
   | Updating with useImmer Hook
   |----------------------------------------------------------------------------------
   | 
   */
	function handleNameChange(event) {
		updateMountain((draft) => {draft.name = event.target.value});
	}

	function handleAltitudeChange(event) {
		updateMountain((draft) => {draft.values.altitude = event.target.value});
	}

	function handleMountainRangeChange(event) {
		updateMountain((draft) => {draft.values.mountainRange = event.target.value});
	}

	return (
		<StyledForm>
			<StyledInputContainer>
				<label htmlFor="name">Name:</label>
				<input id="name" value={mountain.name} onChange={handleNameChange} />
			</StyledInputContainer>

			<StyledInputContainer>
				<label htmlFor="altitude">Altitude:</label>
				<input
					id="altitude"
					value={mountain.values.altitude}
					onChange={handleAltitudeChange}
				/>
			</StyledInputContainer>

			<StyledInputContainer>
				<label htmlFor="mountainRange">Mountain Range:</label>
				<input
					id="mountainRange"
					value={mountain.values.mountainRange}
					onChange={handleMountainRangeChange}
				/>
			</StyledInputContainer>

			<output>
				<i>{mountain.name}</i>
				{' is '}
				{mountain.values.altitude}
				{' meters high'}
				<br />
				(and located in the {mountain.values.mountainRange})
			</output>
		</StyledForm>
	);
}
