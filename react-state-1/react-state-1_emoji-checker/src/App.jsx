import { useState } from 'react';
import './styles.css';

export default function App() {
	const [code, setCode] = useState('');

	const validCode = '🐡🐠🐋';

	return (
		<div className="container">
			<div className="button-container">
				{console.log(code)}
				<button
					type="button"
					onClick={() => setCode((code) => code + '🐡')}
				>
					<span role="img" aria-label="Pufferfish">
						🐡
					</span>
				</button>

				<button
					onClick={() => setCode((code) => code + '🐋')}
				>
					<span role="img" aria-label="Whale">
						🐋
					</span>
				</button>

				<button
					type="button"
					onClick={() => setCode((code) => code + '🐠')}
				>
					<span role="img" aria-label="Clownfish">
						🐠
					</span>
				</button>
			</div>

			<button
				type="button"
				onClick={() => setCode('')}
			>
				Reset
			</button>

			{code === validCode && <p>Valid code! 🎉</p>}
		</div>
	);
}
