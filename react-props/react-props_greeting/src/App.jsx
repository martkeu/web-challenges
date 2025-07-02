export default function App() {
    //   return <h1>Replace me with your component!</h1>;
    return (
        <>
            <Greeting name="Erwin" />

            <Greeting name="Florian" />
            <Greeting name="Felix" />
            <Greeting name="Sven" />
        </>
    );
}

function Greeting({ name }) {
    const coaches = ['Florian', 'Felix', 'Sven'];

    return <h1>Hello, {coaches.includes(name) ? `Coach ${name}` : name}!</h1>;
}
