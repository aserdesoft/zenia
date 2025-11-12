import HeroSection from '../components/common/HeroSection.jsx';
import funeralsImg from '../assets/funeralesGeneric.jpg';

function Funerals() {
    return (
        <div className="funerals">
            <HeroSection title="Servicios fúnebres" description="Para aquellos momentos difíciles" image={funeralsImg} />
        </div>
    );
}

export default Funerals;