"use client";

import React, { useRef } from "react";

const teamData = {
  chiefOrganisers: [
    { name: "Nandan", phone: "9019683569" },
    { name: "Heerath", phone: "+91 97972 43748" },
  ],
  websiteTeam: [
    { name: "S Naren Kumar", role: "Lead", phone: "8123816894" },
    { name: "Surabhi M R", role: "Sub-Lead", phone: "6363898557" },
  ],
  designTeam: [
    { name: "Shravan Ramakunja", role: "Lead", phone: "636850438" },
    { name: "Pranav H", role: "Sub-Lead", phone: "8277284358" },
  ],
  contentTeam: [
    { name: "Sai Sumedh", role: "Lead", phone: "6361354949" },
    { name: "Khanak Juttiyavar", role: "Sub-Lead", phone: "6362345242" },
  ],
  marketingTeam: [
    { name: "Manogna M Gowda", role: "Lead", phone: "9900787208" },
    { name: "Likhitha G", role: "Lead", phone: "8792233042" },
    { name: "Sathya Narayanan K", role: "Sub-Lead", phone: "7676623337" },
  ],
  sponsorshipTeam: [{ name: "P. Shreya", phone: "9591848646" }],
  departmentTeam: [
    { name: "KeerthiPriya R", role: "Lead", phone: "8073460884" },
    { name: "Akshatha V Rao", role: "Lead", phone: "8147130337" },
  ],
  facultyCoordinator: [{ name: "Hameem", phone: "9632053690" }],
};

