import { MagnifyingGlass } from "phosphor-react";

function SearchForm() {
  return (
    <form className="flex gap-4 w-full">
      <input
        className=" flex-1 rounded-md border-0 bg-base-gray-70 text-base-gray-30 p-4 placeholder:text-base-gray-50"
        placeholder="Busque por transações"
        type="search"
        name=""
        id=""
      />
      <button
        className="flex items-center gap-3 p-4 bg-transparent border text-green-green-30 border-green-green-30 font-bold rounded-md hover:bg-green-green-50 hover:border-green-green-50 hover:text-white transition-colors"
        type="submit"
      >
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </form>
  );
}

export default SearchForm;
