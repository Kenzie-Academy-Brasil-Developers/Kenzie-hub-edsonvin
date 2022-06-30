import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Redirect } from "react-router-dom";
import { useState, useEfect } from "react";
import api from "../../services/api";
import "./style.css";
import TechModal from "../../components/TechModal";
import CardTech from "../../components/cardTech";

function Home({ setToken, setUser, user, token }) {
  const history = useHistory();

  const att = () => {
    api.get(`/users/${user.id}`).then((response) => setUser(response.data));
  };

  att();

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
          <TechModal
            user={user}
            setUser={setUser}
            token={token}
            setToken={setToken}
            userId={user.id}
          />
        </div>

        <div className="techsContainer">
          {user.techs.map((tech) => {
            return (
              <CardTech
                techTitle={tech.title}
                techStatus={tech.status}
                techId={tech.id}
                userId={user.id}
                token={token}
                setUser={setUser}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
