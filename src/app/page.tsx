"use client";

import { motion } from "motion/react";
import { Metadata } from "next";
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
      <div className=" flex flex-col items-center gap-20  w-full">
        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.0,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          className="w-[300px] h-[100px] sm:w-[600px] sm:h-[200px] object-cover rounded-lg drop-shadow-xl drop-shadow-gray-900"
          src={"/images/pokemonLogo.png"}
          alt="pokemonlogo"
        />
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.0,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          className=" shadow-sm shadow-black border border-white px-10 py-2 rounded-md hover:bg-white hover:border-gray-600 hover:text-gray-600 uppercase cursor-pointer"
          onClick={handleGoMenu}
        >
          Go!
        </motion.button>
      </div>
    </div>
  );
};

export default Page;
