import { Link } from "react-router-dom";

interface PropsHero {
  id: string;
  superhero: string;
  publisher: string;
  alter_ego: string;
  first_appearance: string;
  characters: string;
}

const imagePath = require.context("../../assets/", true);
export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}: PropsHero) => {
  // una forma para usar imágenes en src
  // const imagePath = require("../../assets/" + id + ".jpg");
  // otra forma

  return (
    <div className="col">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-md-4">
            {/* <img src={imagePath} */}
            <img
              src={imagePath(`./${id}.jpg`)}
              alt={superhero}
              className="card-img"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>

              {alter_ego !== characters && (
                <p className="text-muted">{characters}</p>
              )}

              <p className="card-text">
                <small className="text-muted"> {first_appearance}</small>
              </p>

              <Link to={`/hero/${id}`}>Más...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
