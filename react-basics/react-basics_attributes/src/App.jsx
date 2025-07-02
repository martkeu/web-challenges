import './styles.css';

export default function App() {
	return <Article />;
}

function Article() {
	return (
		<article className="article">
			<h2 className="article__title">Titel</h2>

			<form>
				<label htmlFor="mainArticle">Label</label>
				<input type="text" id="mainArticle" />
			</form>

			<a
				href="https://de.wikipedia.org/wiki/Friedrich_Nietzsche"
				className="article__link"
			>
				Friedrich Nietzsche
			</a>
		</article>
	);
}
