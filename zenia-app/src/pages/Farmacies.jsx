import React, { useState, useEffect } from 'react';
import HeroSection from '../components/common/HeroSection.jsx';
import SearchBar from '../components/common/SearchBar.jsx';
import Card from '../components/common/Card.jsx';
import { useDebounce } from '../hooks/useDebounce.js';
import farmaciesImg from '../assets/farmaciaGeneric.jpg';
import './styles/Farmacies.css';
import { useNavigate } from 'react-router-dom';
import farmaciesData from '../data/farmaciesData';

const farmaciesImages = import.meta.glob('../assets/farmaciesImages/*.{jpg,png,jpeg,webp}', { eager: true, as: 'url' });

const farmaciesImagesMap = {};
for (const p in farmaciesImages) {
    const filename = p.split('/').pop();
    const name = filename.split('.').shift();
    farmaciesImagesMap[name] = farmaciesImages[p];
}

function Farmacies() {
    // Estado para el término de búsqueda
    const [searchTerm, setSearchTerm] = useState('');
    
    // Estado para indicar si está buscando
    const [isSearching, setIsSearching] = useState(false);
    
    // Lista de farmacias (extraída a data reusable)
    const [farmacias] = useState(farmaciesData);
    const navigate = useNavigate();
    
    // Estado para las farmacias filtradas
    const [filteredFarmacias, setFilteredFarmacias] = useState(farmacias);
    
    // Aplicar debounce al término de búsqueda (espera 500ms)
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    // Efecto que se ejecuta cuando cambia el término con debounce
    useEffect(() => {
        setIsSearching(true);
        
        // Simular un pequeño delay de búsqueda (como si fuera una API)
        const timer = setTimeout(() => {
            if (debouncedSearchTerm.trim() === '') {
                // Si está vacío, mostrar todas las farmacias
                setFilteredFarmacias(farmacias);
            } else {
                // Filtrar farmacias por nombre, dirección o servicios
                const filtered = farmacias.filter(farmacia =>
                    farmacia.nombre.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
                    farmacia.direccion.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
                    farmacia.servicios.some(servicio => 
                        servicio.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
                    )
                );
                setFilteredFarmacias(filtered);
            }
            setIsSearching(false);
        }, 200);

        return () => clearTimeout(timer);
    }, [debouncedSearchTerm, farmacias]);

    // Manejador del SearchBar
    const handleSearch = (term) => {
        setSearchTerm(term);
        setIsSearching(true);
    };

    return (
        <div className="farmacies">
            <HeroSection 
                title="Farmacias" 
                description="Encuentra los medicamentos y productos médicos básicos e especializados para tus seres queridos" 
                image={farmaciesImg} 
            />
            
            <div className="farmacies-content">
                <SearchBar 
                    onSearch={handleSearch}
                    placeholder="Buscar farmacias por nombre, dirección o servicio..."
                    ariaLabel="Buscar farmacias"
                />
                
                {/* Indicador de búsqueda */}
                {isSearching && searchTerm && (
                    <div className="search-status">
                        <span>Buscando...</span>
                    </div>
                )}
                
                {/* Contador de resultados */}
                {!isSearching && debouncedSearchTerm && (
                    <div className="search-results-count">
                        {filteredFarmacias.length} resultado{filteredFarmacias.length !== 1 ? 's' : ''} encontrado{filteredFarmacias.length !== 1 ? 's' : ''}
                    </div>
                )}
                
                {/* Lista de farmacias */}
                <div className="farmacias-list">
                    {filteredFarmacias.map(farmacia => (
                        <Card
                            key={farmacia.id}
                            title={farmacia.nombre}
                            description={`${farmacia.direccion} • ${farmacia.telefono} • ${farmacia.horario}`}
                            image={farmaciesImagesMap[String(farmacia.id)] || farmaciesImg}
                            onDetailsClick={() => {
                                navigate(`/farmacias/${farmacia.id}`, { state: { item: farmacia } });
                            }}
                        />
                    ))}
                </div>
                
                {/* Sin resultados */}
                {!isSearching && filteredFarmacias.length === 0 && debouncedSearchTerm && (
                    <div className="no-results">
                        <p>No se encontraron farmacias que coincidan con "<strong>{debouncedSearchTerm}</strong>"</p>
                        <p className="no-results-hint">Intenta buscar por nombre, dirección o servicio</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Farmacies;
