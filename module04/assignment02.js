const submit = document.getElementById('submit')
const input = document.getElementById('query');

submit.onclick = async (e) => {
    e.preventDefault();
    const value_from_input = input.value;
    url = `https://api.tvmaze.com/search/shows?q=${value_from_input}`;
    const response = await fetch(url);
    const body = await response.text();
    const shows = JSON.parse(body);
    console.log(shows)
}
