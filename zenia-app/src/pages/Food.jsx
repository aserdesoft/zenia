import React, { useState, useEffect } from 'react';
import HeroSection from '../components/common/HeroSection.jsx';
import SearchBar from '../components/common/SearchBar.jsx';
import Card from '../components/common/Card.jsx';
import { useDebounce } from '../hooks/useDebounce.js';
import foodImg from '../assets/comidaGeneric.jpg';
import './styles/Food.css';
import { useNavigate } from 'react-router-dom';
import foodData from '../data/foodData';

const foodImages = import.meta.glob('../assets/foodImages/*.{jpg,png,jpeg,webp}', { eager: true, as: 'url' });

const foodImagesMap = {};
for (const p in foodImages) {
    const filename = p.split('/').pop();
    const name = filename.split('.').shift();
    foodImagesMap[name] = foodImages[p];
}

function Food() {
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearching, setIsSearching] = useState(false);

    const [foodPlaces] = useState(foodData);
    const navigate = useNavigate();

    const [filteredFood, setFilteredFood] = useState(foodPlaces);

    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(() => {
        setIsSearching(true);
        const timer = setTimeout(() => {
            if (debouncedSearchTerm.trim() === '') {
                setFilteredFood(foodPlaces);
            } else {
                const filtered = foodPlaces.filter(place =>
                    place.nombre.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
                    place.direccion.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
                    place.servicios.some(s => s.toLowerCase().includes(debouncedSearchTerm.toLowerCase()))
                );
                setFilteredFood(filtered);
            }
            setIsSearching(false);
        }, 200);
        return () => clearTimeout(timer);
    }, [debouncedSearchTerm, foodPlaces]);

    const handleSearch = (term) => {
        setSearchTerm(term);
        setIsSearching(true);
    };

    return (
        <div className="food">
            <HeroSection title="Comida" description="Encuentra opciones para comer cerca de ti" image={foodImg} />
            <div className="food-content">
                <SearchBar 
                    onSearch={handleSearch}
                    placeholder="Buscar por nombre, dirección o tipo de comida..."
                    ariaLabel="Buscar lugares para comer"
                />

                {isSearching && searchTerm && (
                    <div className="search-status">
                        <span>Buscando...</span>
                    </div>
                )}

                {!isSearching && debouncedSearchTerm && (
                    <div className="search-results-count">
                        {filteredFood.length} resultado{filteredFood.length !== 1 ? 's' : ''} encontrado{filteredFood.length !== 1 ? 's' : ''}
                    </div>
                )}

                <div className="food-list">
                    {filteredFood.map(place => (
                        <Card
                            key={place.id}
                            title={place.nombre}
                            description={`${place.direccion} • ${place.telefono} • ${place.horario}`}
                            image={foodImagesMap[String(place.id)] || foodImg}
                            onDetailsClick={() => {
                                navigate(`/comida/${place.id}`, { state: { item: place } });
                            }}
                        />
                    ))}
                </div>

                {!isSearching && filteredFood.length === 0 && debouncedSearchTerm && (
                    <div className="no-results">
                        <p>No se encontraron lugares que coincidan con "<strong>{debouncedSearchTerm}</strong>"</p>
                        <p className="no-results-hint">Intenta buscar por nombre, dirección o tipo de comida</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Food;
