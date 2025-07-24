import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Player from '.';

test('renders player information and two buttons', () => {
	render(<Player name="John" score={100} />);

	const playerName = screen.getByText('John');
	const playerScore = screen.getByText('100');
	const allButtons = screen.getAllByRole('button');

	expect(playerName).toBeInTheDocument();
	expect(playerScore).toBeInTheDocument();
	expect(allButtons).toHaveLength(2);
});


test('calls callbacks when increasing or decreasing score', async () => {
	const handleDecreaseScore = jest.fn();
	const handleIncreaseScore = jest.fn();

	const user = userEvent.setup();

	render(
		<Player
			onDecreasePlayerScore={handleDecreaseScore}
			onIncreasePlayerScore={handleIncreaseScore}
		/>
	);

	const decreaseButton = screen.getByRole('button', { name: 'Decrease Score' });
	const increaseButton = screen.getByRole('button', { name: 'Increase Score' });

	await user.click(decreaseButton);
	expect(handleDecreaseScore).toHaveBeenCalledTimes(1);

	await user.click(increaseButton);
	await user.click(increaseButton);
	expect(handleIncreaseScore).toHaveBeenCalledTimes(2);
});
