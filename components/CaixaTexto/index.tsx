interface Itypes {
    subtitulo: string,
    texto: string
}

const CaixaTexto = ({ subtitulo, texto } : Itypes) => {
    return(
        <div className="px-14 mb-4 text-3xl max-w-md">
            <p className="font-bold text-center text-2xl md:text-3xl text-white mb-3 ">
                { subtitulo }
            </p>

            <p className="text-center text-sm text-white ">
                { texto }
            </p>
        </div>
    );
};

export default CaixaTexto;