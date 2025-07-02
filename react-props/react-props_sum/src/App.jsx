export default function App() {
    return (
        <>
            <Sum valueA={22} valueB={222} />
            <Sum valueA={-10} valueB={-100} />
            <Sum valueA="222" valueB="2222" />
            <Sum valueA="10" valueB="-100" />
            <Sum valueA="0" valueB="-100" />
        </>
    );
}

function Sum({ valueA, valueB }) {
    const op = Number(valueB) < 0 ? ' ' : '+';

    return (
		<h1>
            {`${valueA} ${op} ${valueB} = `} {Number(valueA) + Number(valueB)}
		</h1>
	);
}
