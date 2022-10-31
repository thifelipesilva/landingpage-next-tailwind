
import Head from "next/head";
import Footer from "../components/Footer";
import Form from "../components/Form";

const Contato = () => {

    
    return (
        <>
            <Head>
                <title>Datanow - Contato</title>
                <meta name="Contato" content="Página para entrar em contato com a empresa"/>
            </Head>
            <div className="bg-white">
                <div className="bg-azulEscuro h-10"></div>
                <div className="bg-verde h-3"></div>
                <div className="max-w-sm mx-auto">
                    <p className="font-bold text-azulEscuro my-5 text-3xl text-center ">
                        Sed ut perspiciatis unde omnis iste natus erro.
                    </p>
                </div>

                <Form />


                <Footer/>
            </div>
        </>
    );
};

export default Contato;