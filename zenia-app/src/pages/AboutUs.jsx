import React, { useState } from 'react';
import aboutUsImage from '../assets/aboutUs.jpeg';
import './styles/AboutUs.css';

function AboutUs() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = (form) => {
        const firstName = form.firstName.value.trim();
        const lastName = form.lastName.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (!firstName) {
            alert('Por favor, completa el campo Nombre.');
            form.firstName.focus();
            return false;
        }

        if (!lastName) {
            alert('Por favor, completa el campo Apellido(s).');
            form.lastName.focus();
            return false;
        }

        if (!email) {
            alert('Por favor, completa el campo Correo electrónico.');
            form.email.focus();
            return false;
        }

        // Validar formato de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            form.email.focus();
            return false;
        }

        if (!message) {
            alert('Por favor, completa el campo Tu mensaje.');
            form.message.focus();
            return false;
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;

        // Validar campos antes de enviar
        if (!validateForm(form)) {
            return;
        }

        setIsSubmitting(true);
        const formData = new FormData(form);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                alert('¡Mensaje enviado exitosamente! Gracias por tu comentario.');
                form.reset();
            } else {
                alert('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.');
            }
        } catch (error) {
            alert('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.');
            console.error('Error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="about-us">
            <section className="about-section">
                <div className="about-grid">
                    <div className="about-content">
                        <h1>Sobre nosotros</h1>
                        <p>
                            Somos un grupo de estudiantes de la carrera de Ingeniería Informática del Centro Universitario de Ciencias Exactas e Ingenierías (CUCEI) de la Universidad de Guadalajara (UdeG). Buscamos contribuir a la sociedad con nuestros conocimientos de desarrollo de software de forma sustentable y empática, por lo que hemos creado este sitio web para todas las personas que lleguen a requerir los servicios del Nuevo Hospital Civil de Guadalajara "Dr. Juan I. Menchaca", en particular para las personas que no sean del estado de Jalisco o de la Zona Metropolitana de Guadalajara y puedan llegar a no ubicar en la zona cercana al hospital.
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

                    <form
                        className="contact-form"
                        onSubmit={handleSubmit}
                        noValidate
                    >
                        {/* Web3Forms hidden fields */}
                        <input type="hidden" name="access_key" value="d72dea0a-c0b3-4010-9c31-ab67adea76e1" />
                        <input type="hidden" name="subject" value="Nuevo mensaje desde About Us - Zenia" />
                        <input type="hidden" name="from_name" value="Zenia Web" />

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="firstName">Nombre <span className="required-star">*</span></label>
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
                                <label htmlFor="lastName">Apellido(s) <span className="required-star">*</span></label>
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
                            <label htmlFor="email">Correo electrónico <span className="required-star">*</span></label>
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
                            <label htmlFor="message">Tu mensaje <span className="required-star">*</span></label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                placeholder="Escribe tu pregunta o mensaje"
                                autoComplete="off"
                                required
                            />
                        </div>

                        <button type="submit" className="contact-submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Enviando...' : 'Enviar'}
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default AboutUs;