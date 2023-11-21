import React, { useContext, useState, useEffect } from "react";
import { Container, Row, Card, Button } from "react-bootstrap";
import "./search.css";
import Navbar from "../Home/navbar";
import { MyToken } from "../ContextAPI/context";
import { useNavigate, useLocation } from "react-router-dom";

const Search = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [albums, setAlbums] = useState([]);
  const [image, setImage] = useState();
  const token = useContext(MyToken);
  const navigate = useNavigate();
  const location = useLocation();
  let username = location.state ? location.state.username : null;

  const changeHandler = (e) => {
    setSearch(e.target.value);
  };

  const searchHandler = async () => {
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${search}&type=album`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const searchData = await response.json();
      setImage(searchData.albums.items[0].images[0].url);
      setData(searchData.albums.items[0].id);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    searchHandler();
  }, [search, token]);

  useEffect(() => {
    fetch(
      "https://api.spotify.com/v1/albums/" +
        data +
        "/tracks" +
        "?include_groups=album&market=IN&limit=50",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAlbums(data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data]);
  console.log(albums);
  return (
    <>
      <Navbar />
      <div className="container1">
        <div className="search-box">
          <input
            type="text"
            className="search-box-input"
            placeholder="What are you looking for?"
            value={search}
            onChange={changeHandler}
          />
          <button className="search-box-btn" onClick={searchHandler}>
            <i className="search-box-icon material-icons">
              <i
                className="bi bi-search"
                style={{ fontSize: "22px", fontWeight: "500" }}
              ></i>
            </i>
          </button>
        </div>
        <Container>
          <Row className="row row-cols-4 ">
            {albums &&
              albums.length > 0 &&
              albums.map((album, i) => (
                <a
                  href={`/search/album/${album.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Card key={i}>
                    <Card.Img src={image} />
                    <Card.Body>
                      <Card.Title>{album?.name}</Card.Title>
                    </Card.Body>
                  </Card>
                </a>
              ))}
          </Row>
        </Container>
        <Container
          style={{
            textAlign: "center",
            fontSize: "20px",
          }}
        >
          <Button
            onClick={() => {
              navigate("/search", { state: { username } });
            }}
            style={{
              fontSize: "20px",
              background: "linear-gradient(-135deg, #c850c0, #4158d0)",
            }}
          >
            Go Back
          </Button>
        </Container>
      </div>
    </>
  );
};

export default Search;
