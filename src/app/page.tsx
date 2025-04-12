"use client";

import { motion } from "motion/react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const handleGoMenu = () => {
    router.push("/Menu");
  };
  return (
    <div
      className="min-w-screen min-h-screen   bg-center flex justify-center items-center"
      style={{
        backgroundImage: "url('/images/fundo.png')",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.0,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
        className=" flex flex-col items-center gap-20"
      >
        <img
          className="object-cover rounded-lg drop-shadow-xl drop-shadow-gray-900"
          src={"/images/pokemonLogo.png"}
          alt="pokemonlogo"
          width={500}
          height={300}
        />
        <button
          className=" shadow-sm shadow-black border border-white px-10 py-2 rounded-md hover:bg-white hover:border-gray-600 hover:text-gray-600 uppercase cursor-pointer"
          onClick={handleGoMenu}
        >
          Go!
        </button>
      </motion.div>
    </div>
  );
};

export default Page;
