import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

const Card = ({ name, imgCard}) => {
  const navigate = useNavigate();
  const { store, dispatch } = useGlobalReducer();

  return (
    <div
      className="card me-3 mb-3 bg-dark text-white"
      style={{ minWidth: "17rem" }}
    >
      <img
        src={
          imgCard ||
          "https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/placeholder.jpg"
        }
        className="card-img-top img-card"
        alt={name}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/placeholder.jpg";
        }}
      />
      <div className="card-body">
        <h5 className="card-title text-center h-25">{name}</h5>
        <div className="w-100 h-75 d-flex align-items-center justify-content-center">
          <button
            className="btn btn-primary me-4 mt-auto"
            onClick={(e) => {
              e.preventDefault();
              navigate(`/${name}`);
            }}
          >
            More info!
          </button>
          <button
            className="btn btn-primary ms-4 mt-auto"
            onClick={(e) => {
              e.preventDefault();
              dispatch({
                type: "setLiked",
                payload: {
                  likedObj: (
                    <p>
                      {" "}
                      <Link to={`/${name}`}>{name}</Link>
                    </p>
                  ),
                },
              });
            }}
          >
            Favorite
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
