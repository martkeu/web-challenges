// export default function Counter({people, setPeople}) {
export default function Counter({ onAdd, onSubtract }) {
	return (
		<>
			<h2>How many people would you like to visit us with?</h2>
			<div className="counter__buttons-container">
				<button
					type="button"
					className="counter__button"
					aria-label="increment people count"
					//onClick={() => setPeople(people + 1)}
					onClick={onAdd}
				>
					+
				</button>
				<button
					type="button"
					className="counter__button"
					aria-label="decrement people count"
					//onClick={() => setPeople(people - 1)}
					onClick={onSubtract}
				>
					-
				</button>
			</div>
		</>
	);
}
