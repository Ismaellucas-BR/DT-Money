import Logo from "../assets/logo";
import * as Dialog from "@radix-ui/react-dialog";
function Header() {
  return (
    <header className="bg-base-gray-90 pt-10 pb-[7.5rem] px-0">
      <div className="flex justify-between items-center w-full max-w-[70rem] my-0 mx-auto py-0 px-6">
        <Logo />

        <Dialog.Root>
          <Dialog.Trigger asChild />
          <Dialog.Portal>
            <Dialog.Overlay />
            <Dialog.Content>
              <Dialog.Title />
              <Dialog.Description />
              <Dialog.Close />
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
        <button className="h-[3.25rem] border-0 bg-green-green-50 text-white font-bold py-o px-5 rounded-md cursor-pointer hover:bg-green-green-70 hover:transition-colors">
          Nova transação
        </button>
      </div>
    </header>
  );
}

export default Header;
