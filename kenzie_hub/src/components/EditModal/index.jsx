import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import "./style.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import api from "../../services/api";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#212529",
  border: "2px solid #F8F9FA",
  boxShadow: 24,
  p: 4,
};

const EditModal = (techId) => {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("@kenzieHub:token"))
  );

  const schema = yup.object().shape({
    title: yup.string().required("Tecnologia obrigatória"),
    status: yup.string().required("Nivel obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const update = (data) => {
    console.log("aaa");
    api
      .put(`/users/techs/${techId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch(console.log("erro"));
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button className="addTechs" onClick={handleOpen}>
        <h4>+</h4>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form">
          <h4>Cadastrar tecnologia</h4>

          <form onSubmit={handleSubmit(update)}>
            <input placeholder="Nome da tech" {...register("title")}></input>
            <p>{errors.title?.message}</p>

            <select {...register("status")}>
              <option>Iniciante</option>
              <option>Intermediário</option>
              <option>Avançado</option>
            </select>
            <p>{errors.status?.message}</p>

            <button type="submit">Confirmar</button>
            <button>Excluir</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default EditModal;
