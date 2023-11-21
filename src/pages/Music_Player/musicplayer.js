import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { MyToken } from "../ContextAPI/context";
import { useNavigate, useLocation } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./musicPlayer.css";
import Navbar from "../Home/navbar";

// import { BeatLoader } from "react-spinners";
// const LoadingSpinner = () => (
//   <div className="loading-spinner">
//     <BeatLoader color="#d1793b" size={30} className="BeatLoader" />
//   </div>
// );

const MusicPlayer = () => {
  const ids = useParams();
  console.log(ids.id);
  const [data, setData] = useState([]);
  const token = useContext(MyToken);
  const parameters = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };

  useEffect(() => {
    // setLoading(true); // Set loading to true before fetching data

    fetch(`https://api.spotify.com/v1/tracks?ids=${ids.id}`, parameters)
      .then((res) => res.json())
      .then((data) => {
        setData(data.tracks);
        // setLoading(false); // Reset loading state after fetching data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // setLoading(false); // Reset loading state in case of an error
      });
  }, [token, ids.id]);
  console.log(data);
  return (
    <>
      <Navbar />
      {data &&
        data.length > 0 &&
        data.map((item, index) => (
          <div className="map">
            <div className="player">
              <div className="imgbox">
                <img src={item.album.images[0]?.url} alt="image"></img>
              </div>
              <audio
                src={item.preview_url}
                key={index}
                type="audio/mp3"
                controls
              />
            </div>
            <h2>
              {data[0].name}

              <p>{data[0].album.name}</p>
            </h2>
          </div>
        ))}
    </>
  );
};

export default MusicPlayer;
