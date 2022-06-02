import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Redirect, useHistory } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";
import "./style.css";

function Login({ authenticated, setAuthenticated }) {
  const schema = yup.object().shape({
    email: yup.string().required("Email obrigatório!").email("email inválido!"),
    password: yup.string().required("Senha obrigatória!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const loged = (data) => {
    console.log(data);
    api
      .post("sessions", data)
      .then((response) => {
        const { token, user } = response.data;

        localStorage.setItem("@kenzieHub:token", JSON.stringify(token));
        localStorage.setItem("@kenzieHub:user", JSON.stringify(user));

        setAuthenticated(true);

        return history.push("/Home");
      })
      .catch((err) => toast.error("Email ou senha inválidos!"));

    if (authenticated) {
      return <Redirect to="/Home" />;
    }
  };

  const history = useHistory();

  return (
    <div className="container">
      <h2>Kenzie Hub</h2>

      <div className="form">
        <h3>Login</h3>
        <form action="login" onSubmit={handleSubmit(loged)}>
          <input type="email" placeholder="e-mail" {...register("email")} />
          <p>{errors.email?.message}</p>

          <input
            type="password"
            placeholder="Senha"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>

          <button type="submit">Entrar</button>
        </form>

        <h4>Ainda não possui uma conta?</h4>
        <button onClick={() => history.push("/Register")}>Cadastre-se</button>
      </div>
    </div>
  );
}

export default Login;
