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
// https://github.com/googlemaps/js-polyline-codec/blob/d0b4f42f6409d7e4d68f317578cf23c61c5ed939/src/index.ts
// Stolen from Google, respectfully
function decodePolyline(encodedPath) {
    /**
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    const factor = Math.pow(10, 5);

    const len = encodedPath.length;
  
    // For speed we preallocate to an upper bound on the final length, then
    // truncate the array before returning.
    const path = new Array(Math.floor(encodedPath.length / 2));
    let index = 0;
    let lat = 0;
    let lng = 0;
    let pointIndex = 0;
  
    // This code has been profiled and optimized, so don't modify it without
    // measuring its performance.
    for (; index < len; ++pointIndex) {
      // Fully unrolling the following loops speeds things up about 5%.
      let result = 1;
      let shift = 0;
      let b;
      do {
        // Invariant: "result" is current partial result plus (1 << shift).
        // The following line effectively clears this bit by decrementing "b".
        b = encodedPath.charCodeAt(index++) - 63 - 1;
        result += b << shift;
        shift += 5;
      } while (b >= 0x1f); // See note above.
      lat += result & 1 ? ~(result >> 1) : result >> 1;
  
      result = 1;
      shift = 0;
      do {
        b = encodedPath.charCodeAt(index++) - 63 - 1;
        result += b << shift;
        shift += 5;
      } while (b >= 0x1f);
      lng += result & 1 ? ~(result >> 1) : result >> 1;
  
      path[pointIndex] = [lat / factor, lng / factor];
    }

    path.length = pointIndex;
  
    return path;
}

(async () => {
    const scroll = document.getElementById("scroll")

    const urlParams = new URLSearchParams(window.location.search)
    const addr = urlParams.get("addr")
    if (addr == undefined) {
        scroll.textContent = "pls specify the start"
        return
    }

    scroll.textContent =  `${addr} → Karaportti 2`

    start = await getLocation(addr)
    end = await getLocation("Karaportti 2")

    console.log(start)
    console.log(end)

    startPos = (await start.json()).features[0].geometry.coordinates
    endPos = (await end.json()).features[0].geometry.coordinates

    let response = await (await getItinerary(startPos, endPos)).json()
    let geometry = response.data.plan.itineraries[0].legs[0].legGeometry
    let polyline = decodePolyline(geometry.points)
    console.assert(geometry.length == polyline.length)
    centerX = 0
    centerY = 0
    for (const [x, y] of polyline) {
        centerX += x / polyline.length
        centerY += y / polyline.length
    }
    console.log(centerX, centerY)

    const map_url = `https://cdn.digitransit.fi/map/v2/hsl-map-en-256/{z}/{x}/{y}@2x.png?digitransit-subscription-key=${key}`
    var map = L.map('map').setView([centerX, centerY], 15);
    L.tileLayer(map_url, {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    let line = L.polyline(polyline, {color: '#007AC9'}).addTo(map);
    map.fitBounds(line.getBounds())

    return
})()