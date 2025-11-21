import React, { useState, useEffect } from 'react';
import HeroSection from '../components/common/HeroSection.jsx';
import SearchBar from '../components/common/SearchBar.jsx';
import Card from '../components/common/Card.jsx';
import { useDebounce } from '../hooks/useDebounce.js';
import entertainmentImg from '../assets/esparcimientoGen.jpeg';
import './styles/Entertainment.css';
import { useNavigate } from 'react-router-dom';
import entertainmentData from '../data/entertainmentData';

// Añadir los siguientes dos bloques a cada archivo de categoria
// bundle entertainment images so we can map by id (filename)
const entertainmentImages = import.meta.glob('../assets/entertainmentImages/*.{jpg,png,jpeg,webp}', { eager: true, as: 'url' });

// build a lookup map filename (without ext) -> url
const entertainmentImagesMap = {};
for (const p in entertainmentImages) {
    const filename = p.split('/').pop();
    const name = filename.split('.').shift();
    entertainmentImagesMap[name] = entertainmentImages[p];
}

function Entertainment() {
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearching, setIsSearching] = useState(false);

    const [places] = useState(entertainmentData);
    const navigate = useNavigate();

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
                            // modificar esta linea para cada categoria
                            image={entertainmentImagesMap[String(p.id)] || entertainmentImg}
                            onDetailsClick={() => {
                                navigate(`/esparcimiento/${p.id}`, { state: { item: p } });
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