import React from "react";

import "./footer.style.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>&copy; {new Date().getFullYear()} - Egomson Emmanuel</p>
    </div>
  );
};

export default Footer;
