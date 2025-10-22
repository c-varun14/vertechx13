"use client";
import React from 'react';

const Footer = () => {
  

  return (
    <>
      <style>{`
        .footer {
          position: relative;
          width: 100%;
          background: rgba(15, 19, 29, 0.8);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 3rem 5%;
          z-index: 100;
          margin-top: auto;
        }

        .footer-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
          margin-bottom: 2rem;
        }

        .footer-section {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-logo-container {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .footer-logo {
          height: 60px;
          object-fit: contain;
          filter: brightness(1.1);
          transition: all 0.3s ease;
        }

        .footer-logo:hover {
          filter: brightness(1.3) drop-shadow(0 0 15px rgba(255, 255, 255, 0.3));
          transform: scale(1.05);
        }

        .footer-title {
          font-size: 1.3rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #fff;
          margin-bottom: 0.5rem;
          position: relative;
          display: inline-block;
        }

        .footer-title::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 50px;
          height: 3px;
          background: linear-gradient(90deg, #ff6b6b, #ff4757);
          border-radius: 2px;
        }

        .footer-text {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .footer-link {
          position: relative;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 0.95rem;
          padding: 0.5rem 0.8rem;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
          transition: all 0.3s ease;
          overflow: hidden;
          display: inline-block;
          width: fit-content;
        }

        .footer-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .footer-link:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.08);
          transform: translateX(5px);
          box-shadow: 0 4px 15px rgba(255, 255, 255, 0.1);
        }

        .footer-link:hover::before {
          left: 100%;
        }

        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 0.5rem;
        }

        .social-icon {
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-radius: 10px;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 1.3rem;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }

        .social-icon::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.5s ease, height 0.5s ease;
        }

        .social-icon:hover {
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 8px 25px rgba(255, 107, 107, 0.3);
          border-color: rgba(255, 107, 107, 0.5);
          color: #fff;
        }

        .social-icon:hover::after {
          width: 100%;
          height: 100%;
        }

        .social-icon i {
          position: relative;
          z-index: 1;
        }

        .footer-divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          margin: 2rem 0;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.9rem;
        }

        .footer-bottom-links {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .footer-bottom-link {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
        }

        .footer-bottom-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #ff6b6b, #ff4757);
          transition: width 0.3s ease;
        }

        .footer-bottom-link:hover {
          color: #fff;
        }

        .footer-bottom-link:hover::after {
          width: 100%;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.95rem;
          padding: 0.5rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .contact-item i {
          font-size: 1.2rem;
          color: #ff6b6b;
        }

        .contact-item:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateX(5px);
        }

        .contact-item a {
          color: inherit;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-item a:hover {
          color: #fff;
        }

        @media (max-width: 768px) {
          .footer {
            padding: 2rem 5%;
          }

          .footer-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }

          .footer-bottom-links {
            justify-content: center;
          }

          .social-links {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .footer-title {
            font-size: 1.1rem;
          }

          .footer-text,
          .footer-link,
          .contact-item {
            font-size: 0.9rem;
          }

          .social-icon {
            width: 40px;
            height: 40px;
            font-size: 1.1rem;
          }
        }

        @keyframes glowPulse {
          0%, 100% {
            box-shadow: 0 0 10px rgba(255, 107, 107, 0.2);
          }
          50% {
            box-shadow: 0 0 20px rgba(255, 107, 107, 0.4);
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-container">
          {/* About Section */}
          <div className="footer-section">
            <div className="footer-logo-container">
              <img
                src="https://mvjce.edu.in/wp-content/uploads/2024/03/logo-autonomous-colored-001.webp"
                alt="MVJCE Logo"
                className="footer-logo"
              />
            </div>
            <p className="footer-text">
              VertechX is a premier tech fest that brings together the brightest minds in technology and innovation. Join us to explore, learn, and compete!
            </p>
            <div className="social-links">
              <a href="#" className="social-icon" aria-label="Facebook">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <div className="footer-links">
              <a href="/" className="footer-link">Home</a>
              <a href="/events" className="footer-link">Events</a>
              <a href="/my-registration" className="footer-link">My Registration</a>
              <a href="/contact" className="footer-link">Contact</a>
              <a href="/register" className="footer-link">Register</a>
            </div>
          </div>

          {/* Resources */}
          <div className="footer-section">
            <h3 className="footer-title">Resources</h3>
            <div className="footer-links">
              <a href="#" className="footer-link">About Us</a>
              <a href="#" className="footer-link">Gallery</a>
              <a href="#" className="footer-link">FAQs</a>
              <a href="#" className="footer-link">Schedule</a>
              <a href="#" className="footer-link">Sponsors</a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">Contact Us</h3>
            <div className="contact-info">
              <div className="contact-item">
                <i className="bx bx-map"></i>
                <span>MVJ College of Engineering, Near ITPB, Whitefield, Bangalore, Karnataka, India</span>
              </div>
              <div className="contact-item">
                <i className="bx bx-envelope"></i>
                <a href="mailto:contactmvjce@gmail.com">contactmvjce@gmail.com</a>
              </div>
              <div className="contact-item">
                <i className="bx bx-phone"></i>
                <a href="tel:+919620659690">+91 96206 59690</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>&copy; 2025 VertechX. Built with ❤️ by VertechX Website Team.</p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">Privacy Policy</a>
            <a href="#" className="footer-bottom-link">Terms of Service</a>
            <a href="#" className="footer-bottom-link">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;