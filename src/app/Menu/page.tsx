"use client";

import { PokeCard } from "@/components/PokeCard/Card";
import { Poke } from "@/types/PokeType";
import { useEffect, useState } from "react";

const Page = () => {
  const limit = 12;
  const [page, setPage] = useState(0);
  const [allPoke, setAllPoke] = useState<Poke[]>([]);

  const getAllPokes = async (initial: number, offset: number) => {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${initial}&offset=${offset}`
    );
    const json = await res.json();
    setAllPoke(json.results);
  };

  const handlePreview = () => {
    setPage(page === 0 ? 0 : page - 1);
  };

  const handleNext = () => setPage(page + 1);

  useEffect(() => {
    getAllPokes(limit, page * limit);
  }, [page]);

  return (
    <div
      className="min-h-screen flex justify-center items-start pb-20"
      style={{
        backgroundImage: "url('/images/fundo.png')",
      }}
    >
      <div className=" mt-4 w-2/3 min-h-full bg-cover bg-center pb-20 bg-white">
        <div className="w-full h-10 bg-black justify-center flex">
          <div className="w-44 h-14 rounded-b-4xl bg-black justify-center flex items-center">
            <h1 className="uppercase">pokedex</h1>
          </div>
        </div>
        <div className="text-black mt-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full justify-items-center gap-10">
          {allPoke.map((item, index) => (
            <PokeCard key={item.name} name={item.name} url={item.url} />
          ))}
        </div>

        <div className="w-full  flex mt-16 justify-center items-center gap-5 text-black ">
          <button
            onClick={handlePreview}
            className="border inline-block py-1 px-3 rounded-md hover:scale-110"
          >
            voltar
          </button>
          <p>{page + 1}</p>
          <button
            onClick={handleNext}
            className="border inline-block py-1 px-3 rounded-md hover:scale-110"
          >
            avante
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
