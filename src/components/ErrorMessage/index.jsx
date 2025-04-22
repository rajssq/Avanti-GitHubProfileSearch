export const ErrorMessage = ({ errorMessage }) => {
  return (
    <div className="bg-[#D9D9D9] flex justify-center items-center py-[17px] px-6 rounded-lg w-full max-w-[760px]">
      <p className="text-[#FF0000] text-sm sm:text-[20px] font-medium text-center max-w-[550px]">
        {errorMessage}
      </p>
    </div>
  );
};