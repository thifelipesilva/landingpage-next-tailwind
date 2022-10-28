import Card from "../components/Card";

const Conheca: React.FC = () => {
    return(
        <div className="bg-azulEscuro md:h-screen relative top-14 left-0 z-[-1] pt-3 items-center md:flex-row md:px-36 px-10">
            <h2 className="font-bold text-white text-4xl text-center mt-4 md:mb-4">Conheça</h2>
            <p className="text-white text-center mb-8">
                Ema, também conhecida como nandu, nhandu, guaripé e xuri, é uma ave da família Rheidae nativa da América do Sul. Apesar de possuir grandes asas, é uma ave não voadora.</p>
            <section className="flex flex-col md:flex-row gap-4">
                <Card/>
                <Card/>
            </section>
            
        
        </div>
    );
};

export default Conheca;