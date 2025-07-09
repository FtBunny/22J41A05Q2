import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Redirect from "./Redirect";

function Home() {
  const [longUrl, setLongUrl] = useState("");
  const [customCode, setCustomCode] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const navigate = useNavigate();

  const handleShorten = () => {
    if (!longUrl) {
      alert("Please enter a URL");
      return;
    }

    const code = customCode || Math.random().toString(36).substring(2, 7);
    const expiresAt = Date.now() + 30 * 60 * 1000; // 30 minutes

    const data = { longUrl, expiresAt };
    localStorage.setItem(code, JSON.stringify(data));
    setShortUrl(`http://localhost:3000/${code}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>URL Shortener</h2>
      <input
        type="text"
        placeholder="Enter long URL"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        style={{ width: "300px", padding: "8px" }}
      /><br /><br />
      <input
        type="text"
        placeholder="Custom short code (optional)"
        value={customCode}
        onChange={(e) => setCustomCode(e.target.value)}
        style={{ width: "300px", padding: "8px" }}
      /><br /><br />
      <button onClick={handleShorten} style={{ padding: "10px 20px" }}>Shorten</button>

      {shortUrl && (
        <p>Short URL: <a href={shortUrl}>{shortUrl}</a></p>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:code" element={<Redirect />} />
      </Routes>
    </Router>
  );
}

export default App;
