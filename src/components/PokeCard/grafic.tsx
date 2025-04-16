import { PokeInfo } from "@/types/poke-info";

type Prop = {
  data: PokeInfo | null;
};

export const StatusGraphic = ({ data }: Prop) => {
  const totalBlocks = 10;
  return (
    <div className="bg-gray-300 w-full flex flex-col  rounded-xl pt-2 pb-3">
      <p className="text-start ml-3 text-black opacity-60">Estatísticas</p>
      <div className=" mt-4 grid-cols-6 grid mx-1">
        {data?.stats.map((item) => {
          const filledBlocks = Math.min(
            totalBlocks,
            Math.floor(item.base_stat / 10)
          );
          return (
            <div key={item.stat.name} className="flex flex-col items-center">
              {/* Barra (vertical) */}
              <div className="flex flex-col-reverse">
                {Array.from({ length: totalBlocks }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-6 h-1 mb-[4px]  ${
                      i < filledBlocks ? "bg-blue-500 " : "bg-white "
                    }`}
                  />
                ))}
              </div>
              {/* Label embaixo */}
              <p className="text-[8px] mt-1 capitalize text-center text-black max-w-[40px] break-words opacity-85">
                {item.stat.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
