
// export default function Form({name, email, setName, setEmail}) {
export default function Form({onCreateUser}) {
	function handleSubmit(event) {
        event.preventDefault();
        
        // setName(event.target.elements.name.value);
        // setEmail(event.target.elements.email.value);
        const name  = event.target.elements.name.value;
        const email = event.target.elements.email.value;

        onCreateUser(name, email);

        const form = document.querySelector('.form');

        form.reset();
	}

	return (
		<form className="form" aria-labelledby="user-details" onSubmit={handleSubmit}>
            <h2 id="user-details">Please enter your details here!</h2>
            
			<label htmlFor="name">Name: </label>
            <input id="name" name="name" type="text" placeholder="John Doe" />
            
			<label htmlFor="email">Email: </label>
			<input id="email" name="email" type="email" placeholder="john@doe.com" />

			<button className="form__submit-button" type="submit">
				Submit
			</button>
		</form>
	);
}
