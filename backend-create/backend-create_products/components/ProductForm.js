import styled from 'styled-components';
import StyledButton from '@/components/Button';
import useSWR from 'swr';

export default function ProductForm() {
   const { mutate } = useSWR('/api/products');

   /*-----------------------------------------------------------------------------mk--
   | Daten senden
   |----------------------------------------------------------------------------------
   | - POST-Request an die Backend-API senden (Endpoint: /api/products)
   | - Formular-Daten als body im JSON-Format mitgeben
   | - Die API erstellt anhand der Daten einen neuen Eintrag in der DB
   | - SWR-mutate() revalidiert und aktualisiert bei Änderungen die Daten (refetch)
   */
   async function onSubmit(data) {
      const response = await fetch('/api/products', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			console.error(response.status);
			return;
		}

      mutate();
    }

	async function handleSubmit(event) {
		event.preventDefault();

      //Formular-Daten ermitteln
		const formData = new FormData(event.target);
      const productData = Object.fromEntries(formData);

      //Formular-Daten senden
		await onSubmit(productData);
      
      //Formular leeren
      event.target.reset();
      event.target.name.focus();
	}

	return (
		<StyledForm onSubmit={handleSubmit}>
			<StyledHeading>Add a new Fish</StyledHeading>

			<StyledLabel htmlFor="name">
				Name:
				<input type="text" id="name" name="name" />
			</StyledLabel>

			<StyledLabel htmlFor="description">
				Description:
				<input type="text" id="description" name="description" />
			</StyledLabel>

			<StyledLabel htmlFor="price">
				Price:
				<input type="number" id="price" name="price" min="0" />
			</StyledLabel>

			<StyledLabel htmlFor="currency">
				Currency:
				<select id="currency" name="currency">
					<option value="EUR">EUR</option>
					<option value="USD">USD</option>
					<option value="GBP">GBP</option>
				</select>
			</StyledLabel>

			<StyledButton type="submit">Submit</StyledButton>
		</StyledForm>
	);
}

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 5px;
`;

export const StyledHeading = styled.h2`
	text-align: center;
	color: var(--color-nemo);
`;

export const StyledLabel = styled.label`
	display: flex;
	justify-content: space-between;
	gap: 5px;
`;
