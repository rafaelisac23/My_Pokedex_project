type Props = {
  name: string;
};
export const CardTypePoke = ({ name }: Props) => {
  return (
    <p
      className={` mt-4 inline-block px-4 py-1 uppercase text-white text-xs
    ${name === "normal" && "bg-amber-800 border-amber-800 border rounded-sm"}
    ${name === "fighting" && "bg-red-600 border border-red-600 rounded-sm"}
    ${name === "flying" && "bg-gray-500 border border-gray-500 rounded-sm"}
    ${name === "poison" && "bg-purple-600 border border-purple-600 rounded-sm"}
    ${name === "ground" && "bg-amber-500 border border-amber-500 rounded-sm"}
    ${name === "rock" && "bg-amber-700 border border-amber-700 rounded-sm"}
    ${name === "bug" && "bg-green-800 border border-green-800 rounded-sm"}
    ${name === "ghost" && "bg-purple-800 border border-purple-800 rounded-sm"}
    ${name === "steel" && "bg-gray-400 border border-gray-400 rounded-sm"}
    ${name === "fire" && "bg-orange-600 border border-orange-600 rounded-sm"}
    ${name === "water" && "bg-blue-600 border border-blue-600 rounded-sm"}
    ${name === "grass" && "bg-green-500 border border-green-500 rounded-sm"}
    ${
      name === "electric" && "bg-yellow-300 border border-yellow-300 rounded-sm"
    }
    ${name === "psychic" && "bg-pink-400 border border-pink-400 rounded-sm"}
    ${name === "ice" && "bg-blue-300 border border-blue-300  rounded-sm"}
    ${name === "dragon" && "bg-purple-900 border border-purple-900  rounded-sm"}
    ${name === "dark" && "bg-amber-950 border border-amber-950 rounded-sm"}
    ${name === "fairy" && "bg-pink-600 border border-pink-600 rounded-sm"}
    ${
      name === "stellar" &&
      "bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500"
    }
    ${name === "fire" && "bg-orange-600 border border-orange-600 rounded-sm"}
    ${name === "fire" && "bg-orange-600 border border-orange-600 rounded-sm"}

     `}
    >
      {name}
    </p>
  );
};
