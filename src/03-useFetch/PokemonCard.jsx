import PropTypes from "prop-types";

export const PokemonCard = ({ id, name, sprites = [] }) => {
  return (
    <>
      <section>
        <h2 className="tw-text-xl">
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
PokemonCard.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    sprites: PropTypes.arrayOf(PropTypes.string)
}
