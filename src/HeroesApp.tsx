import React, { useEffect, useReducer } from "react";
import { AuthContext } from "./auth/authContext";
import { authReducer } from "./auth/authReducer";
import { AppRouter } from "./routers/AppRouter";

const init = () => {
  return (
    JSON.parse(localStorage.getItem("user") as string) || { logged: false }
  );
};

export const HeroesApp = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  console.log("EMPIEZA", user);

  useEffect(() => {
    console.log("EN QUE MOMENTO ENTRA", user);
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  );
};
