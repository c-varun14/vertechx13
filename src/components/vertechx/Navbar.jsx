"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import "./navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    closeMenu();
  }, [pathname]);

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <Link href="/" className="logo" onClick={closeMenu}>
          <Image
            src="/assets/mvjLogo.webp"
            alt="MVJCE Logo"
            width={200}
            height={75}
            style={{ height: "75px", objectFit: "contain", width: "auto" }}
            priority
          />
        </Link>

        <i
          className={`bx ${isMenuOpen ? "bx-x" : "bx-menu"}`}
          id="menu-icon"
          onClick={toggleMenu}
        ></i>

        <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
          <Link href="/events/AE&AS" data-text="Events" onClick={closeMenu}>
            Events
          </Link>
          <Link href="/schedule" data-text="Schedule" onClick={closeMenu}>
            Schedule
          </Link>
          <Link href="/brochure" data-text="Brochure" onClick={closeMenu}>
            Brochure
          </Link>
          <Link href="/contact" data-text="Contact" onClick={closeMenu}>
            Contact
          </Link>
          <Link
            href="/register"
            className="register-link"
            data-text="Register"
            onClick={closeMenu}
          >
            Register
          </Link>
        </nav>
      </header>

      <div
        className={`nav-bg ${isMenuOpen ? "active" : ""}`}
        onClick={closeMenu}
      ></div>
    </>
  );
};

export default Navbar;
