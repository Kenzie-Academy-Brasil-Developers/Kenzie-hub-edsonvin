import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Redirect } from "react-router-dom";
import { useState, useEfect } from "react";
import api from "../../services/api";
import "./style.css";
import TechModal from "../../components/Modal";
import EditModal from "../../components/EditModal";

function Home({ authenticated }) {
  const history = useHistory();

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@kenzieHub:user"))
  );
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("@kenzieHub:token")) || ""
  );

  const [techId, setTechId] = useState();

  // if (!authenticated) {
  //   return <Redirect to="/" />;
  // }

  const att = () => {
    api
      .get(`/users/${user.id}`)
      .then(JSON.parse(localStorage.getItem("@kenzieHub:user")));
  };

  // function loadTechs() {
  //   api.get("/users/", {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  //   .then(response=>setTechs(response));
  // }

  // const editTech = (tech)=>{
  //   setTechId(tech.id);
  //   <EditModal techId={techId}/>

  // }

  // function removeTech(){

  // }

  const logout = () => {
    localStorage.clear();
    history.push("/");
  };

  return (
    <div className="container">
      <div className="header">
        <h2>Kenzie Hub</h2>

        <button onClick={logout}>Sair</button>
      </div>
      <p className="line"></p>
      <div className="greetings">
        <h3>Olá, {user.name}!</h3>
        <h3>{user.course_module}</h3>
      </div>
      <p className="line"></p>
      <div className="techs">
        <div className="techsHeader">
          <h3>Tecnologias</h3>
          <TechModal user={user} />
        </div>

        <div className="techsContainer">
          {user.techs.map((tech) => {
            return (
              <div className="techsCard" key={tech.title}>
                <h4 className="title">{tech.title}</h4>
                <h4 className="status">{tech.status}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
