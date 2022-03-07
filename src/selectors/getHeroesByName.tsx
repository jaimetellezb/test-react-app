import { heroes } from "../data/heroes";

export const getHeroesByName = (name = "") => {
  console.log("buscando" + name);
  if (name.length === 0) {
    return;
  }
  name = name.toLowerCase();
  console.log("RRRRRR" + name);
  return heroes.filter((hero) => hero.superhero.toLowerCase().includes(name));
};
