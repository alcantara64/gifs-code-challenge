import { Button, Modal } from "react-bootstrap";
import { GIF } from "../../types";
import "./index.css";

type ModalProps = {
  show: boolean;
  handleClose: () => void;
  gif: GIF | null;
};

export const AppModal: React.FC<ModalProps> = ({ show, handleClose, gif }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{gif?.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          className="modal_image"
          src={gif?.images.original.url}
          alt={gif?.title}
        />
        <div>{gif?.user?.description}</div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
