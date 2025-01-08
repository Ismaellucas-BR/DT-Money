import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
function NewTransactionModal() {
  return (
    <div>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed w-screen h-screen inset-0 bg-black/75" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[32rem] rounded-md py-10 px-12 bg-base-gray-80">
          <Dialog.Title>Nova transação</Dialog.Title>
          <Dialog.Close className="absolute bg-transparent border-0 top-6 right-6 cursor-pointer text-base-gray-50">
            {" "}
            <X size={22} />
          </Dialog.Close>
          <form action="" className="flex flex-col mt-8 gap-4">
            <input
              className="inputFormPopup"
              type="text"
              placeholder="Descrição"
              required
            />
            <input
              className="inputFormPopup"
              type="number"
              placeholder="Preço"
              required
            />
            <input
              className="inputFormPopup"
              type="text"
              placeholder="Categoria"
              required
            />
            <RadioGroup.Root className="grid grid-cols-2 gap-4 mt-2">
              <RadioGroup.Item
                value="income"
                className="transactionTypeButton aria-checked:bg-green-green-50 peer"
              >
                <ArrowCircleUp className="income" size={24} /> Entrada
              </RadioGroup.Item>

              <RadioGroup.Item
                value="outcome"
                className="transactionTypeButton aria-checked:text-white aria-checked:bg-red-red-50 peer checked:fill-white"
              >
                {" "}
                <ArrowCircleDown className="outcome " size={24} /> Saída
              </RadioGroup.Item>
            </RadioGroup.Root>

            <button
              type="submit"
              className="h-[58px] border-0 bg-green-green-50 text-white font-bold py-0 px-5 rounded-md mt-6 cursor-pointer hover:bg-green-green-70 hover:transition-colors"
            >
              Cadastrar
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </div>
  );
}

export default NewTransactionModal;
