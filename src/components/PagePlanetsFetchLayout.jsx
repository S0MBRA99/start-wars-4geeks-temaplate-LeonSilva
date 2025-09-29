import React from "react";

const PagePlanetsFetchLayout = ({
  description,
  climated,
  created,
  diameter,
  gravity,
  name,
  orbital_period,
  population,
  rotation_period,
  surface_water,
  terrain,
  imgPlanet,
}) => {
  return (
    <>
      <div className="min-vh-100 w-100">
        <section className="border border-white mt-5 sectionElementBox container">
          <h1 className="text-center mt-4 fs-1">{name}</h1>
          <article className="row">
            <img
              className="col-8 col-lg-6 col-xl-4 mx-auto mt-5 mb-5 rounded-1"
              src={imgPlanet || "https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/placeholder.jpg"} 
              alt={name}
              onError={(e)=>{
                e.target.onerror = null;
                e.target.src="https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/placeholder.jpg"
              }}
            />
            <p className="col-8 col-lg-5 justify-content-center mx-auto mt-5">
              {description}
            </p>
            <div className="col-12 w-100 ms-auto mb-4 text-center">
                <button className="btn btn-secondary m-1 button-shadow">climated: {climated}</button>
                <button className="btn btn-secondary m-1 button-shadow">created: {created}</button>
                <button className="btn btn-secondary m-1 button-shadow">diameter: {diameter}</button>
                <button className="btn btn-secondary m-1 button-shadow">gravity: {gravity}</button>
                <button className="btn btn-secondary m-1 button-shadow">orbital period: {orbital_period}</button>
                <button className="btn btn-secondary m-1 button-shadow">population: {population}</button>
                <button className="btn btn-secondary m-1 button-shadow">rotation period: {rotation_period}</button>
                <button className="btn btn-secondary m-1 button-shadow">surface_water: {surface_water}</button>
                <button className="btn btn-secondary m-1 button-shadow">terrain: {terrain}</button>
            </div>
          </article>
        </section>
      </div>
    </>
  );
};

export default PagePlanetsFetchLayout;

