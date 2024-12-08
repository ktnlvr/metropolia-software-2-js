const submit = document.getElementById('submit')
const input = document.getElementById('query');
const output = document.getElementById('results');

submit.onclick = async (e) => {
    e.preventDefault();
    const value_from_input = input.value;
    url = `https://api.chucknorris.io/jokes/search?query=${value_from_input}`;
    const response = await fetch(url);
    const body = await response.text();
    const { result } = JSON.parse(body);

    output.innerHTML = "";
    for (const { value } of result) {
        const root = document.createElement('article');

        root.innerHTML = `
            <p>${value}</p>
        `;

        output.appendChild(root);
    }
}
