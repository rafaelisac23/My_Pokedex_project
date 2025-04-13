import { div } from "motion/react-client";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col">
      <div className=" bg-gray-300 text-black flex py-3">
        <div className="flex-1 flex justify-center items-center sm:justify-start">
          <img
            src="/images/pokemonLogo.png"
            alt="pokemonLogo"
            className="w-[100px] ml-3"
          />
        </div>

        <div className="flex-1 flex justify-center items-center gap-2">
          <img
            src="/images/bullbasaur.png"
            alt="bullbasaur"
            className="w-[40px]"
          />
          <img
            src="/images/charmander.png"
            alt="bullbasaur"
            className="w-[40px]"
          />
          <img
            src="/images/squirtle.png"
            alt="bullbasaur"
            className="w-[40px]"
          />
        </div>
      </div>
      <div className="text-white">{children}</div>
    </div>
  );
};

export default Layout;
