import HeroSection from '../components/common/HeroSection.jsx';
import documentationImg from '../assets/docuGeneric.jpg';

function Documentacion() {
    return (
        <div className="documentation">
            <HeroSection title="Documentación" description="Encuentra donde obtener los documentos que puedes llegar a necesitar" image={documentationImg} />
        </div>
    );
}

export default Documentacion;