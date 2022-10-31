import Botao from "../components/Botao";

const Home: React.FC = () => {
  return (
    <div className="bg-azulEscuro h-full py-3 px-4 flex flex-col items-center md:flex-row md:justify-between lg:px-12">
      
      <section className="text-center mt-4 gap-2 md:max-w-lg md:text-left">
        
        <p className="font-bold text-white text-4xl md:text-5xl">Esse texto é uma headline super legal</p>

        <p className="text-white text-1 my-3 md:max-w-md">E esse texto aqui acompanha o título. Já que eu preciso falar muito, vou falar sobre Emas. Considerada a maior ave do continente americano, a ema pode chegar a medir 1,70 m de altura! Impressionante, não é?</p>
        
        <Botao />

      </section>

      <section className="">

        <img src="/note-home.png" alt="" />

      </section>
    </div>
  )
}

export default Home;
