import { PokeInfo } from "@/types/poke-info";
import { useEffect, useState } from "react";
import { CardTypePoke } from "./cardTypePoke";

type Props = {
  name: string;
  url: string;
};

export const PokeCard = ({ name, url }: Props) => {
  const [pokemonsInfo, setPokemonsInfo] = useState<PokeInfo | null>(null);

  const reqInfo = async () => {
    const req = await fetch(url);
    const json = await req.json();
    setPokemonsInfo(json);
  };

  useEffect(() => {
    reqInfo();
  }, []);

  return (
    <div className="flex flex-col p-2 w-44 hover:scale-110">
      <div className="w-40 h-44  flex justify-center items-center">
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
        <div className="flex gap-1">
          {pokemonsInfo?.types.map((item) => (
            <CardTypePoke key={item.slot} name={item.type.name} />
          ))}
        </div>
      </div>
    </div>
  );
};
