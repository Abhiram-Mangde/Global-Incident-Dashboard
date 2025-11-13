const axios = require('axios');
const { translateText } = require('./translate');

async function sendSlackAlert(incident, lang) {
  const msg = await translateText(`ALERT: ${incident.service} - ${incident.message}`, lang);
  await axios.post('https://hooks.slack.com/services/your/webhook/url', { text: msg });
}
