interface Itype {
    caminhoFoto: string
}

const MolduraFoto = ({ caminhoFoto } : Itype) => {
    return(
        <div className="px-3 md:px-0 max-w-md">
            <img src={ caminhoFoto } alt="" />
        </div>
    );
};

export default MolduraFoto;