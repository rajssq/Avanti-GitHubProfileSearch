import { useState } from "react";
import axios from "axios";
import logo from "../../assets/images/Logo.svg";
import dotsImg from "../../assets/images/DotsImage.svg";
import { Background } from "../../components/Background";
import { GitHubSearch } from "../../components/GitHubSearch";
import { SearchLoader } from "../../components/SearchLoader";
import { ErrorMessage } from "../../components/ErrorMessage";
import { GitHubProfile } from "../../components/GitHubProfile";

export const Home = () => {
  const [userData, setUserData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchGitHubUser = async (username) => {
    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(response.data);
    } catch {
      setUserData(null);
      setErrorMessage("Nenhum perfil foi encontrado com esse nome de usuário. Tente novamente");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Background />
      <section className="w-full h-screen flex justify-center items-center px-4 sm:px-8">
        <div className="relative z-30 w-full max-w-[1156px] min-h-[600px] py-10 px-5">
          <img
            className="z-[-10] absolute w-[300px] top-[-90px] left-[-65px] animate-[pulse_4s_ease-in-out_infinite]"
            src={dotsImg}
            alt="dots image"
          />
          <div className="relative z-30 w-full min-h-[600px] bg-black flex flex-col gap-[33px] py-10 px-5 items-center shadow-lg">
            <img src={logo} alt="logo profile github" />
            <GitHubSearch onSearch={fetchGitHubUser} />

            {isLoading && <SearchLoader />}
            {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
            {userData && !isLoading && (
              <GitHubProfile
                name={userData.name}
                avatar_url={userData.avatar_url}
                bio={userData.bio}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
};