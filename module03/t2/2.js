const target = document.getElementById('target')
const a = document.createElement('li')
const b = document.createElement('li')
const c = document.createElement('li')

a.textContent = "First item"
b.textContent = "Second item"
c.textContent = "Third item"

b.classList.add("my-item")

target.appendChild(a)
target.appendChild(b)
target.appendChild(c)
