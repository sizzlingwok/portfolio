import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <hr
        className="divider"
      />
      <footer className="footer-wrapper">
        <div
          className="footer-name"
        >
          andy duong © 2023{" "}
        </div>
        <nav className="footer-nav">
          <a
            className="footer-nav-link"
            href="https://www.linkedin.com/in/andyduong510/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </a>
          <a
            className="footer-nav-link"
            href="mailto:andyduong510@gmail.com"
          >
            email
          </a>
        </nav>
      </footer>
    </footer>
  );
}

export default Footer;