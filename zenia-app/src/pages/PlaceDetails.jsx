import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import farmaciesData from '../data/farmaciesData';
import foodData from '../data/foodData';
import entertainmentData from '../data/entertainmentData';
import documentationData from '../data/documentationData';
import funeralsData from '../data/funeralsData';
import '../pages/styles/PlaceDetails.css';
import farmaciesImg from '../assets/farmaciaGeneric.jpg';
import foodImg from '../assets/comidaGeneric.jpg';
import entertainmentImg from '../assets/esparcimientoGen.jpeg';
import documentationImg from '../assets/docuGeneric.jpg';
import funeralsImg from '../assets/funeralesGeneric.jpg';

const dataMap = {
  farmacias: { data: farmaciesData, image: farmaciesImg, title: 'Farmacia' },
  comida: { data: foodData, image: foodImg, title: 'Lugar de comida' },
  esparcimiento: { data: entertainmentData, image: entertainmentImg, title: 'Lugar de esparcimiento' },
  documentacion: { data: documentationData, image: documentationImg, title: 'Oficina' },
  funerales: { data: funeralsData, image: funeralsImg, title: 'Servicio funerario' }
};

export default function PlaceDetails() {
  const { category, id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

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

  return (
    <div className="place-details" style={{ padding: 24 }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: 12 }}>← Volver</button>
      <h1>{item.nombre}</h1>
      {img && <img src={img} alt={item.nombre} style={{ maxWidth: 400, width: '100%', height: 'auto' }} />}
      <p><strong>Dirección:</strong> {item.direccion}</p>
      <p><strong>Teléfono:</strong> {item.telefono}</p>
      <p><strong>Horario:</strong> {item.horario}</p>
      <div>
        <strong>Servicios:</strong>
        <ul>
          {item.servicios && item.servicios.map((s, i) => <li key={i}>{s}</li>)}
        </ul>
      </div>
    </div>
  );
}
