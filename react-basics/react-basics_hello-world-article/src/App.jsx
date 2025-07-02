import './styles.css';

export default function App() {
    //return <div>Replace me with your Component!</div>;
    
	return <HelloWorldArticle />;
}

function HelloWorldArticle() {
	return (
		<article>
            <h1>Titel</h1>
            
			<h2>Untertitel</h2>

			<p>Absatz 1</p>
			<p>Absatz 2</p>
		</article>
	);
}
