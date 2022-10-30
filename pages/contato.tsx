
import Footer from "../components/Footer";
import Form from "../components/Form";

const Contato = () => {

    
    return (
        <div className="bg-white-50 md:h-screen relative top-11 left-0 pt-3">
            <div>
                <div className="bg-azulEscuro h-7"></div>
                <div className="bg-verde h-2"></div>
            </div>

            <div className="max-w-sm mx-auto">
                <p className="font-bold text-azulEscuro my-5 text-3xl text-center ">
                    Sed ut perspiciatis unde omnis iste natus erro.
                </p>
            </div>

            <Form />

            <Footer/>

        </div>
    );
};

export default Contato;