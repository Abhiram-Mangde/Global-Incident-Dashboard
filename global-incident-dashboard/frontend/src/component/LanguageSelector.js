import React from "react";

export default function LanguageSelector({ language, setLanguage }) {
  const langs = ["en", "es", "fr", "hi", "ja"];
  return (
    <select value={language} onChange={(e) => setLanguage(e.target.value)}>
      {langs.map((l) => <option key={l} value={l}>{l.toUpperCase()}</option>)}
    </select>
  );
}
