import { useLayoutEffect, useRef } from "react";
import PropTypes from "prop-types";

export const PokemonCardLayoutEffect = ({ id, name, sprites = [] }) => {
  const titlePageRef = useRef();
  useLayoutEffect(() => {
    if (!titlePageRef?.current) return;
    const { height, width } = titlePageRef.current.getBoundingClientRect();
    console.log(height, width);
  }, []);
  return (
    <>
      <section className="tw-flex tw-h-52 tw-flex-row">
        <h2 ref={titlePageRef} className="tw-text-xl">
          <b>#{id}</b> - {name}
        </h2>

        {/*Imagenes*/}
        <div className="tw-flex tw-flex-wrap">
          {sprites.map((sprite, index) => (
            <img
              className="tw-flex tw-m-4"
              alt={index}
              key={index}
              src={sprite}
            />
          ))}
        </div>
      </section>
    </>
  );
};

PokemonCardLayoutEffect.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  sprites: PropTypes.arrayOf(PropTypes.string),
};
