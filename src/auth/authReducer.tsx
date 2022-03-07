import { types } from "../types";

export enum TYPES {
  LOGIN = "[auth] Login",
  LOGOUT = "[auth] Logout",
}

type AuthAction =
  | { type: TYPES.LOGIN; payload: AuthState }
  | { type: TYPES.LOGOUT; payload: AuthState };

export interface AuthState {
  name: string;
  logged: boolean;
}

export const authReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  console.log("REDUCER", state);
  switch (action.type) {
    case types.login:
      return {
        ...state,
        logged: true,
      };
    case types.logout:
      return {
        ...state,
        logged: false,
      };
    default:
      return state;
  }
};
