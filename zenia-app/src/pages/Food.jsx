import React, { useState, useEffect } from 'react';
import HeroSection from '../components/common/HeroSection.jsx';
import SearchBar from '../components/common/SearchBar.jsx';
import Card from '../components/common/Card.jsx';
import { useDebounce } from '../hooks/useDebounce.js';
import foodImg from '../assets/comidaGeneric.jpg';
import './styles/Food.css';

function Food() {
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearching, setIsSearching] = useState(false);

    const [foodPlaces] = useState([
        {
            id: 1,
            nombre: 'Cafetería Central',
            direccion: 'Av. Juárez #100, Col. Centro',
            telefono: '33-1111-2222',
            horario: 'Lun-Dom 7:00 AM - 10:00 PM',
            servicios: ['Desayunos', 'Café', 'Panadería']
        },
        {
            id: 2,
            nombre: 'Taquería Los Amigos',
            direccion: 'Calle Hidalgo #245, Col. Americana',
            telefono: '33-2222-3333',
            horario: 'Lun-Dom 12:00 PM - 2:00 AM',
            servicios: ['Tacos', 'Tortas', 'Para llevar']
        },
        {
            id: 3,
            nombre: 'Restaurante La Parrilla',
            direccion: 'Blvd. López Mateos #789, Col. Jardines',
            telefono: '33-4444-5555',
            horario: 'Lun-Dom 1:00 PM - 11:00 PM',
            servicios: ['Parrilladas', 'Reservaciones', 'Eventos']
        },
        {
            id: 4,
            nombre: 'Sushi Sakura',
            direccion: 'Av. Chapultepec #321, Col. Moderna',
            telefono: '33-6666-7777',
            horario: 'Lun-Dom 12:00 PM - 10:00 PM',
            servicios: ['Sushi', 'Comida japonesa', 'Entrega a domicilio']
        },
        {
            id: 5,
            nombre: 'Pizzería Don Mario',
            direccion: 'Calle Libertad #654, Col. Centro',
            telefono: '33-8888-9999',
            horario: 'Lun-Dom 12:00 PM - 11:00 PM',
            servicios: ['Pizzas', 'Pasta', 'Bebidas']
        },
        {
            id: 6,
            nombre: 'Salad & Go',
            direccion: 'Av. Vallarta #987, Col. Providencia',
            telefono: '33-3333-2222',
            horario: 'Lun-Sáb 9:00 AM - 9:00 PM',
            servicios: ['Ensaladas', 'Wraps', 'Opciones saludables']
        }
    ]);

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
                            image={foodImg}
                            onDetailsClick={() => {
                                alert(`Detalles de ${place.nombre}:\n\nDirección: ${place.direccion}\nTeléfono: ${place.telefono}\nHorario: ${place.horario}\nServicios: ${place.servicios.join(', ')}`);
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
