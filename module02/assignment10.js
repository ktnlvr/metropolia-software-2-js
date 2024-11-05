let n = parseInt(prompt('Number of candidates'))
let names = []
let candidateLookup = {}
for (let i = 0; i < n; i++) {
    var candidateName = prompt(`Name of candidate ${i}`)
    candidate = {name: candidateName, votes: 0}
    names.push(candidate)
    candidateLookup[candidateName] = candidate
}

let v = parseInt(prompt('Number of voters'))
for (let i = 0; i < v; i++) {
    let c = prompt(`Voter ${i + 1}/${v} votes for...`)
    if (candidateLookup[c] == undefined) {
        console.log(`null vote ${c}`);
        continue;
    }
    candidateLookup[c].votes += 1
}

names.sort((a, b) => b.votes - a.votes)
let votes = names[0].votes
winners = names.filter((candidate) => candidate.votes === votes)

if (winners.length > 1) {
    console.log("More than one winner, retally the votes!")
} else {
    console.log(`${winners[0].name} is the winner`)
}

for (const w of names) {
    console.log(`${w.name}: ${w.votes} votes`)
}
