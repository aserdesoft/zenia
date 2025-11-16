import React from 'react';
import PropTypes from 'prop-types';
import './styles/Card.css';

const Card = React.memo(function Card({ title, description, image, onDetailsClick, link }) {
    const handleClick = () => {
        if (onDetailsClick) {
            onDetailsClick();
        } else if (link) {
            window.open(link, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <div className="card">
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
                <button 
                    className="card-button" 
                    onClick={handleClick}
                    aria-label={`Ver detalles de ${title}`}
                >
                    Ver detalles
                </button>
            </div>
            <div className="card-image-container">
                <img 
                    src={image} 
                    alt={title}
                    className="card-image"
                    loading="lazy"
                />
            </div>
        </div>
    );
});

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    onDetailsClick: PropTypes.func,
    link: PropTypes.string,
};

export default Card;
