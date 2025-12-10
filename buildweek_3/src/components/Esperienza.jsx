import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { Modal, Button, Form } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";

const Esperienza = () => {
  const [showModal, setShowModal] = useState(false);
  const [esperienze, setEsperienze] = useState([]);
  const [formData, setFormData] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });
  const [errors, setErrors] = useState({});

  const [idExp, setIdExp] = useState("")

  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
    setFormData({
      role: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
      area: "",
    });
    setErrors({});
  };



  /* const validate = () => {
    const newErrors = {};
    if (!formData.role) newErrors.role = "Obbligatorio";
    if (!formData.company) newErrors.company = "Obbligatorio";
    if (!formData.startDate) newErrors.startDate = "Obbligatorio";
    if (!formData.endDate) newErrors.endDate = "Obbligatorio";
    if (!formData.description) newErrors.description = "Obbligatorio";
    if (!formData.area) newErrors.area = "Obbligatorio";
    return newErrors;
  }; */

  /* const handleSave = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setEsperienze([...esperienze, formData]);
    handleClose();
  }; */

  const handleDelete = (index) => {
    const newList = [...esperienze];
    newList.splice(index, 1);
    setEsperienze(newList);
  };
  const PersonalId = useSelector((currentState) => {
    return currentState.profiles.profiloUtente?._id
  })

  const getExperience = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/profile/${PersonalId}/experiences`, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM4M2Q1YjYwMWIzODAwMTU0Nzk1NzIiLCJpYXQiOjE3NjUyOTM0MDMsImV4cCI6MTc2NjUwMzAwM30.gvIHt1f99YwL5uN0bIJSuEL3vle2nXwlLPeXm0bNUzQ',
      },
    }
    )
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('errore')
        }
      })
      .then((esperienze) => {
        console.log('esp1', esperienze)
        setEsperienze(esperienze)
      })

      .catch((err) => {
        console.log('errore', err)
      })


  }


  const postExperience = () => {
    let method
    let finalUrl
    let url = `https://striveschool-api.herokuapp.com/api/profile/${PersonalId}/experiences/`

    if (idExp !== "") {
      method = "PUT"
      finalUrl = url + idExp
    } else {
      method = "POST"
      finalUrl = url
    }

    fetch(finalUrl, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM4M2Q1YjYwMWIzODAwMTU0Nzk1NzIiLCJpYXQiOjE3NjUyOTM0MDMsImV4cCI6MTc2NjUwMzAwM30.gvIHt1f99YwL5uN0bIJSuEL3vle2nXwlLPeXm0bNUzQ',
      }, body: JSON.stringify(formData),
    }
    )
      .then((res) => {
        if (res.ok) {
          alert("Esperienza Postata")
          getExperience()
          handleClose()

        } else {
          throw new Error('errore')
        }
      })
      .catch((err) => {
        console.log('errore', err)
      })


  }
  console.log("ESPERIENZA MONTATA");

  useEffect(() => {
    if (PersonalId) {
      getExperience();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [PersonalId]);

  return (
    <>
      {PersonalId ? (
        <>
          <div className="container mt-4 linkedin-card">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <h4>Esperienza</h4>
              </div>
              <div style={{
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
              }}>
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

                  <i className="bi bi-plus" style={{ fontSize: "32px" }}></i>
                </a>
                <i className="bi bi-pen"></i>
              </div>
            </div>

            {/* Lista formazioni */}
            <ul className="list-group">
              {esperienze.map((item, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-start"
                >
                  <div>
                    <strong>{item.role}</strong> - {item.company} <br />


                    Inizio: {new Date(item.startDate).toLocaleDateString()} <br />
                    Fine: {new Date(item.endDate).toLocaleDateString()}<br />
                    {item.description && <small>{item.description}</small>}
                    {item.area && <small>{item.area}</small>}
                  </div>
                  <FaTimes
                    className="text-danger"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDelete(index)}
                    title="Elimina"
                  />
                  <a onClick={(e) => {
                    e.preventDefault();
                    handleShow();
                    setFormData({
                      role: item.role,
                      company: item.company,
                      startDate: item.startDate,
                      endDate: item.endDate,
                      description: item.description,
                      area: item.area,
                    });
                    setIdExp(item._id)
                  }}>
                    <i className="bi bi-pen"></i></a>
                </li>
              ))}
            </ul>

            {/* Modal form */}
            <Modal show={showModal} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Aggiungi esperienza</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={(e) => {
                  e.preventDefault()
                  postExperience()
                }}>
                  <Form.Group className="mb-2">
                    <Form.Label>Ruolo *</Form.Label>
                    <Form.Control
                      type="text"
                      name="ruolo"
                      value={formData.role}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          role: e.target.value
                        })
                      }}
                      isInvalid={!!errors.role}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.role}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-2">
                    <Form.Label>Azienda *</Form.Label>
                    <Form.Control
                      type="text"
                      name="Azienda"
                      value={formData.company}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          company: e.target.value
                        })
                      }}
                      isInvalid={!!errors.company}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.company}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-2">
                    <Form.Label>Data inizio *</Form.Label>
                    <Form.Control
                      type="date"
                      name="inizio"
                      value={formData.startDate}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          startDate: e.target.value
                        })
                      }}
                      isInvalid={!!errors.startDate}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.startDate}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-2">
                    <Form.Label>Data fine</Form.Label>
                    <Form.Control
                      type="date"
                      name="fine"
                      value={formData.endDate}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          endDate: e.target.value
                        })
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-2">
                    <Form.Label>Descrizione</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="descrizione"
                      value={formData.description}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          description: e.target.value
                        })
                      }}
                    />
                  </Form.Group>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Annulla
                    </Button>
                    <Button variant="primary" type="submit" >
                      Salva
                    </Button>
                  </Modal.Footer>
                </Form>
              </Modal.Body>

            </Modal>
          </div>
        </>
      ) : (<div>Errore..</div>)}
    </>
  );
};



;


export default Esperienza