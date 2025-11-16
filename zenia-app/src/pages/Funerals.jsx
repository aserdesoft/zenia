import React, { useState, useEffect } from 'react';
import HeroSection from '../components/common/HeroSection.jsx';
import SearchBar from '../components/common/SearchBar.jsx';
import Card from '../components/common/Card.jsx';
import { useDebounce } from '../hooks/useDebounce.js';
import funeralsImg from '../assets/funeralesGeneric.jpg';
import './styles/Funerals.css';

function Funerals() {
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearching, setIsSearching] = useState(false);

    const [services] = useState([
        {
            id: 1,
            nombre: 'Funeraria La Paz',
            direccion: 'Av. Reforma #123, Col. Centro',
            telefono: '33-1111-0000',
            horario: '24 horas',
            servicios: ['Velatorio', 'Traslados', 'Cremación']
        },
        {
            id: 2,
            nombre: 'Servicios Fúnebres Eternidad',
            direccion: 'Calle Ocaso #456, Col. Moderna',
            telefono: '33-2222-3333',
            horario: '24 horas',
            servicios: ['Cremación', 'Panteón', 'Ataúdes']
        },
        {
            id: 3,
            nombre: 'Agencia Memorial',
            direccion: 'Blvd. Vida #789, Col. Jardines',
            telefono: '33-4444-5555',
            horario: 'Lun-Dom 8:00 AM - 10:00 PM',
            servicios: ['Planes funerarios', 'Velatorio', 'Asesoría']
        }
    ]);

    const [filteredServices, setFilteredServices] = useState(services);
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(() => {
        setIsSearching(true);
        const timer = setTimeout(() => {
            if (debouncedSearchTerm.trim() === '') {
                setFilteredServices(services);
            } else {
                const filtered = services.filter(s =>
                    s.nombre.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
                    s.direccion.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
                    s.servicios.some(x => x.toLowerCase().includes(debouncedSearchTerm.toLowerCase()))
                );
                setFilteredServices(filtered);
            }
            setIsSearching(false);
        }, 200);
        return () => clearTimeout(timer);
    }, [debouncedSearchTerm, services]);

    const handleSearch = (term) => {
        setSearchTerm(term);
        setIsSearching(true);
    };

    return (
        <div className="funerals">
            <HeroSection title="Servicios fúnebres" description="Para aquellos momentos difíciles" image={funeralsImg} />
            <div className="funerals-content">
                <SearchBar 
                    onSearch={handleSearch}
                    placeholder="Buscar por nombre, dirección o servicio..."
                    ariaLabel="Buscar servicios fúnebres"
                />

                {isSearching && searchTerm && (
                    <div className="search-status">
                        <span>Buscando...</span>
                    </div>
                )}

                {!isSearching && debouncedSearchTerm && (
                    <div className="search-results-count">
                        {filteredServices.length} resultado{filteredServices.length !== 1 ? 's' : ''} encontrado{filteredServices.length !== 1 ? 's' : ''}
                    </div>
                )}

                <div className="funerals-list">
                    {filteredServices.map(s => (
                        <Card
                            key={s.id}
                            title={s.nombre}
                            description={`${s.direccion} • ${s.telefono} • ${s.horario}`}
                            image={funeralsImg}
                            onDetailsClick={() => {
                                alert(`Detalles de ${s.nombre}:\n\nDirección: ${s.direccion}\nTeléfono: ${s.telefono}\nHorario: ${s.horario}\nServicios: ${s.servicios.join(', ')}`);
                            }}
                        />
                    ))}
                </div>

                {!isSearching && filteredServices.length === 0 && debouncedSearchTerm && (
                    <div className="no-results">
                        <p>No se encontraron servicios que coincidan con "<strong>{debouncedSearchTerm}</strong>"</p>
                        <p className="no-results-hint">Intenta buscar por nombre, dirección o servicio</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Funerals;