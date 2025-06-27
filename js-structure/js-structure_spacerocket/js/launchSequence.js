// Implement the launch sequence function here and export it as the default export.
import { NFSAT } from './payload/satellites.js';
import { FISHSAT } from './payload/satellites.js';

import { loadPayload } from './core/load.js';
import { fuel } from './core/fuel.js';
import { countdown } from './core/countdown.js';
import { liftoff } from './core/liftoff.js';
import { deployPayload } from './core/deploy.js';


export default function launch() { //Funktionsname beliebig wählbar!
	loadPayload(NFSAT);
	loadPayload(FISHSAT);

	fuel(); //setzt rocket.fuel = true

	for (let i = 0; i < 5; i++) {
		countdown();
	}

    liftoff();
    
	deployPayload();
}
