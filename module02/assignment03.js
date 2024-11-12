let dogs = []
for (let i = 0; i < 6; i++)
    dogs.push(prompt(`Enter dog name ${i + 1}`))

dogs.sort()
dogs.reverse()

out = ""
for (const dog of dogs)
    out += `<li>${dog}</li>`
document.querySelector("#dogs").innerHTML = out
