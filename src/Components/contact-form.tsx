import React, { useState, type FormEvent } from 'react';
import './contact.form.css'

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    telephone: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Formulaire soumis :', formData);
    // Ici tu peux faire une requête vers ton API ou envoyer un email
    alert('Merci pour votre message !');
  };

  return (
    <div className='form-container'>
      <fieldset className='fieldset'>
        <legend className="title">
          Contactez-nous
        </legend>
        <form onSubmit={handleSubmit} className="form">
          <div className="form">
            <div className="input-container">
              <label className="">Nom</label>
              <br />
              <input
                type="text"
                name="nom"
                placeholder='Doe'
                required
                value={formData.nom}
                onChange={handleChange}
                className="input"
              />
            </div>

            <div className="input-container">
              <label className="">Prénom</label>
              <br />
              <input
                type="text"
                name="prenom"
                placeholder='John'
                required
                value={formData.prenom}
                onChange={handleChange}
              className="input"
              />
            </div>
          </div>

          <div className="input-container">
            <label className="">Numéro de téléphone</label>
            <br />
            <input
              type="tel"
              name="telephone"
              required
              value={formData.telephone}
              onChange={handleChange}
              className="input"
              placeholder="06 12 34 56 78"
            />
          </div>

          <div className="input-container">
            <label className="">Adresse mail</label>
            <br />
            <input
              type="email"
              name="email"
              placeholder='john.doe@email.com'
              required
              value={formData.email}
              onChange={handleChange}
              className="input"
            />
          </div>

          <div className="input-container">
            <label className="">Message</label>
            <br />
            <textarea
              name="message"
              placeholder='Que souhaitez-vous nous dire ?'
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="text-area"
            />
          </div>

          <button
            type="submit"
            className="submit"
          >
            Envoyer
          </button>
        </form>
      </fieldset>
    </div>
  );
}
