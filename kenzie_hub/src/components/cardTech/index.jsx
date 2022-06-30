import EditModal from "../../components/EditModal";
import { useState } from "react";

const CardTech = ({ techTitle, techStatus, techId, token, user, userId, setUser }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div onClick={handleOpen} className="techsCard" key={techTitle}>
      <h4 className="title">{techTitle}</h4>
      <h4 className="status">{techStatus}</h4>
      <EditModal
        techTitle={techTitle}
        techStatus={techStatus}
        open={open}
        handleClose={handleClose}
        techId={techId}
        setUser={setUser}
        userId={userId}
        token={token}

        
      />
    </div>
  );
};

export default CardTech;
