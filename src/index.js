console.log("Hi");

import mapboxgl from "mapbox-gl";
import buildMarker from "./marker";

mapboxgl.accessToken =
  "pk.eyJ1IjoiY2FtaWxhYnJvd25lIiwiYSI6ImNrZndxanBxMzE1eDgyenA5anJ1MW4wdDcifQ.DnNhzbu-oba7oLeCZkP5hg";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10", // mapbox has lots of different map styles available.
});

const marker = buildMarker("activity", [-74.009151, 40.705086]); // or [-87.6354, 41.8885]
marker.addTo(map);

// const marker = document.getElementById("marker")

// const markerDomEl = document.createElement("div"); // Create a new, detached DIV
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009151, 40.705086]).addTo(map);
