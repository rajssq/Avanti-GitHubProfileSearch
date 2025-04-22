export const GitHubProfile = ({ avatar_url, name, bio }) => {
  return (
    <div className="flex flex-col md:flex-row items-center w-full max-w-[804px] bg-[#D9D9D9] rounded-[25px] p-6 md:px-10 gap-6 md:gap-8">
      <img
        className="w-32 h-32 md:w-[220px] md:h-[220px] rounded-full border-2 border-[#005CFF] hover:scale-[102%] transition-all duration-300"
        src={avatar_url}
        alt="Avatar"
      />
      <div className="flex flex-col gap-4 w-full text-center md:text-left">
        <h2 className="text-[#005CFF] text-xl md:text-2xl font-bold">
          {name || "Sem Nome"}
        </h2>
        <p className="text-[15px] font-light">
          {bio || "Sem biografia disponível"}
        </p>
      </div>
    </div>
  );
};