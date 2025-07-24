import GlobalStyle from '../styles';
import Layout from '../components/Layout';

import { useState } from 'react';

const initialLights = [
	{
		id: 1,
		name: 'Living Room',
		isOn: false,
	},
	{
		id: 2,
		name: 'Kitchen',
		isOn: false,
	},
	{
		id: 3,
		name: 'Bedroom',
		isOn: false,
	},
	{
		id: 4,
		name: 'Bathroom',
		isOn: false,
	},
	{
		id: 5,
		name: 'Garage',
		isOn: false,
	},
	{
		id: 6,
		name: 'Porge',
		isOn: false,
	},
	{
		id: 7,
		name: 'Garden',
		isOn: false,
	},
	{
		id: 8,
		name: 'Office',
		isOn: false,
	},
];

export default function App({ Component, pageProps }) {
	const [lights, setLights] = useState(initialLights);
	const [isDimmed, setIsDimmed] = useState(false);

	function toggleLight(id) {
		setLights((lights) =>
			lights.map((light) =>
				light.id === id ? { ...light, isOn: !light.isOn } : light
			)
		);
	}

	const lightsOnCount = lights.filter(({ isOn }) => isOn).length;

	function allLightsOn() {
		setLights((lights) =>
			lights.map((light) => {
				return { ...light, isOn: true };
			})
		);

		setIsDimmed(false);
	}

	function allLightsOff() {
		setLights((lights) =>
			lights.map((light) => {
				return { ...light, isOn: false };
			})
		);

		setIsDimmed(true);
	}

	/*-----------------------------------------------------------------------------mk--
   | 
   |----------------------------------------------------------------------------------
   | Besser: - isDimmed = {lightsOnCount === 0}
   |         - State isDimmed ist nicht nötig!  
   */
	return (
		<Layout isDimmed={isDimmed}>
			<GlobalStyle />
			<Component
				{...pageProps}
				lights={lights}
				toggleLight={toggleLight}
				lightsOnCount={lightsOnCount}
				onAllLightsOn={allLightsOn}
				onAllLightsOff={allLightsOff}
			/>
		</Layout>
	);
}
