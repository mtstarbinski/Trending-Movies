import "./Card.css";

const Card = ({ element }) => {
  const { title, backdrop_path, overview, release_date, name, first_air_date} = element;

  return (
    <div className="card-container">
      <h1 className="card-title">{title}{name}</h1>
      <img
        className="movie-image"
        alt={`${title} cover`}
        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
      />
      <p>
        <b>Overview:</b> {overview}
      </p>
      <p>
        <b>Release Date:</b> {release_date}{first_air_date}
      </p>
    </div>
  );
};

export default Card;