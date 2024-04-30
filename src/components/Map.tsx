import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
import { useLayoutEffect } from "preact/hooks";
export function Map() {
  useLayoutEffect(() => {
    let map = L.map("map").setView([51.505, -0.09], 13);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
  }, []);
  return <div id="map" style={{ width: 260, height: 260 }}></div>;
}
