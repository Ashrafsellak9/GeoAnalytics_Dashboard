import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";


const App = () => {
  const position = [48.8566, 2.3522];

  return (
    <div>
      <h1>GeoAnalytics Dashboard</h1>
      <MapContainer 
         center={position}
         zoom={12}
         style={
          {
            height: "80vh",
            width: "100%"
          }
         }
      >
      <TileLayer 
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      </MapContainer>
    </div>
  )
}

export default App;