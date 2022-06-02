import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Redirect } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";
import "./style.css";

function Register({ authenticated }) {
  const strongRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Usuário obrigatório!")
      .matches(/[a-z]/gi, "Apenas letras!"),
    email: yup.string().required("Email obrigatório!").email("email inválido!"),
    password: yup
      .string()
      .required("Senha obrigatória!")
      .min(8, "min 8 characteres")
      .matches(
        strongRegex,
        "Deve conter pelo menos uma letra, um numero e um símbolo."
      ),

    confirmation: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas não conferem!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const regUser = ({ name, email, password, course_module }) => {
    const user = {
      name,
      email,
      password,
      course_module,
      bio: "Lorem ipsum dolor emet",
      contact: "linkedin/in/johndoe",
    };
    console.log(user);
    api
      .post("/users", user)
      .then((response) => {
        console.log(response.data);
        toast.success("Conta criada com sucesso!");
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Falha na criação da conta!");
      });

    if (authenticated) {
      return <Redirect to="/Home" />;
    }
  };

  const history = useHistory();

  return (
    <div className="container">
      <div className="header">
        <h2>Kenzie Hub</h2>
        <button
          onClick={() => {
            history.push("/");
          }}
        >
          Voltar
        </button>
      </div>

      <div className="formCont">
        <form className="form" onSubmit={handleSubmit(regUser)}>
          <div className="text">
            <h3>Crie sua conta!</h3>
            <p>Rápido e grátis, vamos nessa!</p>
          </div>

          <input type="text" placeholder="Nome" {...register("name")} />
          <p>{errors.name?.message}</p>

          <input type="email" placeholder="e-mail" {...register("email")} />
          <p>{errors.email?.message}</p>

          <input
            type="password"
            placeholder="Senha"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>

          <input
            type="password"
            placeholder="Confirme sua senha"
            {...register("confirmation")}
          />

          <label for="module">Selecione seu módulo:</label>
          <select name="module" {...register("course_module")}>
            <option value="M1">1º Módulo</option>
            <option value="M2">2º Módulo</option>
            <option value="M3">3º Módulo</option>
            <option value="M4">4º Módulo</option>
          </select>

          <p>{errors.confirmation?.message}</p>

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
