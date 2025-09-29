import React from "react";

const PageCharactersFetchLayout = ({
  description,
  birthYear,
  eyeColor,
  gender,
  hairColor,
  height,
  mass,
  name,
  skinColor,
  imgCharacter,
}) => {
  return (
    <>
      <div className="min-vh-100 w-100">
        <section className="border border-white mt-5 sectionCharacterBox container">
          <h1 className="text-center mt-4 fs-1">{name}</h1>
          <article className="row">
            <img
              className="col-8 col-lg-6 col-xl-4 mx-auto mt-5 mb-5 rounded-1"
              src={imgCharacter}
              alt={name}
            />
            <p className="col-8 col-lg-5 justify-content-center mx-auto mt-5">
              {description}
            </p>
            <div className="col-12 w-100 ms-auto mb-4 text-center">
                <button className="btn btn-secondary m-1 button-shadow">birthYear: {birthYear}</button>
                <button className="btn btn-secondary m-1 button-shadow">eyeColor: {eyeColor}</button>
                <button className="btn btn-secondary m-1 button-shadow">gender: {gender}</button>
                <button className="btn btn-secondary m-1 button-shadow">hairColor" {hairColor}</button>
                <button className="btn btn-secondary m-1 button-shadow">height: {height}</button>
                <button className="btn btn-secondary m-1 button-shadow">mass: {mass}</button>
                <button className="btn btn-secondary m-1 button-shadow">skinColor: {skinColor}</button>
            </div>
          </article>
        </section>
      </div>
    </>
  );
};

export default PageCharactersFetchLayout;
