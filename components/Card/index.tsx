const Card: React.FC = () => {
    return(
        <div className="bg-white md:p-10 p-8 rounded-2xl mb-4 md:h-3/4">
            <p className="font-bold text-azulEscuro text-4 text-center"> 
                99% dos dados adicionados sem fonte não possuem veracidade.
            </p>
            <p  className="text-azulEscuro text-3 text-center">
            Inclusive esse texto aqui, que não possui fundo científico algum e é 100% errado. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <div>
                <img src="/card1.png" alt="" />
            </div>
        </div>
    )

};

export default Card;