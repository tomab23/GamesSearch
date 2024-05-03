import React, { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import { useLocation } from "react-router-dom";
import cover from "../assets/images/Cover.jpg";
import cover2 from "../assets/images/cover3.png";
import cover3 from "../assets/images/coverNewVegas.jpg";
import cover4 from "../assets/images/cover76.jpg";
import TimeGameInfo from "../components/gameInfo/TimeGameInfo";

const GamePage = () => {
  const location = useLocation();

  const game = location.state;
  const [cov, setCov] = useState();

  useEffect(() => {
    if (game === "fallout 4") {
      setCov(cover);
    }
    if (game === "fallout 3") {
      setCov(cover2);
    }
    if (game === "fallout new vegas") {
      setCov(cover3);
    }
    if (game === "fallout 76") {
      setCov(cover4);
    }
  }, []);

  console.log("game info", location.state);

  return (
    <div>
      <Header home={true} />
      <div className="px-5">
        <h1 className="uppercase text-4xl font-jersey">{game}</h1>

        <div className="card card-side bg-base-100 shadow-xl mt-5">
          <figure>
            <img src={cov} alt="Movie" className="w-80 max-sm:w-52"/>
          </figure>
          <div className="card-body ">
            <h2 className="card-title">INFO</h2>
            <p>INFOS..... Temps de jeu pour</p>
          </div>
        </div>

        <TimeGameInfo game={game} />
      </div>
    </div>
  );
};

export default GamePage;
