import React, { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser"; 
import "./contact.form.css";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    emailjs
      .send(
        "service_xxx", // ID du service EmailJS
        "template_xxx", // ID du template
        {
          nom: formData.nom,
          prenom: formData.prenom,
          telephone: formData.telephone,
          email: formData.email,
          message: formData.message,
        },
        "YOUR_PUBLIC_KEY" // Clé publique EmailJS
      )
      .then(() => {
        setStatus("Message envoyé avec succès !");
        setIsSending(false);
        setFormData({
          nom: "",
          prenom: "",
          telephone: "",
          email: "",
          message: "",
        });
      })
      .catch(() => {
        setStatus("Erreur lors de l’envoi, veuillez réessayer");
        setIsSending(false);
      });
  };

  return (
    <div className="form-container">
      <fieldset className="fieldset">
        <legend className="title">Contactez-nous</legend>
        <form onSubmit={handleSubmit} className="form">

          <div className="input-container">
            <label>Nom</label>
            <br/>
            <input
              type="text"
              name="nom"
              required
              value={formData.nom}
              onChange={handleChange}
              className="input"
            />
          </div>

          <div className="input-container">
            <label>Prénom</label>
            <br/>
            <input
              type="text"
              name="prenom"
              required
              value={formData.prenom}
              onChange={handleChange}
              className="input"
            />
          </div>

          <div className="input-container">
            <label>Téléphone</label>
            <br/>
            <input
              type="tel"
              name="telephone"
              required
              value={formData.telephone}
              onChange={handleChange}
              className="input"
            />
          </div>

          <div className="input-container">
            <label>Email</label>
            <br/>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="input"
            />
          </div>

          <div className="input-container">
            <label>Message</label>
            <br/>
            <textarea
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="text-area"
            />
          </div>

          <button type="submit" className="submit" disabled={isSending}>
            {isSending ? "Envoi en cours..." : "Envoyer"}
          </button>

          {status && <p className="status-email">{status}</p>}
        </form>
      </fieldset>
    </div>
  );
};
