import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import "./styles/ServiceCard.css";

const ServiceCard = React.memo(function ServiceCard(props) {
    return (
        <Link to={props.link} className="service-card-link">
            <div className="service-card">
                <div className="service-image">
                <img 
                    src={props.image} 
                    alt={props.title}
                    loading="lazy"
                    width="300"
                    height="200"
                    decoding="async"
                />
                </div>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </Link>
    );
});
ServiceCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
}
export default ServiceCard;