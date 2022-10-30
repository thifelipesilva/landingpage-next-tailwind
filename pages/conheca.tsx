import Card from "../components/Card";

const Conheca: React.FC = () => {
    return(
        <div className="bg-azulEscuro md:h-screen relative top-14 left-0 pt-3 items-center md:flex-row md:px-36 px-10">
            
            <h2 className="font-bold text-white text-4xl text-center mt-4  mb-3 md:mb-4">Conheça</h2>
            
            <p className="text-white text-center mb-8">
                Ema, também conhecida como nandu, nhandu, guaripé e xuri, é uma ave da família Rheidae nativa da América do Sul. Apesar de possuir grandes asas, é uma ave não voadora.</p>
            
            <section className="flex flex-col md:flex md:flex-row mb-3">
                <Card
                 foto={"/card1.png"} 
                 titulo={'99% dos dados adicionados sem fonte não possuem veracidade.'}
                 texto={'Inclusive esse texto aqui, que não possui fundo científico algum e é 100% errado. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}/>
                <Card
                 foto={"/card2.png"}
                 titulo={'Aumento de 24% em vendas'}
                 texto={'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
                />
            </section>
            
        
        </div>
    );
};

export default Conheca;