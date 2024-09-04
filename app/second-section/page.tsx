"use client";

import React from "react";
import Image from "next/image";

const features = [
  {
    name: "Personalizável",
    description:
      "Escolha entre centenas de templates feitos por designers e altere qualquer coisa que você quiser para criar seu site de eCommerce profissional.",
    image: "/images/icon-cloud.png",
    alt: "Personalizável",
    color: "blue",
  },
  {
    name: "Rápido",
    description:
      "Escolha entre centenas de templates feitos por designers e altere qualquer coisa que você quiser para criar seu site de eCommerce profissional.",
    image: "/images/icon-fast.png",
    alt: "Personalizável",
  },
  {
    name: "Integrações",
    description:
      "Escolha entre centenas de templates feitos por designers e altere qualquer coisa que você quiser para criar seu site de eCommerce profissional.",
    image: "/images/icon-journey.png",
    alt: "Personalizável",
  },
  {
    name: "Completo",
    description:
      "Escolha entre centenas de templates feitos por designers e altere qualquer coisa que você quiser para criar seu site de eCommerce profissional.",
    image: "/images/icon-layer.png",
    alt: "Personalizável",
  },
  {
    name: "Fidelidade",
    description:
      "Configure seu programa de fidelidade e comece a recompensar seus clientes pelas compras e ações que realizam em seu site.",
    image: "/images/icon-location.png",
    alt: "Personalizável",
  },
  {
    name: "Suporte",
    image: "/images/icon-support-1.png",
    description:
      "Obtenha suporte 24/7 de nossa equipe para ajudá-lo com qualquer problema que você tenha.",
    alt: "Personalizável",
  },
];

const SecondSection = () => {
  return (
    <div className="">
      <div className="md:flex-row flex-col items-center flex  justify-center pb-10">
        <div className="p-5 justify-center md:w-1/3">
          <div
            className="
                bg-gradient-to-r
                from-emerald-800
                to-green-300
                bg-clip-text
                text-transparent
                text-4xl
                md:text-6xl
                font-bold
                pb-10
                "
          >
            De startup a empresa, a Ipsum é construída para todo tipo de negócio.
          </div>
          <div className="text-2xl mb-8">
            Construída para todos os negócios e comunidades, a Ipsum é a única
            plataforma que você precisa para crescer seu negócio.
          </div>
          <button className="bg-emerald-500 text-white p-4 justify-center flex md:w-1/3 rounded-lg hover:bg-emerald-600">
            Comece Agora
          </button>
        </div>

        <div className="rounded-xl md:w-2/5 p-4 md:p-0 ">
          <Image
            src={"/content/secondSection.jpg"}
            alt={"Imagem"}
            width={700}
            height={700}
          />
        </div>
      </div>

      <div className="flex-col items-center justify-center">
        <div
          className="
                text-3xl
                flex
                justify-center
                md:text-5xl
                font-bold
                pt-5
                pb-10
                bg-gradient-to-r
                from-lime-400
                to-emerald-600
                bg-clip-text
                text-transparent
                "
        >
          Funcionalidades do Produto
        </div>

        <div className="grid grid-cols-1 p-4 md:grid md:grid-cols-3 gap-4 md:px-40">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex-col space-y-6 pb-10 border p-8 rounded-xl items-center justify-center w-full hover:scale-105 transform transition-all duration-500 ease-in-out"
            >
              <div className="text-gray-600 text-3xl font-bold">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={300}
                  height={300}
                  className="object-contain h-20 w-20 items-center justify-center flex mb-10"
                />
                <div>
                  <div className="text-2xl pb-4 bg-gradient-to-t  from-black  to-gray-400 bg-clip-text text-transparent">
                    {feature.name}
                  </div>

                  <div className="bg-gradient-to-r from-gray-800 to-gray-500 bg-clip-text text-transparent text-lg">
                    {feature.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
