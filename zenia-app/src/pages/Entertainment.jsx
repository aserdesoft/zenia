import React, { useState, useEffect } from 'react';
import HeroSection from '../components/common/HeroSection.jsx';
import SearchBar from '../components/common/SearchBar.jsx';
import Card from '../components/common/Card.jsx';
import { useDebounce } from '../hooks/useDebounce.js';
import entertainmentImg from '../assets/esparcimientoGen.jpeg';
import './styles/Entertainment.css';

function Entertainment() {
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearching, setIsSearching] = useState(false);

    const [places] = useState([
        {
            id: 1,
            nombre: 'Parque Metropolitano',
            direccion: 'Av. Independencia s/n, Zapopan',
            telefono: '33-1234-0000',
            horario: 'Lun-Dom 6:00 AM - 8:00 PM',
            servicios: ['Caminata', 'Bicicleta', 'Lagos']
        },
        {
            id: 2,
            nombre: 'Museo de Arte',
            direccion: 'Calle Arte #456, Col. Centro',
            telefono: '33-5555-1111',
            horario: 'Mar-Dom 10:00 AM - 6:00 PM',
            servicios: ['Exposiciones', 'Visitas guiadas']
        },
        {
            id: 3,
            nombre: 'Cine Centro',
            direccion: 'Av. Patria #890, Col. Jardines',
            telefono: '33-7777-8888',
            horario: 'Lun-Dom 11:00 AM - 11:00 PM',
            servicios: ['Cine', 'Dulcería', '3D']
        },
        {
            id: 4,
            nombre: 'Biblioteca Central',
            direccion: 'Av. Juárez #321, Col. Centro',
            telefono: '33-9999-0000',
            horario: 'Lun-Sáb 9:00 AM - 7:00 PM',
            servicios: ['Lectura', 'Estudio', 'Préstamo de libros']
        }
    ]);

    const [filteredPlaces, setFilteredPlaces] = useState(places);
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(() => {
        setIsSearching(true);
        const timer = setTimeout(() => {
            if (debouncedSearchTerm.trim() === '') {
                setFilteredPlaces(places);
            } else {
                const filtered = places.filter(p =>
                    p.nombre.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
                    p.direccion.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
                    p.servicios.some(s => s.toLowerCase().includes(debouncedSearchTerm.toLowerCase()))
                );
                setFilteredPlaces(filtered);
            }
            setIsSearching(false);
        }, 200);
        return () => clearTimeout(timer);
    }, [debouncedSearchTerm, places]);

    const handleSearch = (term) => {
        setSearchTerm(term);
        setIsSearching(true);
    };

    return (
        <div className="entertainment">
            <HeroSection title="Esparcimiento" description="Por tu propio bienestar y salud mental." image={entertainmentImg} />
            <div className="entertainment-content">
                <SearchBar 
                    onSearch={handleSearch}
                    placeholder="Buscar por nombre, dirección o actividad..."
                    ariaLabel="Buscar lugares de esparcimiento"
                />

                {isSearching && searchTerm && (
                    <div className="search-status">
                        <span>Buscando...</span>
                    </div>
                )}

                {!isSearching && debouncedSearchTerm && (
                    <div className="search-results-count">
                        {filteredPlaces.length} resultado{filteredPlaces.length !== 1 ? 's' : ''} encontrado{filteredPlaces.length !== 1 ? 's' : ''}
                    </div>
                )}

                <div className="entertainment-list">
                    {filteredPlaces.map(p => (
                        <Card
                            key={p.id}
                            title={p.nombre}
                            description={`${p.direccion} • ${p.telefono} • ${p.horario}`}
                            image={entertainmentImg}
                            onDetailsClick={() => {
                                alert(`Detalles de ${p.nombre}:\n\nDirección: ${p.direccion}\nTeléfono: ${p.telefono}\nHorario: ${p.horario}\nServicios: ${p.servicios.join(', ')}`);
                            }}
                        />
                    ))}
                </div>

                {!isSearching && filteredPlaces.length === 0 && debouncedSearchTerm && (
                    <div className="no-results">
                        <p>No se encontraron lugares que coincidan con "<strong>{debouncedSearchTerm}</strong>"</p>
                        <p className="no-results-hint">Intenta buscar por nombre, dirección o actividad</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Entertainment;