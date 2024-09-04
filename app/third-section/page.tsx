import Image from "next/image";

const ThirdSection = () => {
  return (
    <div className="flex p-10 flex-col md:flex-row md:justify-evenly">
      <div className="flex-col md:flex-row gap-6 md:px-10 flex">
        <div className="md:w-2/3 w-full">
          <video className="rounded-xl" autoPlay muted loop>
            <source src="/content/video-3.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="flex-col border p-4 rounded-xl md:w-2/5">
          <div
            className="text-4xl flex justify-center text-center
                md:text-6xl
                bg-gradient-to-l
                from-lime-300
                to-emerald-300
                bg-clip-text
                font-bold
                text-transparent
                "
          >
            Completamente Personalizável para eCommerce
          </div>

          <div className="md:px-20 space-y-6 flex-col items-center justify-center">
            <div className="text-lg pt-10 flex gap-4">
              <Image
                src="/images/icon-store.png"
                alt="feature-1"
                width={70}
                height={70}
              />
              <div className="flex flex-col gap-2">
                Escolha entre uma variedade de templates de loja para começar. E
                personalize sua loja para se adequar à sua marca.
              </div>
            </div>

            <div className="flex-col">
              <div className="text-lg flex items-center gap-5">
                <Image
                  src="/images/icon-product.png"
                  alt="feature-1"
                  width={70}
                  height={70}
                />
                <div>
                  Adicione produtos e variações ilimitadas. E gerencie seu
                  inventário com facilidade.
                </div>
              </div>
            </div>

            <div className="flex-col">
              <div className="text-lg flex items-center gap-5">
                <Image
                  src="/images/icon-analytics.png"
                  alt="feature-1"
                  width={70}
                  height={70}
                />
                <div>
                  Obtenha insights valiosos sobre seus clientes e produtos com
                  nossas ferramentas de análise.
                </div>
              </div>
            </div>

            <div className="flex-col">
              <div className="text-lg flex items-center gap-5">
                <Image
                  src="/images/icon-shield.png"
                  alt="feature-1"
                  width={70}
                  height={70}
                />
                <div>
                  Segurança de primeira classe para proteger seus dados e seus
                  clientes.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
