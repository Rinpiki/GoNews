/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function Filter() {
  const [option, setOption] = React.useState(false);
  function toggle(e: any) {
    e.preventDefault();
    setOption(!option);
  }

  function send(e: any) {
    e.preventDefault();
  }

  return (
    <header className="flex space-x-4 mx-auto mt-20 items-center font-semibold justify-between max-w-3xl">
      <button
        type="submit"
        onClick={toggle}
        className="text-base bg-[#132F4C] rounded-md py-2 px-4 text-[#62ADF8]  hover:scale-105 transition delay-100 duration-300 ease-in-out"
      >
        Trocar
      </button>
      {option ? (
        <form className="text-[#62ADF8] flex items-center animate-slide ">
          <label>
            Pesquisa:
            <input
              type="text"
              className="ml-2 text-[#62ADF8] px-3 rounded-sm border-[#62ADF8] outline-none bg-[#0A1928] border-b-2"
            />
          </label>
          <button
            type="submit"
            onClick={send}
            className="text-sm hidden sm:flex bg-[#132F4C] rounded-md py-1 px-4 text-[#62ADF8] ml-3 hover:scale-105 transition delay-100 duration-300 ease-in-out"
          >
            Enviar
          </button>
        </form>
      ) : (
        <div className="flex text-[#90CAF9] space-x-4 animate-slide">
          <select
            name="categoria"
            id="cars"
            className="border-none outline-none rounded-sm text-[#7db0da] pl-2 bg-[#132F4C]"
          >
            <option value="business">Economia</option>
            <option value="entertainment">Entretenimento</option>
            <option value="general">geral</option>
            <option value="health">saude</option>
            <option value="science">ciencia</option>
            <option value="sports">esportes</option>
            <option value="technology">tecnologia</option>
          </select>
        </div>
      )}
    </header>
  );
}

export default Filter;
