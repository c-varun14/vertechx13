"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <style>{`
        .footer {
          position: relative;
          width: 100%;
          background: rgba(15, 19, 29, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 3rem 5%;
          margin-top: auto;
          color: #fff;
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
          gap: 2rem;
          flex-wrap: wrap;
          margin-bottom: 1rem;
        }

        .footer-logo {
          height: 60px;
          object-fit: contain;
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .footer-logo:hover {
          transform: scale(1.05);
          filter: brightness(1.2) drop-shadow(0 0 15px #ff6b6b);
        }

        .footer-title {
          font-size: 1.3rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 0.5rem;
        }

        .footer-text {
          color: rgba(255, 255, 255, 0.75);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .footer-link {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 0.95rem;
          padding: 0.5rem 0.8rem;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.03);
          transition: all 0.3s ease;
        }

        .footer-link:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.08);
          transform: translateX(5px);
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
          border-radius: 10px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 1.3rem;
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          transform: scale(1.1);
          color: #fff;
          box-shadow: 0 0 15px rgba(255, 107, 107, 0.4);
        }

        .footer-divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          margin: 2rem 0;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          font-size: 0.9rem;
          color: rgba(255,255,255,0.6);
        }

        .footer-bottom-links {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .footer-bottom-link {
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          position: relative;
          transition: color 0.3s ease;
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

        /* Red glow link for Website Team */
        .website-team-link {
          color: #ff6b6b;
          font-weight: 600;
          text-decoration: none;
          position: relative;
          transition: all 0.3s ease;
        }

       

        .website-team-link:hover {
          color: #fff;
          text-shadow: 0 0 10px #ff6b6b, 0 0 20px #ff6b6b;
        }

        .website-team-link:hover::after {
          width: 150%;
          height: 150%;
        }

        @media (max-width: 768px) {
          .footer-logo-container {
            flex-direction: column;
            justify-content: center;
            align-items: center;
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
          .footer-logo {
            height: 50px;
          }

          .footer-text {
            font-size: 0.9rem;
          }

          .footer-link {
            font-size: 0.9rem;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-container">
          {/* About Section with both logos */}
          <div className="footer-section">
            <div className="footer-logo-container">
              <Image
                src="https://mvjce.edu.in/wp-content/uploads/2024/03/logo-autonomous-colored-001.webp"
                alt="MVJCE Logo"
                width={180}
                height={60}
                className="footer-logo"
              />
              <Image
                src="/mainlog.svg"
                alt="VertechX Logo"
                width={180}
                height={60}
                className="footer-logo"
              />
            </div>
            <p className="footer-text">
              VertechX is a premier tech fest that brings together the brightest minds in technology and innovation. Join us to explore, learn, and compete!
            </p>
            <div className="social-links">
              <a href="#" className="social-icon" aria-label="Facebook"><i className="bx bxl-facebook"></i></a>
              <a href="#" className="social-icon" aria-label="Twitter"><i className="bx bxl-twitter"></i></a>
              <a href="#" className="social-icon" aria-label="Instagram"><i className="bx bxl-instagram"></i></a>
              <a href="#" className="social-icon" aria-label="LinkedIn"><i className="bx bxl-linkedin"></i></a>
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
              <div className="contact-item"><i className="bx bx-map"></i><span>MVJ College of Engineering, Near ITPB, Whitefield, Bangalore, Karnataka, India</span></div>
              <div className="contact-item"><i className="bx bx-envelope"></i><a href="mailto:contactmvjce@gmail.com">contactmvjce@gmail.com</a></div>
              <div className="contact-item"><i className="bx bx-phone"></i><a href="tel:+919620659690">+91 96206 59690</a></div>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>
            &copy; 2025 VertechX. Built with ❤️ by{' '}
            <Link href="/websiteteam" className="website-team-link">
              VertechX Website Team
            </Link>
          </p>
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
