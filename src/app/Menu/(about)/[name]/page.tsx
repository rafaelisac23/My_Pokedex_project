"use client";

import { use, useEffect, useState } from "react";
import { PokeInfo } from "@/types/poke-info";
import { StatusGraphic } from "@/components/PokeCard/grafic";
import { useRouter } from "next/navigation";

type ParamsPromise = Promise<{
  name: string;
}>;

const Page = ({ params }: { params: ParamsPromise }) => {
  const { name } = use(params); // <- Aqui está o segredo
  const router = useRouter();

  const [pokemonInfos, setPokemonInfos] = useState<PokeInfo | null>(null);

  const reqInfos = async () => {
    const req = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const json = await req.json();
    setPokemonInfos(json);
  };

  const handleGoMenu = (name: string) => {
    router.push(`/Menu}`);
  };

  useEffect(() => {
    reqInfos();
  }, [name]);

  return (
    <div
      className="min-h-screen flex justify-center"
      style={{ backgroundImage: "url('/images/fundo.png')" }}
    >
      <div className="w-2/3 bg-white flex flex-col mb-20 pb-10 rounded-b-lg">
        {/*pokeID*/}
        <div className="w-full h-8 bg-black flex items-start gap-10">
          <div className="w-24 h-14 bg-black text-white ml-2 rounded-4xl flex items-center justify-center">
            <p className="text-xl">Nº {pokemonInfos?.id}</p>
          </div>
        </div>
        {/*pokeID*/}

        {/*PokeName*/}
        <div className="w-full mt-8  flex justify-center md:justify-end items-center ">
          <div className="w-44 h-12 border border-black mt-2 rounded-2xl justify-center items-center flex  md:mr-10">
            <p className="text-center uppercase text-black opacity-80  ">
              {pokemonInfos?.name}
            </p>
          </div>
        </div>
        {/*PokeName*/}

        {/*PokeImg*/}
        <div className=" w-full mt-10 flex justify-center">
          {pokemonInfos?.sprites.other["official-artwork"].front_default ? (
            <img
              src={pokemonInfos.sprites.other["official-artwork"].front_default}
              alt={name}
              className="w-5/6 min-h-10 max-h-72  border rounded-md bg-gray-100 object-contain"
            />
          ) : (
            <p className="text-sm text-gray-500">Carregando...</p>
          )}
        </div>
        {/*PokeImg*/}

        {/*PokeEstatisticas*/}
        <section className="mt-10 flex flex-col  md:flex-row w-full ">
          <div className="w-full md:w-1/2 px-2">
            <StatusGraphic data={pokemonInfos} />
          </div>

          <div className=" w-full md:w-1/2 px-2 flex flex-col gap-2 mt-4 md:mt-0">
            <div className="text-black">Informações</div>
            <div className="bg-blue-500 rounded-xl grid grid-cols-1 md:grid-cols-2 place-items-center gap-2 py-4 ">
              <div>
                <h1 className="text-center text-white text-sm">Altura</h1>
                <p className="text-black text-center">
                  {pokemonInfos && (pokemonInfos?.height / 10).toFixed(3)} m
                </p>
              </div>

              <div>
                <h1 className="text-center text-white text-sm"> Peso</h1>
                <p className="text-black text-center text-base">
                  {pokemonInfos && (pokemonInfos?.weight / 10).toFixed(2)} Kg
                </p>
              </div>

              <div>
                <h1 className="text-center text-white text-sm"> Sexo</h1>
                <p className="text-black text-center font-bold"> ♂ / ♀</p>
              </div>

              <div>
                <h1 className="text-center text-white text-sm"> Habilidade</h1>
                <p className="text-black text-center">
                  {pokemonInfos && pokemonInfos?.abilities[0].ability.name}
                </p>
              </div>
            </div>
          </div>
        </section>
        {/*PokeEstatisticas*/}
      </div>
    </div>
  );
};

export default Page;
