import HeroSection from '../components/common/HeroSection.jsx';
import foodImg from '../assets/comidaGeneric.jpg';

function Food() {
    return (
        <div className="food">
            <HeroSection title="Comida" description="Encuentra la mejor alimentación para ti" image={foodImg} />
        </div>
    );
}

export default Food;
