import React, { useState } from "react";
import { Rate } from "antd";
import Movielist from "../movielist/Movielist";
import Filter from "../filter/filter";
import Navigation from "../navigation/navigation";
import Footer from "../footer/footer";
import Addmovie from "../addmovie/addmovie";
import "./home.css";

const movieList = [
  {
    id: 1,
    name: "Fast & Furious 8",
    description:
      "In the film, Dominic Toretto has settled down with his wife Letty Ortiz, until cyberterrorist Cipher coerces him into working for her and turns him against his team, forcing them to find Dom and take down Cipher.",
    rating: 1,
    posterUrl:
      "https://sergetisseron.com/wp-content/uploads/2018/03/fast-furious-8-92720-670x949.jpg",
    Trailer: "https://www.youtube.com/embed/uisBaTkQAEs",
  },
  {
    id: 2,
    name: "Wrath of Man",
    description:
      "Wrath of Man is a 2021 action thriller heist film directed by Guy Ritchie, from a script he co-wrote with Ivan Atkinson and Marn Davies, and is loosely based on the 2004 French film Cash Truck by Nicolas Boukhrief. ..",
    rating: 4,
    posterUrl:
      "https://mrjavan.com/wp-content/uploads/2021/07/Wrath-of-Man.jpeg",
    Trailer: "https://www.youtube.com/embed/my4eXuV0MbI",
  },
  {
    id: 3,
    name: "BlackList",
    description:
      "The Blacklist, which debuted on the network in 2013 and follows U.S. Navy officer turned high-profile criminal Raymond Red Reddington as he works with the FBI to catch his blacklist of mobsters",
    rating: 5,
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BNDFkZDI5ZGUtYTdkOC00YTFiLWJjNjMtNTQ3ZjIxMTY2ZjMyXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_FMjpg_UX1000_.jpg",
    Trailer: "https://www.youtube.com/embed/vtIlfk7-GtI",
  },
  {
    id: 4,
    name: "Avengers EndGame",
    description:
      "The Blacklist, which debuted on the network in 2013 and follows U.S. Navy officer turned high-profile criminal Raymond Red Reddington as he works with the FBI to catch his blacklist of mobsters",
    rating: 3,
    posterUrl:
      "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",
    Trailer: "https://www.youtube.com/embed/TcMBFSGVi1c",
  },
  {
    id: 5,
    name: "Spider-Man Far.from.home",
    description:
      "The Blacklist, which debuted on the network in 2013 and follows U.S. Navy officer turned high-profile criminal Raymond Red Reddington as he works with the FBI to catch his blacklist of mobsters",
    rating: 4,
    posterUrl:
      "https://fr.web.img6.acsta.net/pictures/19/05/24/12/34/5876657.jpg",
    Trailer: "https://www.youtube.com/embed/Nt9L1jCKGnE",
  },
  {
    id: 6,
    name: "Don't Breath2",
    description:
      "The Blacklist, which debuted on the network in 2013 and follows U.S. Navy officer turned high-profile criminal Raymond Red Reddington as he works with the FBI to catch his blacklist of mobsters",
    rating: 3,
    posterUrl:
      "https://www.movies.ch/db_data/movies/dontbreathe2/artwrk/ki_l/PAT_DB2_ONESHEET_A4_210x297_FV_PC_RGB_300_.jpg",
    Trailer: "https://www.youtube.com/embed/gRbG2tjHYCA",
  },
  {
    id: 7,
    name: "Extraction",
    description:
      "The Blacklist, which debuted on the network in 2013 and follows U.S. Navy officer turned high-profile criminal Raymond Red Reddington as he works with the FBI to catch his blacklist of mobsters",
    rating: 5,
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BMDJiNzUwYzEtNmQ2Yy00NWE4LWEwNzctM2M0MjE0OGUxZTA3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    Trailer: "https://www.youtube.com/embed/L6P3nI6VnlY",
  },
  {
    id: 8,
    name: "Jumanji Next Level",
    description:
      "The Blacklist, which debuted on the network in 2013 and follows U.S. Navy officer turned high-profile criminal Raymond Red Reddington as he works with the FBI to catch his blacklist of mobsters",
    rating: 4,
    posterUrl:
      "https://fr.web.img4.acsta.net/pictures/19/11/07/12/52/2054035.jpg",
    Trailer: "https://www.youtube.com/embed/rBxcF-r9Ibs",
  },
];

function home() {
  const [movieListState, setMovieListState] = useState(movieList);
  const [searchTerm, setSearchTerm] = useState("");
  const [toShow, setToShow] = useState(movieList);

  const [rate, setRate] = useState(0);
  const handleRate = (value) => {
    setRate(value);
  };
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const movieListHandler = (NewMovie) => {
    setMovieListState((prevState) => prevState.push(NewMovie));
  };

  return (
    <div className="bodddy">
      <Navigation />
      <Rate onChange={handleRate} value={rate} />
      <Filter handleChange={handleChange} />
      <Movielist
        movieList={toShow}
        search={searchTerm}
        rate={rate}
        className="listContainer"
      />
      <Addmovie movieListHandler={movieListHandler} />
      <Footer />
    </div>
  );
}

export default home;
