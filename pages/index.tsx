import Botao from "../components/Botao";

const Home = () => {
  return (
    <div className="bg-azulEscuro relative top-14 left-0 z-[-1] flex flex-col items-center md:flex-row md:px-12 px-3">
      <section className="w-1/2 h-auto mt-4 md:text-left text-center ">
        
        <p className="font-bold text-white text-3xl mb-4">Esse texto é uma headline super legal</p>

        <p className="text-white text-1 mb-4">E esse texto aqui acompanha o título. Já que eu preciso falar muito, vou falar sobre Emas. Considerada a maior ave do continente americano, a ema pode chegar a medir 1,70 m de altura! Impressionante, não é?</p>
        
        <Botao />

      </section>

      <section className="p-2 md:w-1/2 md:h-auto">

        <img src="/note-home.png" alt="" />

      </section>
    </div>
  )
}

export default Home;