const ContactSection = () => {
  const spotlightRefs = {
    chiefOrganisers: useRef<HTMLDivElement>(null),
    websiteTeam: useRef<HTMLDivElement>(null),
    designTeam: useRef<HTMLDivElement>(null),
    contentTeam: useRef<HTMLDivElement>(null),
    marketingTeam: useRef<HTMLDivElement>(null),
    sponsorshipTeam: useRef<HTMLDivElement>(null),
    departmentTeam: useRef<HTMLDivElement>(null),
    facultyCoordinator: useRef<HTMLDivElement>(null),
  };

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    spotlightRef: React.RefObject<HTMLDivElement>
  ) => {
    if (!spotlightRef.current) return;

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    spotlightRef.current.style.transition = "none";
    spotlightRef.current.style.transform = `translate(-50%, -50%) translate(${
      x - 50
    }%, ${y - 50}%)`;
  };

  const contactData = [
    {
      title: "Chief Organisers:",
      contacts: teamData.chiefOrganisers,
      ref: spotlightRefs.chiefOrganisers,
    },
    {
      title: "Website Team:",
      contacts: teamData.websiteTeam,
      ref: spotlightRefs.websiteTeam,
    },
    {
      title: "Design Team:",
      contacts: teamData.designTeam,
      ref: spotlightRefs.designTeam,
    },
    {
      title: "Content Team:",
      contacts: teamData.contentTeam,
      ref: spotlightRefs.contentTeam,
    },
    {
      title: "Marketing Team:",
      contacts: teamData.marketingTeam,
      ref: spotlightRefs.marketingTeam,
    },
    {
      title: "Sponsorship Team:",
      contacts: teamData.sponsorshipTeam,
      ref: spotlightRefs.sponsorshipTeam,
    },
    {
      title: "Department Team:",
      contacts: teamData.departmentTeam,
      ref: spotlightRefs.departmentTeam,
    },
    {
      title: "Faculty Co-ordinator:",
      contacts: teamData.facultyCoordinator,
      ref: spotlightRefs.facultyCoordinator,
    },
  ];

  return (
    <>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Exo:wght@400;700;900&display=swap");
        
        @import url('https://fonts.googleapis.com/css2?family=BBH+Sans+Bogle&family=Exo:ital,wght@0,100..900;1,100..900&display=swap');

        .contact-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1rem 2rem 2rem 2rem;
          z-index: 100;

        }

        .contact-heading {
          font-family: "Exo", sans-serif;
          font-size: 4rem;
          font-weight: 900;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 6px;
          text-align: center;
          margin-top: 2rem;
          margin-bottom: 3rem;
          background: linear-gradient(135deg, #fff 0%, #ff6b6b 50%, #fff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: glowPulse 3s ease-in-out infinite;
        }

        @keyframes glowPulse {
          0%,
          100% {
            filter: drop-shadow(0 0 15px rgba(255, 107, 107, 0.3));
          }
          50% {
            filter: drop-shadow(0 0 30px rgba(255, 107, 107, 0.6));
          }
        }

        .contact-content {
          max-width: 1200px;
          width: 100%;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .contact-card {
          position: relative;
          padding: 1px;
          border-radius: 19px;
          background: rgba(12, 8, 28, 0.43);
          overflow: hidden;
          cursor: pointer;
        }

        .contact-card-spotlight {
          position: absolute;
          left: 50%;
          top: 50%;
          width: clamp(300px, 175%, 800px);
          aspect-ratio: 1;
          background: linear-gradient(to bottom right, #ff9b26, #6b21ef);
          border-radius: 100%;
          filter: blur(60px);
          transform: translate(-50%, -50%);
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.5s ease, visibility 0.5s ease,
            transform 0.3s ease;
          z-index: 0;
          will-change: transform, opacity;
          pointer-events: none;
        }

        .contact-card:hover .contact-card-spotlight {
          opacity: 1;
          visibility: visible;
        }

        .contact-card-inner {
          position: relative;
          z-index: 10;
          padding: 2rem;
          background: rgba(12, 8, 28, 0.43);
          backdrop-filter: blur(10px);
          border-radius: 19px;
          min-height: 150px;
        }

        .contact-card-title {
          font-family: "Exo", sans-serif;
          font-size: 1.2rem;
          font-weight: 700;
          color: #ff6b6b;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 1.5rem;
          text-align: center;
          word-wrap: break-word;
          overflow-wrap: break-word;
          hyphens: auto;
          line-height: 1.4;
        }

        .contact-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .contact-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .contact-name {
          font-family: "Exo", sans-serif;
          font-size: 1rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
        }

        .contact-role {
          font-family: "Exo", sans-serif;
          font-size: 0.85rem;
          font-weight: 400;
          color: rgba(255, 107, 107, 0.9);
          font-style: italic;
        }

        .contact-phone {
          font-family: "Exo", sans-serif;
          font-size: 0.95rem;
          color: #ff9b26;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-phone:hover {
          color: #6b21ef;
        }

        .contact-footer {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1.5rem;
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 107, 107, 0.2);
        }

        .contact-footer-text {
          font-family: "Exo", sans-serif;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .social-icon {
          color: #ff6b6b;
          font-size: 1.5rem;
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          color: #ff9b26;
          transform: scale(1.2);
        }

        @media (min-width: 1441px) {
          .contact-content {
            gap: 2.5rem;
          }
          .contact-card-inner {
            padding: 2.5rem;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .contact-section {
            padding: 8rem 2rem 3rem 2rem;
          }
          .contact-heading {
            font-size: 3rem;
            letter-spacing: 4px;
            margin-top: 1.5rem;
            margin-bottom: 2.5rem;
          }
          .contact-content {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
          .contact-card-inner {
            padding: 1.8rem;
          }
          .contact-card-title {
            font-size: 1rem;
            letter-spacing: 1.5px;
          }
          .contact-name {
            font-size: 0.95rem;
          }
          .contact-role {
            font-size: 0.8rem;
          }
          .contact-phone {
            font-size: 0.9rem;
          }
        }

        @media (min-width: 641px) and (max-width: 768px) {
          .contact-section {
            padding: 8rem 1.5rem 3rem 1.5rem;
          }
          .contact-heading {
            font-size: 2.5rem;
            letter-spacing: 3px;
            margin-top: 1rem;
            margin-bottom: 2rem;
          }
          .contact-content {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
          .contact-card-inner {
            padding: 1.5rem;
          }
          .contact-card-title {
            font-size: 0.95rem;
            letter-spacing: 1px;
            margin-bottom: 1.2rem;
          }
          .contact-name {
            font-size: 0.9rem;
          }
          .contact-role {
            font-size: 0.75rem;
          }
          .contact-phone {
            font-size: 0.85rem;
          }
        }

        @media (min-width: 481px) and (max-width: 640px) {
          .contact-section {
            padding: 8rem 1.5rem 3rem 1.5rem;
          }
          .contact-heading {
            font-size: 2.2rem;
            letter-spacing: 2px;
            margin-top: 1rem;
            margin-bottom: 2rem;
          }
          .contact-content {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .contact-card-inner {
            padding: 1.5rem;
            min-height: 120px;
          }
          .contact-card-title {
            font-size: 0.9rem;
            letter-spacing: 1px;
            margin-bottom: 1.2rem;
          }
          .contact-name {
            font-size: 0.9rem;
          }
          .contact-role {
            font-size: 0.75rem;
          }
          .contact-phone {
            font-size: 0.85rem;
          }
          .contact-footer {
            margin-top: 2rem;
            padding-top: 1.5rem;
          }
          .social-icon {
            font-size: 1.3rem;
          }
          .contact-footer-text {
            font-size: 0.85rem;
          }
        }

        @media (max-width: 480px) {
          .contact-section {
            padding: 8rem 1rem 2.5rem 1rem;
          }
          .contact-heading {
            font-size: 1.8rem;
            letter-spacing: 2px;
            margin-top: 0.5rem;
            margin-bottom: 1.5rem;
          }
          .contact-content {
            grid-template-columns: 1fr;
            gap: 1.2rem;
          }
          .contact-card-inner {
            padding: 1.2rem;
            min-height: 100px;
          }
          .contact-card-title {
            font-size: 0.85rem;
            margin-bottom: 1rem;
            letter-spacing: 1px;
          }
          .contact-list {
            gap: 0.8rem;
          }
          .contact-item {
            gap: 0.3rem;
          }
          .contact-name {
            font-size: 0.85rem;
            text-align: center;
          }
          .contact-role {
            font-size: 0.7rem;
            display: block;
            margin-top: 0.2rem;
          }
          .contact-phone {
            font-size: 0.8rem;
          }
          .contact-footer {
            margin-top: 2rem;
            padding-top: 1.5rem;
            gap: 1rem;
          }
          .social-icon {
            font-size: 1.2rem;
          }
          .contact-footer-text {
            font-size: 0.75rem;
          }
        }

        @media (max-width: 360px) {
          .contact-section {
            padding: 8rem 0.8rem 2rem 0.8rem;
          }
          .contact-heading {
            font-size: 1.5rem;
            letter-spacing: 1px;
            margin-top: 0.5rem;
          }
          .contact-card-inner {
            padding: 1rem;
          }
          .contact-card-title {
            font-size: 0.8rem;
          }
          .contact-name {
            font-size: 0.8rem;
          }
          .contact-role {
            font-size: 0.65rem;
          }
          .contact-phone {
            font-size: 0.75rem;
          }
          .contact-footer-text {
            font-size: 0.7rem;
          }
        }
      `}</style>

      <section className="contact-section">
        <h2 className="contact-heading">Contact us</h2>
        <div className="contact-content">
          {contactData.map((section, index) => (
            <div
              key={index}
              className="contact-card"
              onMouseMove={(e) => handleMouseMove(e, section.ref)}
            >
              <div className="contact-card-spotlight" ref={section.ref}></div>
              <div className="contact-card-inner">
                <h3 className="contact-card-title">{section.title}</h3>
                <div className="contact-list">
                  {section.contacts.map((contact, idx) => (
                    <div key={idx} className="contact-item">
                      <span className="contact-name">
                        {contact.name}
                        {contact.role && (
                          <span className="contact-role"> ({contact.role})</span>
                        )}
                      </span>
                      <a
                        href={`tel:${contact.phone}`}
                        className="contact-phone"
                      >
                        {contact.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="contact-footer">
          <a
            href="https://www.instagram.com/vertechx?igsh=MTZva2JzbjJla25odQ=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-instagram social-icon"></i>
          </a>
          <span className="contact-footer-text">|</span>
          <a
            href="https://maps.app.goo.gl/pKxCyR5hKYVMi9FN9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bx-map social-icon"></i>
          </a>
        </div>
        <div className="contact-footer">
          <span className="contact-footer-text">
            VertechX 2024 | Tech InMomentum
          </span>
        </div>
      </section>
    </>
  );
};

export default ContactSection;