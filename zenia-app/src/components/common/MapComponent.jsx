import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './styles/MapComponent.css';

// Fix para iconos de leaflet (problema conocido con módulos ES)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

export default function MapComponent({ latitude = 20.6596, longitude = -103.2497, title = 'Ubicación' }) {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) {
      // Si el mapa ya existe, solo actualizar la vista
      map.current.setView([latitude, longitude], 15);
      return;
    }

    // Crear nuevo mapa
    if (mapContainer.current) {
      map.current = L.map(mapContainer.current).setView([latitude, longitude], 15);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map.current);

      // Añadir marcador
      L.marker([latitude, longitude])
        .addTo(map.current)
        .bindPopup(title)
        .openPopup();
    }

    // Cleanup al desmontar
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [latitude, longitude, title]);

  return (
    <div className="map-component">
      <h3>Ubicación en el mapa</h3>
      <div ref={mapContainer} style={{ height: '400px', width: '100%', borderRadius: '6px' }} />
    </div>
  );
}
