import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { MyToken } from "../../ContextAPI/context";
import Navbar from "../navbar";
import ErrorModal from "../../../Dialog";
import { Button } from "react-bootstrap";

const ArtistAlbumMusic = () => {
  const ids = useParams();
  const [data, setData] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const accessToken = useContext(MyToken);
  const [tracks, setTracks] = useState([]);

  const parameters = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
  };

  useEffect(() => {
    if (accessToken) {
      fetch(`https://api.spotify.com/v1/albums?ids=${ids.id}`, parameters)
        .then((res) => res.json())
        .then((data) => {
          setTracks(data.albums);
          //   console.log(data[0].id);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setModalShow(true);
          setErrorMessage("Error fetching data");
        });
    }
  }, [accessToken, ids.id, parameters]);
  console.log();
  return (
    <>
      <Navbar />
      {Array.isArray(tracks) &&
        tracks.length > 0 &&
        tracks.map((item, index) => (
          <div className="map" key={index}>
            <div className="player">
              <div className="imgbox">
                <img src={tracks[0].images[0].url} alt="image" />
              </div>
              {item.tracks &&
                item.tracks.items &&
                item.tracks.items.length > 0 && (
                  <audio
                    src={item.tracks.items[0].preview_url}
                    key={index}
                    type="audio/mp3"
                    controls
                  />
                )}
              <center>
                <Button
                  className="btnFav"
                  style={{
                    background: "red",
                    border: "none",
                    color: "white",
                    fontSize: "20px",
                    marginBottom: "20px",
                    borderRadius: "50%",
                  }}
                >
                  <i
                    className="bi bi-heart btnFav"
                    style={{ color: "white", fontSize: "25px" }}
                  ></i>
                  {/* &nbsp;Add to Fav */}
                </Button>
              </center>
            </div>
            <h3
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "550px",
              }}
            >
              {item.tracks.items[0].name}
              {/* <p>{data[0].album.name}</p> */}
            </h3>
          </div>
        ))}
      <ErrorModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        errorMessage={errorMessage}
      />
    </>
  );
};

export default ArtistAlbumMusic;
