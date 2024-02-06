async function fetchCreations(username) {
    const res = await fetch(`http://localhost:4000/creation/${username}`);
    const data = await res.json();
    return data;
}
export default fetchCreations;