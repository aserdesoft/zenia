import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import farmaciesData from '../data/farmaciesData';
import foodData from '../data/foodData';
import entertainmentData from '../data/entertainmentData';
import documentationData from '../data/documentationData';
import funeralsData from '../data/funeralsData';
import MapComponent from '../components/common/MapComponent';
import '../pages/styles/PlaceDetails.css';
import farmaciesImg from '../assets/farmaciaGeneric.jpg';
import foodImg from '../assets/comidaGeneric.jpg';
import entertainmentImg from '../assets/esparcimientoGen.jpg';
import documentationImg from '../assets/docuGeneric.jpg';
import funeralsImg from '../assets/funeralesGeneric.jpg';
import { map } from 'leaflet';

// Bundle entertainment images so we can reference them by id (filename)
// Se debe importar para cada categoria
const entertainmentImages = import.meta.glob('../assets/entertainmentImages/*.jpg', { eager: true, as: 'url' });
const foodImages = import.meta.glob('../assets/foodImages/*.{jpg,png,jpeg,webp}', { eager: true, as: 'url' });
const funeralsImages = import.meta.glob('../assets/funeralsImages/*.{jpg,png,jpeg,webp}', { eager: true, as: 'url' });
const documentationImages = import.meta.glob('../assets/documentationImages/*.{jpg,png,jpeg,webp}', { eager: true, as: 'url' });
const farmaciesImages = import.meta.glob('../assets/farmaciesImages/*.{jpg,png,jpeg,webp}', { eager: true, as: 'url' });

const dataMap = {
  farmacias: { data: farmaciesData, image: farmaciesImg, title: 'Farmacias' },
  comida: { data: foodData, image: foodImg, title: 'Comida' },
  esparcimiento: { data: entertainmentData, image: entertainmentImg, title: 'Esparcimiento' },
  documentacion: { data: documentationData, image: documentationImg, title: 'Documentación' },
  funerales: { data: funeralsData, image: funeralsImg, title: 'Servicios fúnebres' }
};

export default function PlaceDetails() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Extraer category del pathname (ej: /farmacias/1 -> farmacias)
  const pathParts = location.pathname.split('/').filter(Boolean);
  const category = pathParts[0];

  const stateItem = location.state && location.state.item;

  const mapEntry = dataMap[category];
  const list = mapEntry ? mapEntry.data : [];
  const img = mapEntry ? mapEntry.image : null;

  const item = stateItem || list.find(x => String(x.id) === String(id));

  if (!mapEntry) {
    return (
      <div style={{ padding: 24 }}>
        <h2>Categoría no encontrada</h2>
        <p>La categoría <strong>{category}</strong> no existe.</p>
        <button onClick={() => navigate(-1)}>Volver</button>
      </div>
    );
  }

  if (!item) {
    return (
      <div style={{ padding: 24 }}>
        <h2>Detalle no encontrado</h2>
        <p>No se encontró el elemento solicitado en la categoría <strong>{category}</strong>.</p>
        <button onClick={() => navigate(-1)}>Volver</button>
      </div>
    );
  }

  // Determine which image to show
  // Aqui se implementa la logica para buscar la imagen especifica para cada categoria
  // Añadir la logica para cada categoria
  let imageSrc = img;
  if (category === 'esparcimiento' && item) {
    for (const p in entertainmentImages) {
      const filename = p.split('/').pop();
      const name = filename.split('.').shift();
      if (String(name) === String(item.id)) {
        imageSrc = entertainmentImages[p];
        break;
      }
    }
  } else if (category === 'comida' && item) {
    for (const p in foodImages) {
      const filename = p.split('/').pop();
      const name = filename.split('.').shift();
      if (String(name) === String(item.id)) {
        imageSrc = foodImages[p];
        break;
      }
    }
  } else if (category === 'funerales' && item) {
    for (const p in funeralsImages) {
      const filename = p.split('/').pop();
      const name = filename.split('.').shift();
      if (String(name) === String(item.id)) {
        imageSrc = funeralsImages[p];
        break;
      }
    }
  } else if (category === 'documentacion' && item) {
    for (const p in documentationImages) {
      const filename = p.split('/').pop();
      const name = filename.split('.').shift();
      if (String(name) === String(item.id)) {
        imageSrc = documentationImages[p];
        break;
      }
    }
  } else if (category === 'farmacias' && item) {
    for (const p in farmaciesImages) {
      const filename = p.split('/').pop();
      const name = filename.split('.').shift();
      if (String(name) === String(item.id)) {
        imageSrc = farmaciesImages[p];
        break;
      }
    }
  }

  return (
    <div className="place-details-wrapper">
        
        {/* Botón Volver */}
        <div className="header-section">
            <button 
                className="btn-volver" 
                onClick={() => {
                  switch(mapEntry.title){
                    case 'Farmacias':
                      navigate("/farmacias")
                    break;
                    break;
                    case 'Comida':
                      navigate("/comida")
                    break;
                    break;
                    case 'Servicios fúnebres':
                      navigate("/funerales")
                    break;
                    case 'Documentación':
                      navigate("/documentacion")
                    break;
                    case 'Esparcimiento':
                      navigate("/esparcimiento")
                    break;
                    default:navigate("/")
                  }
                }}
            >
                Volver a {mapEntry.title}
            </button>
        </div>

        {/* CONTENIDO PRINCIPAL (Imagen y Detalles) - Dos Columnas */}
        <div className="main-info-grid">
            
            {/* COLUMNA IZQUIERDA: IMAGEN */}
            <div className="image-column">
              {/* La clase place-featured-image reemplaza el estilo en línea de la imagen */}
              {imageSrc && <img src={imageSrc} alt={item.nombre} className="place-featured-image" />}
            </div>
            
            {/* COLUMNA DERECHA: INFORMACIÓN DETALLADA */}
            <div className="details-column">
                
                <h1 className="place-title">{item.nombre}</h1>

                {/*Posible descripción */}
                <p className="place-description">
                  {item.slogan || "Aquí va una breve descripción."}
                </p>
                {/* Detalles Importantes: Dirección, Teléfono, Horario (usando las nuevas clases) */}
                <p className="detail-address">
                    <strong>Dirección:</strong> {item.direccion}
                </p>
                <p className="detail-phone">
                    <strong>Teléfono:</strong> {item.telefono}
                </p>
                <p className="detail-schedule">
                    <strong>Horario:</strong> {item.horario}
                </p>

                {/* Servicios */}
                {item.servicios && item.servicios.length > 0 && (
                    <div className="services-list-box">
                        <h3 className="section-subtitle">Servicios Principales:</h3>
                        <ul className="services-list">
                            {item.servicios.map((s, i) => (
                                <li key={i} dangerouslySetInnerHTML={{ __html: s }} />
                            ))}
                        </ul>
                    </div>
                )}
                
                {/* Botón "Ver este lugar en Google Maps" */}
                {item.latitud && item.longitud && (
                    <a 
                        // Uso de item.latitud y item.longitud
                        href={`http://www.google.com/maps/search/?api=1&query=${item.latitud},${item.longitud}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-google-maps"
                    >
                        Ver este lugar en Google Maps
                    </a>
                )}
                
            </div>
        </div>

        {/* SECCIÓN DEL MAPA DE LA ZONA */}
        <div className="map-zone-section">
            <h2 className="map-title">Mapa de la zona</h2>
            
            {item.latitud && item.longitud && (
                <div className="map-embed-container">
                    <MapComponent latitude={item.latitud} longitude={item.longitud} title={item.nombre} />
                </div>
            )}
        </div>
        
    </div>
  );
}
