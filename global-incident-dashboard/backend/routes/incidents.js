const express = require('express');
const router = express.Router();
const { translateText } = require('../utils/translate');

const incidents = [
  { id: 1, service: "Payments", severity: "Critical", message: "Database connection timeout" },
  { id: 2, service: "Auth", severity: "Warning", message: "High latency detected" },
];

router.get('/', async (req, res) => {
  const { lang } = req.query;
  const translated = await Promise.all(
    incidents.map(async (incident) => ({
      ...incident,
      translated_message: await translateText(incident.message, lang)
    }))
  );
  res.json(translated);
});

module.exports = router;
