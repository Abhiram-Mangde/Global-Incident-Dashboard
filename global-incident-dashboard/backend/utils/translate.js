const axios = require('axios');

async function translateText(text, targetLang) {
  try {
    const res = await axios.post(
      'https://api.lingo.ai/v1/translate',
      { text, target_language: targetLang },
      { headers: { Authorization: `Bearer ${process.env.LINGO_TOKEN}` } }
    );
    return res.data.translated_text;
  } catch (e) {
    return text; // fallback if translation fails
  }
}

module.exports = { translateText };
