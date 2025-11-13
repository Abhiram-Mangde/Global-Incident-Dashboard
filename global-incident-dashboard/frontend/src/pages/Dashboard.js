import React, { useEffect, useState } from "react";
import axios from "axios";
import LanguageSelector from "../components/LanguageSelector";

export default function Dashboard() {
  const [incidents, setIncidents] = useState([]);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    axios.get(`http://localhost:5000/incidents?lang=${language}`)
      .then(res => setIncidents(res.data));
  }, [language]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Global Incident Dashboard</h1>
      <LanguageSelector language={language} setLanguage={setLanguage} />
      <table className="w-full mt-4 border">
        <thead><tr><th>ID</th><th>Service</th><th>Severity</th><th>Message</th></tr></thead>
        <tbody>
          {incidents.map(i => (
            <tr key={i.id}>
              <td>{i.id}</td>
              <td>{i.service}</td>
              <td>{i.severity}</td>
              <td>{i.translated_message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
