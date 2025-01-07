import Header from "../../components/Header";
import SearchForm from "../../components/SearchForm";
import Summary from "../../components/summary";
function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <section className="flex flex-col justify-between items-center w-full max-w-[70rem] my-0 mx-auto pt-16 pb-0 px-auto">
        <SearchForm />
        <table className="w-full mt-6 ">
          <tbody>
            <tr>
              <td
                width="50%"
                className="py-5 px-8 bg-base-gray-70 rounded-tl-md rounded-bl-md"
              >
                Desenvolvimento de sites
              </td>
              <td>R$ 12.000,00</td>
              <td>Venda</td>
              <td className="rounded-tr-md rounded-br-md">13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Hamburguer</td>
              <td>- R$ 59,00</td>
              <td>Alimentação</td>{" "}
              {/*criar algo para alterar a cor, provavelmente na hora de criar o map */}
              <td>10/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Aluguel do apartamento</td>
              <td>- R$ 1.200,00</td>
              <td>Casa</td>
              <td>27/03/2022</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Transactions;
