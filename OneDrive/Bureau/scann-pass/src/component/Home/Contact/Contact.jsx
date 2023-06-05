
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Contact.css";
import contactImg from "../../../Assets/contact.svg";
import Fade from "react-reveal/Fade";
import Swal from "sweetalert2";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [valeurSelectionnee, setValeurSelectionnee] = useState('');
  const [idnumber, setIdnumber] = useState('');
  const [objet, setObjet] = useState('');
  const [dateVisite, setDateVisite] = useState("");
  const [matricule, setMatricule] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleKeyPress = (event) => {
    const input = event.target;
    const value = input.value;
    const key = event.key;
    const isNumber = /^\d$/.test(key);

    if (isNumber && value.length >= 9) {
      event.preventDefault();
    }
  }
  const generateFirebaseId = () => {
    const firestore = firebase.firestore();
    const collectionRef = firestore.collection('visitor');
    const docRef = collectionRef.doc(); // Crée un document avec un ID unique
  
    return docRef.id;
  };
  
  // Utilisation de la fonction pour générer un ID unique
  const visitorId = generateFirebaseId();

  const onSubmit = (e) => {
    e.preventDefault();

    firebase.firestore().collection('visitor').add({
      name,
      email,
      valeurSelectionnee,
      idnumber,
      objet,
      dateVisite,
      matricule,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      visitorId:visitorId,
      isConfirmedService:false,
    })
    .then(() => {
      console.log('Données enregistrées avec succès dans Firebase!');
      Swal.fire({
        title: "Bravo!",
        text: "Parfait, votre demande sera traitée dans les meilleures conditions. Une réponse vous sera envoyée par e-mail.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        window.location.reload();
      });
    })
   
    .catch((error) => {
      console.error('Erreur lors de l\'enregistrement des données:', error);
    });
  };

  return (
    <section id="contact">
      <Col md={11} className="mx-auto">
        <Row>
          <Col md={6}>
            <Fade duration={2000} left>
              <form onSubmit={onSubmit} className="contactForm">
                <h4 className="miniTitle">Prenez un rendez-vous</h4>
                <h5 className="sectionTitle">En un seul click</h5>
                <Row>
                  <Col md={12}>
                    <input
                      placeholder="Nom complet"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Col>

                  <Col md={12}>
                    <input
                      placeholder="Email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Col>
                  <Col md={12}>
                    <input
                      placeholder="Numéro d'identité"
                      type="number"
                      required
                      value={idnumber}
                      onChange={(e) => setIdnumber(e.target.value)}
                      onKeyPress={handleKeyPress}
                    />
                  </Col>
                  <Col style={{
                    alignContent: "flex-start",
                    width: "100%",
                    maxWidth: "335px",
                  }}>
                    <input
                      type="checkbox"
                      onChange={(e) => setIsChecked(e.target.checked)}
                      className="form-check-input"
                    />
                    <span
                      style={{
                        color: "#aaa",
                        fontWeight: "700",
                        fontSize: "20px",
                      }}
                    >
                      J'ai un véhicule
                    </span>
                  </Col>
                  <Col md={12}>
                    <input
                      type="number"
                      placeholder="Matricule de véhicule"
                      onKeyPress={handleKeyPress}
                      disabled={!isChecked}
                      value={matricule}
                      onChange={(e) => setMatricule(e.target.value)}
                    />
                  </Col>
                  <Col md={12}>
                    <label>Sélectionnez un service</label>
                    <select
                      value={valeurSelectionnee}
                      onChange={(e) => setValeurSelectionnee(e.target.value)}
                    >
                      <option value="">Service disponible</option>
                      <option value="service général">Service général</option>
                      <option value="service d'hébergement">Service d'hébergement</option>
                      <option value="service de transport">Service de transport</option>
                    </select>
                  </Col>
                  <Col md={12}>
                    <input
                      placeholder="La date de la visite"
                      type="date"
                      required
                      value={dateVisite}
                      onChange={(e) => setDateVisite(e.target.value)}
                    />
                  </Col>
                  <Col md={12}>
                    <textarea
                      placeholder="Pourriez-vous nous expliquer davantage la raison de votre visite"
                      required
                      value={objet}
                      onChange={(e) => setObjet(e.target.value)}
                    />
                  </Col>
                </Row>
                <button className="branBtn" type="submit">
                  Envoyer
                </button>
              </form>
            </Fade>
          </Col>
          <Col md={6}>
            <Fade duration={2000} right>
              <img src={contactImg} alt="" className="img-fluid" />
            </Fade>
          </Col>
        </Row>
      </Col>
    </section>
  );
};

export default Contact;
