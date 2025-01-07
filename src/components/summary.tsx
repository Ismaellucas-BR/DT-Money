import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";
function summary() {
  return (
    <section className="grid w-full max-w-[70rem] my-0 mx-auto py-0 px-6 grid-cols-3 gap-8 -mt-20">
      <div>
        <header className=" text-base-gray-30 bg-base-gray-60 rounded-md p-8">
          <div className="flex justify-between items-center">
            <span>Entradas</span>
            <ArrowCircleUp size={32} color="#00b37e" />
          </div>
          <strong className="block mt-4 text-[2rem]">R$ 17.400,00</strong>
        </header>
      </div>
      <div>
        <header className=" text-base-gray-30 bg-base-gray-60 rounded-md p-8">
          <div className="flex justify-between items-center ">
            <span>Saídas</span>
            <ArrowCircleDown size={32} color="#f75a68" />
          </div>
          <strong className="block mt-4 text-[2rem]">R$ 17.400,00</strong>
        </header>
      </div>
      <div>
        <header className=" text-base-gray-30 bg-green-green-70 rounded-md p-8">
          <div className="flex justify-between items-center">
            <span>Total</span>
            <CurrencyDollar size={32} color="#fff" />
          </div>
          <strong className="block mt-4 text-[2rem]">R$ 17.400,00</strong>
        </header>
      </div>
    </section>
  );
}

export default summary;
