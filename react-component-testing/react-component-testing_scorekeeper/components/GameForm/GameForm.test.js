import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GameForm from './index';

jest.mock('next/router', () => ({
	useRouter() {
		return { push: jest.fn() };
	},
}));

test('renders two input fields and a button', () => {
	render(<GameForm />);

	const gameName = screen.getByLabelText('Name of game');
	const playerNames = screen.getByLabelText('Player names, separated by comma');
	const buttonName = screen.getByRole('button', { name: 'Create game' });

	expect(gameName).toBeInTheDocument();
	expect(playerNames).toBeInTheDocument();
	expect(buttonName).toBeInTheDocument();
});

test("renders a form with the accessible name 'Create a new game'", () => {
	render(<GameForm />);

	const form = screen.getByRole('form', { name: 'Create a new game' });

	expect(form).toBeInTheDocument();
});

test('submits the correct form data when every field is filled out', async () => {
	const handleCreateGame = jest.fn();
	const user = userEvent.setup();

	render(<GameForm onCreateGame={handleCreateGame} />);

	const gameNameInput = screen.getByLabelText('Name of game');
	const playerNameInput = screen.getByLabelText('Player names, separated by comma');
	const button = screen.getByRole('button', { name: 'Create game' });

	await user.type(gameNameInput, 'First game of the day');
	await user.type(playerNameInput, 'Bernd, Thomas, Erika');
	await user.click(button);

	expect(handleCreateGame).toHaveBeenCalledWith({
		playerNames: ['Bernd', 'Thomas', 'Erika'],
		nameOfGame: 'First game of the day',
	});
});

test('does not submit form if one input field is left empty', async () => {});
