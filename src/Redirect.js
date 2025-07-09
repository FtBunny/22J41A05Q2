import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Redirect() {
  const { code } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const item = localStorage.getItem(code);
    if (item) {
      const { longUrl, expiresAt } = JSON.parse(item);
      if (Date.now() < expiresAt) {
        window.location.href = longUrl;
      } else {
        alert("Link expired");
        navigate("/");
      }
    } else {
      alert("Short code not found");
      navigate("/");
    }
  }, [code, navigate]);

  return null;
}

export default Redirect;
