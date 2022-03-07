import { useReducer } from "react";
import { AuthContext } from "./auth/authContext";
import { authReducer, AuthState } from "./auth/authReducer";
import { AppRouter } from "./routers/AppRouter";

const init = () => {
  return localStorage.getItem("user") || { logged: false, name: "" };
};
const INITIAL_STATE: AuthState = {
  logged: false,
  name: "",
};
export const HeroesApp = () => {
  const [user, dispatch] = useReducer(authReducer, INITIAL_STATE);

  return (
    <>
      <AuthContext.Provider value={{ user, dispatch }}>
        <AppRouter />
      </AuthContext.Provider>
    </>
  );
};
