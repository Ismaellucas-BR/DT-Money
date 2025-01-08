import { useEffect, useState } from "react";
import Header from "../../components/Header";
import SearchForm from "../../components/SearchForm";
import Summary from "../../components/summary";

interface Transactions {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

function Transactions() {
  const [transactions, setTransactions] = useState<Transactions[]>([]);
  async function LoadTransictions() {
    const response = await fetch("http://localhost:3333/transactions");
    const data = await response.json();

    setTransactions(data);
  }

  useEffect(() => {
    LoadTransictions();
  }, []);
  return (
    <div>
      <Header />
      <Summary />

      <section className="flex flex-col justify-between items-center w-full max-w-[70rem] my-0 mx-auto pt-16 pb-0 px-auto">
        <SearchForm />
        <table className="w-full mt-6 ">
          <tbody>
            {transactions.map((transactions) => {
              return (
                <tr key={transactions.id}>
                  <td
                    width="50%"
                    className="py-5 px-8 bg-base-gray-70 rounded-tl-md rounded-bl-md"
                  >
                    {transactions.description}
                  </td>
                  <td>{transactions.price}</td>
                  <td>{transactions.category}</td>
                  <td className="rounded-tr-md rounded-br-md">
                    {transactions.createdAt}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Transactions;
