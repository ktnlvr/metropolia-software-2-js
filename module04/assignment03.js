const submit = document.getElementById('submit')
const input = document.getElementById('query');
const output = document.getElementById('results');

submit.onclick = async (e) => {
    e.preventDefault();
    const value_from_input = input.value;
    url = `https://api.tvmaze.com/search/shows?q=${value_from_input}`;
    const response = await fetch(url);
    const body = await response.text();
    const results = JSON.parse(body);

    output.innerHTML = "";
    for (const { show } of results) {
        const { name, url, summary } = show;
        const root = document.createElement('article');

        root.innerHTML = `
            <h2><a target="_blank" href=${url}>${name}</a></h2>
            <img src="${show.image?.medium}" alt="${name}">
            <div>${summary}</div>
        `;

        output.appendChild(root);
    }
}
