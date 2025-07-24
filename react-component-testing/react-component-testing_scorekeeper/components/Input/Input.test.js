import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from '.';

test('renders a label and an input with the correct attributes', () => {
	const handleChange = jest.fn();

	render(
		<Input
			labelText="Name"
			placeholder="Your Name"
			name="nameValue"
			value="John Doe"
			onChange={handleChange}
			required
		/>
	);

	const input = screen.getByLabelText('Name');

	expect(input).toBeInTheDocument();
	expect(input).toHaveAttribute('id', 'nameValue');
	expect(input).toHaveAttribute('name', 'nameValue');
	expect(input).toHaveAttribute('type', 'text');
	expect(input).toHaveAttribute('value', 'John Doe');
	expect(input).toHaveAttribute('placeholder', 'Your Name');
	expect(input).toBeRequired();
});


test('calls callback on every user input', async () => {
	const handleChange = jest.fn();

   render(
      <Input
         labelText="Name"
         name="name.input"
         onChange={handleChange}
      />);

	const user = userEvent.setup();
	const input = screen.getByLabelText('Name');

	expect(input).toBeInTheDocument();
	expect(handleChange).toHaveBeenCalledTimes(0);

	await user.type(input, 'John');

	expect(handleChange).toHaveBeenCalledTimes(4);
});
