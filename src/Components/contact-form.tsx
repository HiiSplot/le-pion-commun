import React, { useState, useRef, type FormEvent } from "react";
import ReCAPTCHA from "react-google-recaptcha";
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
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus(null);

    if (!captchaValue) {
      setStatus("Veuillez valider le reCAPTCHA");
      return;
    }

    setIsSending(true);

    emailjs
      .send(
        "service_nrelfnh",
        "template_8adiq7c",
        {    
          name: formData.prenom,
          lastname: formData.nom,
          email: formData.email,
          phone: formData.telephone,
          message: formData.message,
          "g-recaptcha-response": captchaValue,
        },
        "RnDdA8ugbNfHqFFEb"
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
        setCaptchaValue(null);
        recaptchaRef.current?.reset();
      })
      .catch(() => {
        setStatus("Erreur lors de l’envoi, veuillez réessayer.");
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
            <br />
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
            <br />
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
            <br />
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
            <br />
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
            <br />
            <textarea
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="text-area"
            />
          </div>
          <br />

          <div className="recaptcha-container">
            <ReCAPTCHA
              sitekey="6Ld-LrYrAAAAAIDO545T5xS4vnjVXYwDbBmAJxXK"
              onChange={handleCaptchaChange}
              ref={recaptchaRef}
            />
          </div>
          
          {status && <p className="status-email">{status}</p>}

          <button type="submit" className="submit" disabled={isSending}>
            {isSending ? "Envoi en cours..." : "Envoyer"}
          </button>

        </form>
      </fieldset>
    </div>
  );
};
