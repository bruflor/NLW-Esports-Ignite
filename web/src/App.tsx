import "./styles/main.css";
import logoImg from "./assets/logo-nlw-esports.png";
import { GameBanner } from "./components/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { useEffect, useState } from "react";

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/games")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu&nbsp;
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo&nbsp;
        </span>
        está aqui
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <GameBanner
          bannerUrl="/game-1.png"
          title="League of Legends"
          adsCount={0}
        />
      </div>

      <CreateAdBanner />
    </div>
  );
}

export default App;
