import HeroSection from '../components/common/HeroSection.jsx';
import farmaciesImg from '../assets/farmaciaGeneric.jpg';

function Farmacies() {
    return (
        <div className="farmacies">
            <HeroSection title="Farmacias" description="Encuentra los medicamentos y productos médicos básicos e especializados para tus seres queridos" image={farmaciesImg} />
            
        </div>
    );
}

export default Farmacies;
