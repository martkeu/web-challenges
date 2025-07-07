import { useState } from 'react';

import './FavoriteButton.css';
import StarFilled from './star-filled.svg?react';
import Star from './star.svg?react';

export default function FavoriteButton() {
	// const isFavorite = false;// This should be a state variable.
	const [isFavorite, setIsFavorite] = useState(false);

	return (
		<button
			className="favorite-button"
			//onClick={() => {console.log('favorite button clicked');}}
			onClick={() => setIsFavorite(!isFavorite)}
			aria-label="favorite"
		>
			{isFavorite ? <StarFilled /> : <Star />}
		</button>
	);
}
