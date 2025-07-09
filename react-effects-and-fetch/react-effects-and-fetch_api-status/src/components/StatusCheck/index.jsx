import { useState } from 'react';
import './StatusCheck.css';

const apiStatusUrl = 'https://example-apis.vercel.app/api/status';

export default function StatusCheck() {
	// let statusIcon = '⁉️';
	// Something needs to change here…
	// ↙️
	const [statusIcon, setStatusIcon] = useState('⁉️');

	function handleCheckApiStatus() {
		/**
		 * Hint 1:
		 * Use the `fetch()` function to send a request to `apiStatusUrl`.
		 *
		 * Hint 2:
		 * The `fetch()` function returns a promise that resolves to a Response
		 * object.
		 *
		 * Hint 3:
		 * The Response object has a `ok` property which is true if the response
		 * is okay and false if it is not.
		 **/
        async function getApiStatus() {
            setStatusIcon('⏳');

			try {
                const resp = await fetch(apiStatusUrl); //console.dir(resp)
                
				resp.ok ? setStatusIcon('✅') : setStatusIcon('❌');

				const data = await resp.json();

				console.log(data);
            } catch (error) {
                setStatusIcon('🚨');
                
				console.error(error);
			}
		}

		console.dir(getApiStatus());
		getApiStatus();
	}

	return (
		<article className="status-check">
			<div className="status-check__wrapper">
				<h2 className="status-check__heading">Status:</h2>
				<span className="status-check__icon">{statusIcon}</span>
			</div>

			<button
				type="button"
				className="status-check__button"
				onClick={handleCheckApiStatus}
			>
				Check API Status
			</button>
		</article>
	);
}
