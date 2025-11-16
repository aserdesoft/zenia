import React, { useState, useEffect } from 'react';
import HeroSection from '../components/common/HeroSection.jsx';
import SearchBar from '../components/common/SearchBar.jsx';
import Card from '../components/common/Card.jsx';
import { useDebounce } from '../hooks/useDebounce.js';
import documentationImg from '../assets/docuGeneric.jpg';
import './styles/Documentation.css';

function Documentacion() {
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearching, setIsSearching] = useState(false);

    const [offices] = useState([
        {
            id: 1,
            nombre: 'Registro Civil Centro',
            direccion: 'Av. Hidalgo #120, Col. Centro',
            telefono: '33-1000-2000',
            horario: 'Lun-Vie 8:00 AM - 4:00 PM',
            servicios: ['Actas de nacimiento', 'Matrimonios', 'Defunciones']
        },
        {
            id: 2,
            nombre: 'Oficina de Pasaportes',
            direccion: 'Blvd. Independencia #456, Col. Americana',
            telefono: '33-2000-3000',
            horario: 'Lun-Vie 9:00 AM - 3:00 PM',
            servicios: ['Pasaporte', 'Renovación', 'Citas']
        },
        {
            id: 3,
            nombre: 'Secretaría de Movilidad',
            direccion: 'Av. Patria #789, Col. Jardines',
            telefono: '33-3000-4000',
            horario: 'Lun-Sáb 9:00 AM - 2:00 PM',
            servicios: ['Licencias', 'Placas', 'Multas']
        },
        {
            id: 4,
            nombre: 'INE Módulo Chapultepec',
            direccion: 'Av. Chapultepec #321, Col. Moderna',
            telefono: '33-4000-5000',
            horario: 'Lun-Sáb 8:00 AM - 3:00 PM',
            servicios: ['Credencial INE', 'Reposición', 'Cambio de domicilio']
        }
    ]);

    const [filteredOffices, setFilteredOffices] = useState(offices);
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(() => {
        setIsSearching(true);
        const timer = setTimeout(() => {
            if (debouncedSearchTerm.trim() === '') {
                setFilteredOffices(offices);
            } else {
                const filtered = offices.filter(o =>
                    o.nombre.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
                    o.direccion.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
                    o.servicios.some(s => s.toLowerCase().includes(debouncedSearchTerm.toLowerCase()))
                );
                setFilteredOffices(filtered);
            }
            setIsSearching(false);
        }, 200);
        return () => clearTimeout(timer);
    }, [debouncedSearchTerm, offices]);

    const handleSearch = (term) => {
        setSearchTerm(term);
        setIsSearching(true);
    };

    return (
        <div className="documentation">
            <HeroSection title="Documentación" description="Encuentra donde obtener los documentos que puedes llegar a necesitar" image={documentationImg} />
            <div className="documentation-content">
                <SearchBar 
                    onSearch={handleSearch}
                    placeholder="Buscar por nombre, dirección o trámite..."
                    ariaLabel="Buscar oficinas de documentación"
                />

                {isSearching && searchTerm && (
                    <div className="search-status">
                        <span>Buscando...</span>
                    </div>
                )}

                {!isSearching && debouncedSearchTerm && (
                    <div className="search-results-count">
                        {filteredOffices.length} resultado{filteredOffices.length !== 1 ? 's' : ''} encontrado{filteredOffices.length !== 1 ? 's' : ''}
                    </div>
                )}

                <div className="documentation-list">
                    {filteredOffices.map(o => (
                        <Card
                            key={o.id}
                            title={o.nombre}
                            description={`${o.direccion} • ${o.telefono} • ${o.horario}`}
                            image={documentationImg}
                            onDetailsClick={() => {
                                alert(`Detalles de ${o.nombre}:\n\nDirección: ${o.direccion}\nTeléfono: ${o.telefono}\nHorario: ${o.horario}\nServicios: ${o.servicios.join(', ')}`);
                            }}
                        />
                    ))}
                </div>

                {!isSearching && filteredOffices.length === 0 && debouncedSearchTerm && (
                    <div className="no-results">
                        <p>No se encontraron oficinas que coincidan con "<strong>{debouncedSearchTerm}</strong>"</p>
                        <p className="no-results-hint">Intenta buscar por nombre, dirección o trámite</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Documentacion;