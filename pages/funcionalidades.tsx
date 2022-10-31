import Head from "next/head";
import CaixaTexto from "../components/CaixaTexto";
import MolduraFoto from "../components/MolduraFoto";


const Funcionalidades = () => {
    return (
        <>
            <Head>Funcionalidades</Head>
            <div className="bg-azulEscuro md:px-12 px-3 py-5 md:flex md:flex-col">

                <div className="bg-azulEscuro mb-3 md:mb-0 md:flex md:items-center mx-auto">
                    <CaixaTexto 
                    subtitulo={"Lorem ipsum dolor sit amen"}
                    texto={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi."}
                    />
                    <MolduraFoto caminhoFoto="/func/foto1.png"/>
                </div>
                <div className="bg-azulEscuro  mb-3 md:mb-0 md:flex md:items-center mx-auto">
                    <MolduraFoto caminhoFoto="/func/foto2.png"/>
                    <CaixaTexto 
                    subtitulo={"Lorem ipsum dolor sit amen"}
                    texto={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi."}
                    />
                </div>

                <div className="bg-azulEscuro  mb-3 md:mb-0 md:flex md:items-center mx-auto">
                    <CaixaTexto 
                    subtitulo={"Lorem ipsum dolor sit amen"}
                    texto={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi."}
                    />
                    <MolduraFoto caminhoFoto="/func/foto3.png"/>
                </div>

                <div className="bg-azulEscuro  mb-3 md:mb-0 md:flex md:items-center mx-auto">
                    <MolduraFoto caminhoFoto="/func/foto4.png"/>
                    <CaixaTexto 
                    subtitulo={"Lorem ipsum dolor sit amen"}
                    texto={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi."}
                    />
                </div>

            </div>
        </>

        
    );
};

export default Funcionalidades;