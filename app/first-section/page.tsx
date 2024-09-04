import React from "react";

const FirstSection = () => {
  return (
    <section className="md:py-20 py-10 bg-gradient-to-r from gray-00 to-gray-200 spacey-10">
      <div className="container mx-auto text-center">
        <div
          className="text-6xl flex justify-center font-bold md:px-20 pb-10
        text-gradient
        bg-gradient-to-r
        from-emerald-600
        to-lime-400
        bg-clip-text
        text-transparent
        "
        >
          Construa uma marca e comece a vender em segundos
        </div>

        <p
          className="text-lg md:text-xl md-10
        bg-gradient-to-r
        from-black
        to-gray-400
        bg-clip-text
        text-transparent
        font-bold
        "
        >
          Não importa o que você venda, o Ipsum Software tem tudo que você
          precisa para gerenciar sua loja online.
        </p>
        <div className="flex gap-4 justify-center pt-10">
          <button className="bg-emerald-500 text-white px-10 py-4 rounded-md text-lg font-bold">
            Comece Agora
          </button>
          <button className="bg-gray-600 text-white px-10 py-4 rounded-md text-lg font-bold">
            Saiba Mais
          </button>
        </div>

        <div className="pt-10">
          <video className="rounded-xl" autoPlay muted loop>
            <source src="/content/firstsection.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
