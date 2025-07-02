export default function App() {
    return (
        <>
            <Smiley isHappy={true} />

            <Smiley isHappy={false} />

            <Smiley />
        </>
    );
}

function Smiley({ isHappy }) {

    return (
		<h1>
            {isHappy ? '😄' : '😒'} 
		</h1>
	);
}
