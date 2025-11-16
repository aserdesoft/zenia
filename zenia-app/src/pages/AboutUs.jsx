import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import aboutUsImage from '../assets/aboutUs.jpeg';
import './styles/AboutUs.css';

function AboutUs() {
    const location = useLocation();
    const showSuccess = useMemo(() => new URLSearchParams(location.search).get('enviado') === '1', [location.search]);

    const redirectUrl = useMemo(() => {
        if (typeof window !== 'undefined') {
            const base = window.location.origin || '';
            return `${base}/sobre-nosotros?enviado=1`;
        }
        return '/sobre-nosotros?enviado=1';
    }, []);

    return (
        <div className="about-us">
            <section className="about-section">
                <div className="about-grid">
                    <div className="about-content">
                        <h1>Sobre nosotros</h1>
                        <p>
                            Somos un grupo de estudiantes de la carrera de Ingeniería Informática del Centro Universitario de Ciencias Exactas e Ingenierías (CUCEI) de la Universidad de Guadalajara (UdeG). Buscamos contribuir a la sociedad con nuestros conocimientos de desarrollo de software de forma sustentable y empática, por lo que hemos creado este sitio web para todas las personas que lleguen a requerir los servicios del Nuevo Hospital Civil de Guadalajara “Dr. Juan I. Menchaca”, en particular para las personas que no sean del estado de Jalisco o de la Zona Metropolitana de Guadalajara y puedan llegar a no ubicar en la zona cercana al hospital.
                        </p>
                    </div>
                    <div className="about-image">
                        <img
                            src={aboutUsImage}
                            alt="Equipo de desarrollo del proyecto"
                            width="540"
                            height="360"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            <section className="contact-section">
                <div className="contact-card">
                    <h2>¿Tienes alguna sugerencia o comentario?</h2>

                    {showSuccess && (
                        <div className="form-alert form-alert-success" role="status" aria-live="polite">
                            ¡Gracias! Tu mensaje fue enviado correctamente.
                        </div>
                    )}

                    <form
                        className="contact-form"
                        method="POST"
                        action="https://api.web3forms.com/submit"
                        noValidate
                    >
                        {/* Web3Forms hidden fields */}
                        <input type="hidden" name="access_key" value="d72dea0a-c0b3-4010-9c31-ab67adea76e1" />
                        <input type="hidden" name="subject" value="Nuevo mensaje desde About Us - Zenia" />
                        <input type="hidden" name="from_name" value="Zenia Web" />
                        <input type="hidden" name="redirect" value={redirectUrl} />

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="firstName">Nombre</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    placeholder="Ingresa tu nombre"
                                    autoComplete="given-name"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Apellido(s)</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Ingresa tu apellido(s)"
                                    autoComplete="family-name"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Correo electrónico</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Ingresa tu correo electrónico"
                                autoComplete="email"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Tu mensaje</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                placeholder="Escribe tu pregunta o mensaje"
                                autoComplete="off"
                                required
                            />
                        </div>

                        <button type="submit" className="contact-submit">Enviar</button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default AboutUs;