import { cards } from '../../utils/card-data.js';
import { Card } from '../Card/Card.js';

export function CardList() {
	const cardList = document.createElement('section');
	cardList.classList.add('card-list');

	cards.forEach((card) => {
		const cardElement = Card(card);
		cardList.append(cardElement);
	});

	return cardList;
}
