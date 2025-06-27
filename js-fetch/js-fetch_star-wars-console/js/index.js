console.clear();

const url = "https://swapi.py4e.com/api/people/";

async function fetchData() {
    const resp = await fetch(url);
    const data = await resp.json();

    // console.log(data);
    console.log(data.results[2].eye_color);
}

fetchData();
