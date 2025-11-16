import React, { useState, useEffect } from 'react';
import HeroSection from '../components/common/HeroSection.jsx';
import SearchBar from '../components/common/SearchBar.jsx';
import Card from '../components/common/Card.jsx';
import { useDebounce } from '../hooks/useDebounce.js';
import farmaciesImg from '../assets/farmaciaGeneric.jpg';
import './styles/Farmacies.css';

function Farmacies() {
    // Estado para el término de búsqueda
    const [searchTerm, setSearchTerm] = useState('');
    
    // Estado para indicar si está buscando
    const [isSearching, setIsSearching] = useState(false);
    
    // Lista de farmacias de ejemplo (en producción vendría de una API)
    const [farmacias] = useState([
        {
            id: 1,
            nombre: 'Farmacia Del Ahorro',
            direccion: 'Av. Juárez #1234, Col. Centro',
            telefono: '33-1234-5678',
            horario: 'Lun-Dom 7:00 AM - 11:00 PM',
            servicios: ['Medicamentos generales', 'Inyecciones', 'Consultorio médico']
        },
        {
            id: 2,
            nombre: 'Farmacia Guadalajara',
            direccion: 'Calle Independencia #456, Col. Americana',
            telefono: '33-8765-4321',
            horario: '24 horas',
            servicios: ['Medicamentos', 'Laboratorio', 'Entregas a domicilio']
        },
        {
            id: 3,
            nombre: 'Farmacia Benavides',
            direccion: 'Blvd. Marcelino García #789, Col. Olimpica',
            telefono: '33-5555-6666',
            horario: 'Lun-Dom 8:00 AM - 10:00 PM',
            servicios: ['Medicamentos', 'Perfumería', 'Fotografía']
        },
        {
            id: 4,
            nombre: 'Farmacia San Pablo',
            direccion: 'Av. Chapultepec #321, Col. Moderna',
            telefono: '33-9999-8888',
            horario: '24 horas',
            servicios: ['Medicamentos', 'Consultorio', 'Estudios clínicos']
        },
        {
            id: 5,
            nombre: 'Farmacia Similares',
            direccion: 'Calle López Cotilla #654, Col. Centro',
            telefono: '33-7777-4444',
            horario: 'Lun-Sáb 8:00 AM - 9:00 PM',
            servicios: ['Medicamentos genéricos', 'Consultorio médico']
        },
        {
            id: 6,
            nombre: 'Farmacia Santa María',
            direccion: 'Av. Vallarta #987, Col. Providencia',
            telefono: '33-3333-2222',
            horario: 'Lun-Dom 7:00 AM - 11:00 PM',
            servicios: ['Medicamentos', 'Ortopedia', 'Nutrición']
        }
    ]);
    
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
                            image={farmaciesImg}
                            onDetailsClick={() => {
                                alert(`Detalles de ${farmacia.nombre}:\n\nDirección: ${farmacia.direccion}\nTeléfono: ${farmacia.telefono}\nHorario: ${farmacia.horario}\nServicios: ${farmacia.servicios.join(', ')}`);
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
