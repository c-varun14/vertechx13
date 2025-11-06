"use client";

import { useState, useEffect, MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { signIn, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import "./navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const { data } = useSession();

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

  // Prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Helper function to check if link is active
  const isActive = (path: string) => {
    if (path === "/events") {
      return pathname.startsWith("/events");
    }
    return pathname === path;
  };

  // Handle login
  const handleLogin = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await signIn("google", {
      callbackUrl: pathname,
    });
  };

  // Auth Button Component
  const AuthButton = () => {
    if (!isMounted) return null;
    const user = data?.user;

    return user?.image && user?.name ? (
      <Link href="/profile" onClick={closeMenu}>
        <Avatar className="w-12 h-12 hover:cursor-pointer border-2 border-white/20 hover:border-white/40 transition-all">
          <AvatarImage
            src={user.image}
            alt={user.name}
            height={100}
            width={100}
          />
          <AvatarFallback className="bg-gradient-to-br from-[#ff6b6b] to-[#ff4757] text-white">
            {user.name.charAt(0)}
          </AvatarFallback>
        </Avatar>
      </Link>
    ) : (
      <button
        onClick={handleLogin}
        className="auth-button"
        data-text="Login"
      >
        Login
      </button>
    );
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`header ${scrolled ? "scrolled" : ""}`}
      >
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
          <Link
            href="/"
            className={isActive("/") ? "active" : ""}
            data-text="Home"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            href="/events/AE&AS"
            className={isActive("/events") ? "active" : ""}
            data-text="Events"
            onClick={closeMenu}
          >
            Events
          </Link>
          <Link
            href="/schedule"
            className={isActive("/schedule") ? "active" : ""}
            data-text="Schedule"
            onClick={closeMenu}
          >
            Schedule
          </Link>
          <a
            href="https://drive.google.com/file/d/1ECt7LkKeIfFWcfcP5MhFRZBP3L-dw3QV/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            data-text="Brochure"
            onClick={closeMenu}
          >
            Brochure
          </a>

          {/* Auth Button - Desktop & Mobile */}
          <div className="auth-container">
            <AuthButton />
          </div>
        </nav>
      </motion.header>

      <div
        className={`nav-bg ${isMenuOpen ? "active" : ""}`}
        onClick={closeMenu}
      ></div>
    </>
  );
};

export default Navbar;