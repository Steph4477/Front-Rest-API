export async function getAPIContent() {
    try {
        const apiData = await fetch("https://pokeapi.co/api/v2/")
            .then(res => res.json());
            console.log(apiData);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}