import React from "react";

const PageStarshipsFetchLayout = ({
  description,
  MGLT,
  cargo_capacity,
  consumables,
  cost_in_credits,
  created,
  crew,
  hyperdrive_rating,
  length,
  manufacturer,
  max_atmosfering_speed,
  model,
  name,
  passengers,
  starship_class,
  imgStarship,
}) => {
  return (
    <>
      <div className="min-vh-100 w-100">
        <section className="border border-white mt-5 sectionElementBox container">
          <h1 className="text-center mt-4 fs-1">{name}</h1>
          <article className="row">
            <img
              className="col-8 col-lg-6 col-xl-4 mx-auto mt-5 mb-5 rounded-1"
              src={
                imgStarship ||
                "https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/placeholder.jpg"
              }
              alt={name}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/placeholder.jpg";
              }}
            />
            <p className="col-8 col-lg-5 justify-content-center mx-auto mt-5">
              {description}
            </p>
            <div className="col-12 w-100 ms-auto mb-4 text-center">
              <button className="btn btn-secondary m-1 button-shadow">
                MGLT: {MGLT}
              </button>
              <button className="btn btn-secondary m-1 button-shadow">
                cargo_capacity: {cargo_capacity}
              </button>
              <button className="btn btn-secondary m-1 button-shadow">
                consumables: {consumables}
              </button>
              <button className="btn btn-secondary m-1 button-shadow">
               cost_in_credits: {cost_in_credits}
              </button>
              <button className="btn btn-secondary m-1 button-shadow">
                created: {created}
              </button>
              <button className="btn btn-secondary m-1 button-shadow">
                crew: {crew}
              </button>
              <button className="btn btn-secondary m-1 button-shadow">
                hyperdrive_rating: {hyperdrive_rating}
              </button>
              <button className="btn btn-secondary m-1 button-shadow">
                length: {length}
              </button>
              <button className="btn btn-secondary m-1 button-shadow">
                manufacturer: {manufacturer}
              </button>
              <button className="btn btn-secondary m-1 button-shadow">
                max_atmosfering_speed: {max_atmosfering_speed}
              </button>
              <button className="btn btn-secondary m-1 button-shadow">
                model: {model}
              </button>
              <button className="btn btn-secondary m-1 button-shadow">
                passengers: {passengers}
              </button>
              <button className="btn btn-secondary m-1 button-shadow">
                starship_class: {starship_class}
              </button>
            </div>
          </article>
        </section>
      </div>
    </>
  );
};

export default PageStarshipsFetchLayout;
