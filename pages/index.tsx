import Head from "next/head";
import Botao from "../components/Botao";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Datanow - Home</title>
        <meta name="Home" content="Página inicial da empresa"/>
      </Head>

      <div className="bg-azulEscuro h-full">

        <div className="bg-azulEscuro h-full py-3 px-4 flex flex-col items-center md:flex-row md:justify-between lg:px-12 xl:px-32">
          
          <section className="text-center mt-4 gap-2 md:max-w-lg md:text-left">
            
            <p className="font-bold text-white text-4xl md:text-5xl xl:text-6xl">Esse texto é uma headline super legal</p>

            <p className="text-white text-1 my-3 md:max-w-md xl:max-w-lg">E esse texto aqui acompanha o título. Já que eu preciso falar muito, vou falar sobre Emas. Considerada a maior ave do continente americano, a ema pode chegar a medir 1,70 m de altura! Impressionante, não é?</p>
            
            <Botao />

          </section>

          <section className="">

            <img src="/note-home.png" alt="Imagem de um computador e alguns graficos" />

          </section>
        </div>
      </div>
    </>
  )
}

export default Home;
