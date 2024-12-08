fetch('https://api.chucknorris.io/jokes/random').then(async (res) => {
    console.log(JSON.parse(await res.text()).value)
})
