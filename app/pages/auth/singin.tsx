import { Link } from "react-router";
import logo from "../../../assets/logo.png";

export function SingIn() {
  return (
    <div>
      <img src={logo} alt="logo" />
      <h1>Iniciar sesion</h1>
      <form>
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
      </form>
      <div>
        <Link to="/signup">
          Registrarme
        </Link>
      </div>
    </div>
  );
}

