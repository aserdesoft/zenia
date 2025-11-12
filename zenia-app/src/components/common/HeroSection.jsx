import React from 'react';
import "./styles/HeroSection.css";
import PropTypes from 'prop-types';

const HeroSection = React.memo(function HeroSection(props) {
    return (
        <section className="hero-section">
            <img
                src={props.image}
                alt=""
                className="hero-background-image"
                loading="eager"
                fetchPriority="high"
                decoding="async"
            />
            <div className="hero-overlay">
                <div className="hero-content">
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </div>
            </div>
        </section>
    );
});

HeroSection.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}
export default HeroSection;