interface Itype {
    foto: string,
    titulo: string,
    texto: string
}

const Card = ({ foto, titulo, texto } : Itype) => {
    return(
        <div className="bg-white rounded-2xl px-2 py-8 md:py-10 mx-auto max-w-md">

            <div className="max-w-sm ">
                <p className="font-bold text-azulEscuro text-4 text-center"> 
                    { titulo }
                </p>

            </div>

            <div className="max-w-sm ">
                <p  className="text-azulEscuro text-3 text-center">
                    { texto }
                </p>

            </div>

            <div className="max-w-xs ">
                <img src={foto} alt="" /> 
            </div>

        </div>
    )

};

export default Card;