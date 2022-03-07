import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { authReducer, TYPES } from "../../auth/authReducer";
import { useForm } from "../../hooks/useForm";

const AuthStateInit = {
  name: "Jaime",
  logged: false,
};

// export const startLogin = ( email, password ) => {
//   return async( dispatch ) => {

//       const resp = await fetchSinToken( 'auth', { email, password }, 'POST' );
//       const body = await resp.json();

//       if( body.ok ) {
//           localStorage.setItem('token', body.token );
//           localStorage.setItem('token-init-date', new Date().getTime() );

//           dispatch( login({
//               uid: body.uid,
//               name: body.name
//           }) )
//       } else {
//           Swal.fire('Error', body.msg, 'error');
//       }

//   }
// }
export const LoginScreen = () => {
  const navigate = useNavigate();

  const [user, dispatch] = useReducer(authReducer, AuthStateInit);

  const [formLoginValues, handleLoginInputChange] = useForm({
    lEmail: "",
    lPassword: "",
  });
  const { lEmail, lPassword } = formLoginValues;

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, value } = e.currentTarget;
    // aquí el dispatch puede llamar un action que sería validar la información
    // del usuario
    console.log(user);
    const dd = { name: lEmail, logged: true };
    localStorage.setItem("user", JSON.stringify(dd));

    console.log(lEmail, lPassword);
    dispatch({ type: TYPES.LOGIN, payload: { name: lEmail, logged: true } });
    navigate("/marvel", { replace: true });
  };
  return (
    <form onSubmit={handleLogin}>
      <h3>Sign In</h3>
      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          name="lEmail"
          value={lEmail}
          onChange={handleLoginInputChange}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          name="lPassword"
          value={lPassword}
          onChange={handleLoginInputChange}
        />
      </div>
      <div className="form-group">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>
      <button type="submit" className="btn btn-primary btn-block">
        Submit
      </button>
      <p className="forgot-password text-right">
        Forgot <a href="#">password?</a>
      </p>
    </form>
  );
};
