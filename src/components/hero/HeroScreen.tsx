import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";

export const HeroScreen = () => {
  const { id } = useParams();
  // memoriza valores, para que no se llame la función
  // cada vez que hayan cambios en la pantalla
  const hero = useMemo(() => getHeroById(id), [id]);
  const navigate = useNavigate();

  const handleReturn = () => {
    // regresa a la página anterior
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to={`/`} />;
  }
  const imagePath = require("../../assets/" + hero.id + ".jpg");
  const { publisher, superhero, alter_ego, first_appearance, characters } =
    hero;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={imagePath}
          alt={superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8 animate__animated animate__fadeInRight">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego:</b>
            {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b>
            {publisher}
          </li>
          <li className="list-group-item">
            <b>Firs Appearance:</b>
            {first_appearance}
          </li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{characters}</p>

        <button className="btn btn-outline-info" onClick={handleReturn}>
          Regresar
        </button>
      </div>
    </div>
  );
};
