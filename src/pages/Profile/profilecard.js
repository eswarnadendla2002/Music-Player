import React from "react";
import "./profilecard.css";
import Navbar from "../Home/navbar";

const ProfileCard = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="top-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQvfDS9WF7wQhraoez4OMiIgaAbCu6xTSD3wqD467g_q8oFr0O&s"
            alt="user picture"
          />
        </section>

        <div className="details">
          <div className="name">
            <p className="bold">Name :-</p>&nbsp;<p>Eswar Nadendla</p>
          </div>
          <div className="name">
            <p className="bold">UserName :- </p>&nbsp;<p>eswar12</p>
          </div>
          <div className="name">
            <p className="bold">Email :- </p>&nbsp;
            <p>eswarnadendla1234@gmail.com</p>
          </div>
          <div className="name">
            <p className="bold">Password :- </p>&nbsp;<p>1223</p>
          </div>
        </div>
        <footer>
          <section className="links">
            <address>
              <a
                href="https://github.com/Jean-carje"
                target="_blank"
                className="update btns"
              >
                Update
              </a>
            </address>
            <address>
              <a
                href="https://pixabay.com/es/users/pexels-2286921/"
                target="_blank"
                className="delete btns"
              >
                Delete
              </a>
            </address>
          </section>
        </footer>
      </main>
    </>
  );
};

export default ProfileCard;
