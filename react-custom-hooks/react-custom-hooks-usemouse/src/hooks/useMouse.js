import { useState, useEffect } from 'react';

export default function useMouse() {
	const [cursorPosition, setCursorPosition] = useState([0, 0]);

	useEffect(() => {
		const page = document.body;

		page.addEventListener('mousemove', (event) => {
			setCursorPosition([event.clientX, event.clientY]);
		});
	}, [cursorPosition]);

	console.log(cursorPosition);

	return cursorPosition;
}
