import { createContext } from "react";

export interface AuthContextProps {
  user: any;
  dispatch: any;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);
