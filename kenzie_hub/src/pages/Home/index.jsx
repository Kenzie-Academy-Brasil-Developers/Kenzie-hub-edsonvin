import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Redirect } from "react-router-dom";
import { useState, useEfect } from "react";
import api from "../../services/api";
// import { set } from "react-hook-form";

function Home({ name, modulo, authenticated }) {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("@kenzieHub:user"));
  const [token] = useState(JSON.parse(localStorage.getItem("@kenzieHub:token")) || "") 
  const [techs, setTechs] = useState([])

  if (!authenticated) {
    return <Redirect to="/Login" />;
  }

  // function loadTechs() {
  //   api.get("/users/techs", {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  //   .then(response=>setTechs(response));
  // }

  // function addTech(){
  //   api.post
  // }

  // function removeTech(){

  // }

  return (
    <div className="container">
      <div className="header">
        <h3>Kenzie Hub</h3>

        <button onClick={() => history.push("/")}>Sair</button>
      </div>

      <div className="greetings">
        <h4>Olá, {user.name}!</h4>
        <p>{user.course_module}</p>
      </div>

      <div className="techs">
        <div>
          <h3>Tecnologias</h3>
          <button>+++</button>
        </div>

        <div className="techsContainer"></div>
      </div>
    </div>
  );
}

export default Home;
