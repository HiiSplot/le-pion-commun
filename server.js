import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { nom, prenom, telephone, email, message, recaptchaToken } = req.body;

  // 1. Vérification du reCAPTCHA
  const captchaVerifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`;
  const captchaResponse = await fetch(captchaVerifyUrl, { method: "POST" });
  const captchaData = await captchaResponse.json();

  if (!captchaData.success || captchaData.score < 0.5) {
    return res.status(400).json({ message: "Échec de la vérification reCAPTCHA" });
  }

  // 2. Configuration du transporteur SMTP (IONOS)
  const transporter = nodemailer.createTransport({
    host: "smtp.ionos.fr", // ou smtp.ionos.com selon le service
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  // 3. Configuration du mail
  const mailOptions = {
    from: `"Formulaire site" <${process.env.MAIL_USER}>`,
    to: "contact@lepioncommun.fr",
    subject: "Nouveau message depuis le site",
    html: `
      <p><strong>Nom :</strong> ${nom}</p>
      <p><strong>Prénom :</strong> ${prenom}</p>
      <p><strong>Téléphone :</strong> ${telephone}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Message :</strong><br/>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email envoyé avec succès." });
  } catch (error) {
    console.error("Erreur d’envoi:", error);
    res.status(500).json({ message: "Erreur d’envoi du message." });
  }
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
