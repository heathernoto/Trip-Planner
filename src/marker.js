
import mapbox from "mapbox-gl";  

const buildMarker = function (label, coordinates) {
  const markerDomEl = document.createElement("div"); // Create a new, detached DIV
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  if (label === "activity")
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
  else if (label === "hotel")
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
  else if (label === "restaurant")
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";

  return new mapboxgl.Marker(markerDomEl).setLngLat(coordinates);
};

export default buildMarker
