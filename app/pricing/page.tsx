const features = [
  {
    name: "Básico",
    price: "$40/mês",
    fees: "3,7% + 30¢ por transação",
    description:
      "Comece a vender online com uma plataforma simples e fácil de usar. Crie sua primeira loja em minutos.",
  },
  {
    name: "Padrão",
    price: "$80/mês",
    fees: "2,9% + 30¢ por transação",
    description:
      "Eleve o nível do seu negócio com uma plataforma de eCommerce poderosa. Tenha acesso a todas as funcionalidades que você precisa para crescer.",
  },
  {
    name: "Premium",
    price: "$200/mês",
    fees: "2,4% + 30¢ por transação",
    description:
      "Para negócios que precisam de mais. Tenha acesso a todas as funcionalidades que você precisa para crescer.",
  },
];

const Pricing = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className="text-center md:text-6xl text-4xl 
        bg-gradient-to-r
        from-emerald-800
        to-green-300
        bg-clip-text
        text-transparent
        pb-10
        font-bold
        "
      >
        Preços
        <div
          className="text-2xl bg-gradient-to-r
        from-black
         to-gray-500 
         bg-clip-text text-center md:text-4xl font-bold md:py-10"
        >
          Planos de preços simples e transparentes para todos os negócios.
        </div>
      </div>

      <div className="md:flex">
        {features.map((feature, index) => (
          <div key={index} className="p-8">
            <div className="grid justify-center items-end  gap-4 border rounded-xl  w-96 h-96">
              <div className="text-2xl text-black pb-4">{feature.name}</div>
              <div className="text-xl">{feature.price}</div>
              <div className="text-xl">{feature.fees}</div>
              <div className="text-xl">{feature.description}</div>

              <div className="bg-emerald-500 text-md text-white p-4 border rounded-xl items-center justify-center h-30">
                Comece Agora
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
