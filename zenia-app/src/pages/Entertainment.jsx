import HeroSection from '../components/common/HeroSection.jsx';
import entertainmentImg from '../assets/esparcimientoGen.jpeg';

function Entertainment() {
    return (
        <div className="entertainment">
            <HeroSection title="Esparcimiento" description="Por tu propio bienestar y salud mental." image={entertainmentImg} />
        </div>
    );
}

export default Entertainment;