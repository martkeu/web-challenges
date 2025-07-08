// import { useState } from 'react';
import './FavoriteButton.css';
import StarFilled from './star-filled.svg?react';
import Star from './star.svg?react';

export default function FavoriteButton({ onToggleFavorite, isFavorite, id }) {
	// const [isFavorite, setIsFavorite] = useState(false);

	return (
		<button
			className="favorite-button"
			// onClick={() => {
			// 	setIsFavorite(!isFavorite);
            // }}
            //Click-Handling for Favorite-Btn --mk
            onClick={() => onToggleFavorite(id)}
			aria-label="favorite"
		>
			{isFavorite ? <StarFilled /> : <Star />}
		</button>
	);
}
