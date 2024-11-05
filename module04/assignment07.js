// Interestingly, this is the key used in the documentation
// I didn't have to sign up for it
const key = "a1e437f79628464c9ea8d542db6f6e94";

const headers = new Headers();

headers.append("Content-Type", "application/json");

headers.append("digitransit-subscription-key", key)
headers.append("Access-Control-Allow-Origin", "*")

async function getLocation(location) {
    const url = `https://api.digitransit.fi/geocoding/v1/search?text=${location}&size=1&layers=address&lang=en`

    return fetch(url, {
        method: "GET",
        headers,
    });
}

async function getItinerary(start, end) {
    const url = `https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql`

    let [start_lon, start_lat] = start
    let [end_lon, end_lat] = end

    let graphql = `
    {
        plan(
            from: {lat: ${start_lat}, lon: ${start_lon}}
            to: {lat: ${end_lat}, lon: ${end_lon}}
            numItineraries: 1
  	        transportModes: [{mode: WALK}]
        ) {
            itineraries {
                legs {
                    legGeometry {
                        length,
                        points,
                    }
                }
            }
        }
    }
    `;

    return fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify({'query': graphql})
    })
}

// https://developers.google.com/maps/documentation/utilities/polylinealgorithm

// https://developers.google.com/maps/documentation/utilities/polylinealgorithm

function decodePolylineNumber(str) {
    chunks = str
      .split('')
      .map((x) => (x.charCodeAt(0) - 63) & 0b11111)
    let out = 0;
    for (let i = 0; i < chunks.length; i++)
      out |= (chunks[i] ^ 0) << (5 * i)
    return (~out >> 1) / 1e5
}

function decodePolyline(polylineStr) {
}

(async () => {
    const urlParams = new URLSearchParams(window.location.search)
    const addr = urlParams.get("addr")
    if (addr == undefined)
        return

    start = await getLocation(addr)
    end = await getLocation("Karaportti 2")

    console.log(start)
    console.log(end)

    startPos = (await start.json()).features[0].geometry.coordinates
    endPos = (await end.json()).features[0].geometry.coordinates

    console.log(startPos, endPos)

    let response = await (await getItinerary(startPos, endPos)).json()
    console.log(response)
    let geometry = response.data.plan.itineraries[0].legs[0].legGeometry
    console.log(geometry.length)
    console.log(geometry.points)

    var map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer(`https://tile.openstreetmap.org/{z}/{x}/{y}.png`, {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    console.log(polyline.length)

    return
})()