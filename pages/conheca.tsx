import Card from "../components/Card";

const Conheca: React.FC = () => {
    return(
        <div className="bg-azulEscuro h-full">
            <div className="bg-azulEscuro px-4 py-3  lg:px-72 xl:px-96">
                <h2 className="font-bold text-white text-4xl text-center my-4">Conheça</h2>
                
                <div className="mb-4 md:max-w-screen-md">
                    <p className="text-white text-center">
                        Ema, também conhecida como nandu, nhandu, guaripé e xuri, é uma ave da família Rheidae nativa da América do Sul. Apesar de possuir grandes asas, é uma ave não voadora.
                    </p>
                </div>
                
                <section className="flex flex-col md:flex md:flex-row gap-3">
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
        </div>
    );
};

export default Conheca;