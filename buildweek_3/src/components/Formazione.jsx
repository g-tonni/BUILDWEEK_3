import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPlus, FaTimes } from "react-icons/fa";
import "../css/Formazione.css"
import { useParams } from "react-router-dom";

const Formazione = () => {
  const params = useParams()

  console.log("FORMZIONE MONTATA");
  const [showModal, setShowModal] = useState(false);
  const [formazioni, setFormazioni] = useState([]);
  const [formData, setFormData] = useState({
    scuola: "",
    titolo: "",
    materia: "",
    codice: "",
    inizio: "",
    fine: "",
    descrizione: "",
  });
  const [errors, setErrors] = useState({});

  // Carica dati da localStorage all'avvio
  useEffect(() => {
    const saved = localStorage.getItem("formazioni");
    if (saved) setFormazioni(JSON.parse(saved));
  }, []);

  // Salva dati in localStorage ogni volta che cambia la lista
  useEffect(() => {
    localStorage.setItem("formazioni", JSON.stringify(formazioni));
  }, [formazioni]);

  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
    setFormData({
      scuola: "",
      titolo: "",
      materia: "",
      codice: "",
      inizio: "",
      fine: "",
      descrizione: "",
    });
    setErrors({});
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.scuola) newErrors.scuola = "Obbligatorio";
    if (!formData.titolo) newErrors.titolo = "Obbligatorio";
    if (!formData.inizio) newErrors.inizio = "Obbligatorio";
    return newErrors;
  };

  const handleSave = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setFormazioni([...formazioni, formData]);
    handleClose();
  };

  const handleDelete = (index) => {
    const newList = [...formazioni];
    newList.splice(index, 1);
    setFormazioni(newList);
  };

  return (
    <div className="container mt-4 linkedin-card">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h4>Formazione</h4>
        </div>
        <div
          /*style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            padding: "6px 12px",
            color: "black",
            borderRadius: "4px",
            fontWeight: "500",
            textDecoration: "none",
            transition: "transform 0.2s, background-color 0.2s",
            cursor: "pointer",

          }}} */
          className={"text-decoration-none " + (params.id === "me" ? "d-flex align-items-center" : "d-none")}>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); handleShow(); }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              padding: "6px 12px",
              color: "black",
              borderRadius: "4px",
              fontWeight: "500",
              textDecoration: "none",
              transition: "transform 0.2s, background-color 0.2s",
              cursor: "pointer",
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
          >

            <i class="bi bi-plus" style={{ fontSize: "32px" }}></i>
          </a>
          <i className="bi bi-pen"></i>
        </div>
      </div>

      {/* Lista formazioni */}
      <ul className={"list-group" + (params.id === "me" ? "" : "  d-none")}>
        {formazioni.map((item, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-start"
          >
            <div>
              <strong>{item.titolo}</strong> - {item.scuola} <br />
              {item.materia && <span>Materia: {item.materia}</span>} <br />
              {item.codice && <span>Codice corso: {item.codice}</span>} <br />
              Inizio: {item.inizio} {item.fine && `- Fine: ${item.fine}`} <br />
              {item.descrizione && <small>{item.descrizione}</small>}
            </div>
            <FaTimes
              className="text-danger"
              style={{ cursor: "pointer" }}
              onClick={() => handleDelete(index)}
              title="Elimina"
            />
          </li>
        ))}
      </ul>

      {/* Modal form */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Aggiungi Formazione</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-2">
              <Form.Label>Nome scuola/istituto *</Form.Label>
              <Form.Control
                type="text"
                name="scuola"
                value={formData.scuola}
                onChange={handleChange}
                isInvalid={!!errors.scuola}
              />
              <Form.Control.Feedback type="invalid">
                {errors.scuola}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Titolo (laurea, diploma) *</Form.Label>
              <Form.Control
                type="text"
                name="titolo"
                value={formData.titolo}
                onChange={handleChange}
                isInvalid={!!errors.titolo}
              />
              <Form.Control.Feedback type="invalid">
                {errors.titolo}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Materia/campo di studio</Form.Label>
              <Form.Control
                type="text"
                name="materia"
                value={formData.materia}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Codice corso (opzionale)</Form.Label>
              <Form.Control
                type="text"
                name="codice"
                value={formData.codice}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Data inizio *</Form.Label>
              <Form.Control
                type="date"
                name="inizio"
                value={formData.inizio}
                onChange={handleChange}
                isInvalid={!!errors.inizio}
              />
              <Form.Control.Feedback type="invalid">
                {errors.inizio}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Data fine</Form.Label>
              <Form.Control
                type="date"
                name="fine"
                value={formData.fine}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Descrizione</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="descrizione"
                value={formData.descrizione}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Annulla
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Salva
          </Button>
        </Modal.Footer>
      </Modal>
    </div >
  );
};

export default Formazione;