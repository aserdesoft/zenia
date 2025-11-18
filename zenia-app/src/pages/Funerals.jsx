import React, { useState, useEffect } from 'react';
import HeroSection from '../components/common/HeroSection.jsx';
import SearchBar from '../components/common/SearchBar.jsx';
import Card from '../components/common/Card.jsx';
import { useDebounce } from '../hooks/useDebounce.js';
import funeralsImg from '../assets/funeralesGeneric.jpg';
import './styles/Funerals.css';
import { useNavigate } from 'react-router-dom';
import funeralsData from '../data/funeralsData';

function Funerals() {
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearching, setIsSearching] = useState(false);

    const [services] = useState(funeralsData);
    const navigate = useNavigate();

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
                                navigate(`/funerales/${s.id}`, { state: { item: s } });
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