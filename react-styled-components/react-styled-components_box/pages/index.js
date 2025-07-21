import BoxWithClassName from '../components/BoxWithClassName/BoxWithClassName.js';
import styled from 'styled-components';
import { BoxWithStyledComponents } from '@/components/BoxWithStyledComponents.js';

// export default function HomePage() {
// 	return (
// 		<div>
// 			<BoxWithClassName />
// 			<BoxWithClassName isBlack />
// 		</div>
// 	);
// }

export default function HomePage() {
	return (
		<div>
			<BoxWithStyledComponents />
			<BoxWithStyledComponents $isBlack />
		</div>
	);
}
