import * as queryString from "query-string";
import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../hero/HeroCard";

export const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.search);

  const { q: query = "" } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    searchText: query,
  });

  const { searchText } = formValues;
  console.log("QUERY" + query);

  const heroesFiltered = useMemo(
    () => getHeroesByName(query as string),
    [query]
  );

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("QUERY2" + query);
    navigate(`?q=${searchText}`);
  };

  return (
    <div>
      <h1>Búsquedas</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Buscar</h4>
          <hr />

          <form onSubmit={handleSearch}>
            <input
              type="text"
              name="searchText"
              placeholder="Buscar un héroe"
              className="form-control"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />

            <button type="submit" className="btn btn-outline-primary mt-1">
              Buscar...
            </button>
          </form>
        </div>

        <div className="col-7 animate__animated animate__fadeIn">
          <h4>Resultados</h4>
          <hr />

          {searchText === "" ? (
            <div className="alert alert-info">Buscar un héroe</div>
          ) : (
            heroesFiltered?.length === 0 && (
              <div className="alert alert-danger">
                No hay resultados: {searchText}
              </div>
            )
          )}

          {heroesFiltered?.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};
