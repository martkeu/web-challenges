import { useState } from 'react';

export default function useChronicle(initalValue) {
	const [timeline, setTimeline] = useState(initalValue);

	function setState(inputVal) {
		setTimeline([...timeline, inputVal]);
    }
    
    function resetState() {
        if (timeline.length > 1) {
            setTimeline(timeline.slice(0, -1));
        }
    }
    
    let currentValue = timeline.at(-1);

	return [currentValue, setState, resetState];
}
