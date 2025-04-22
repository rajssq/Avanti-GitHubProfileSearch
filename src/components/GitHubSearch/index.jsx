import { useState } from "react";
import search from "../../assets/images/Search.svg";

export const GitHubSearch = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    if (inputValue.trim()) {
      onSearch(inputValue);
    }
  };

  return (
    <div className="flex items-center w-full max-w-[500px] bg-white border border-[#DDDDDD] rounded-[10px] focus-within:outline-2 focus-within:outline-[#005CFF]">
      <input
        className="w-full px-4 py-[18px] text-[20px] bg-white rounded-[10px] placeholder-black outline-0"
        type="text"
        placeholder="Digite um usuário do GitHub"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <button
        className="h-full p-[19px] bg-[#005CFF] rounded-[10px] cursor-pointer hover:bg-[#004cff] group"
        onClick={handleSearch}
      >
        <img
          className="w-[33px] transition-all group-hover:scale-110"
          src={search}
          alt="search icon"
        />
      </button>
    </div>
  );
};