"use client";

import { PokeInfo } from "@/types/poke-info";
import { useEffect, useState } from "react";
import { CardTypePoke } from "./cardTypePoke";
import { useRouter } from "next/navigation";

type Props = {
  name: string;
  url: string;
};

export const PokeCard = ({ name, url }: Props) => {
  const router = useRouter();
  const [pokemonsInfo, setPokemonsInfo] = useState<PokeInfo | null>(null);

  const reqInfo = async () => {
    const req = await fetch(url);
    const json = await req.json();
    setPokemonsInfo(json);
  };

  const handleGoPokeInfo = (name: string) => {
    router.push(`/Menu/${name}`);
  };

  useEffect(() => {
    reqInfo();
  }, []);

  return (
    <div
      onClick={() => handleGoPokeInfo(name)}
      className="flex flex-col p-2 w-44 hover:scale-110 hover:cursor-pointer"
    >
      <div className="w-40 h-44 bg-gray-100  rounded-lg flex justify-center items-center">
        {pokemonsInfo?.sprites.other["official-artwork"].front_default ? (
          <img
            src={pokemonsInfo.sprites.other["official-artwork"].front_default}
            alt={name}
            className="w-full h-full object-contain"
          />
        ) : (
          <p className="text-sm text-gray-500">Carregando...</p>
        )}
      </div>

      <div className="pt-2 pl-2">
        <p className="opacity-60 text-sm">Nº {pokemonsInfo?.id}</p>
        <h1 className=" uppercase font-bold font-sans text-xs">{name}</h1>
        <div className="flex gap-1"></div>
      </div>
    </div>
  );
};
