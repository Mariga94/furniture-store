"use client";
import React, { useState } from "react";
import "./Navbar.css";
import Link from "next/link";
import { BsPerson, BsCart } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = (): void => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className="navbar flex-row justify-space-between container align-center">
      <Link href="/">furnish</Link>
      <div className="flex-row nav-links">
        <Link href="/product" className="nav-link">
          Product
        </Link>
        <Link href="/services" className="nav-link">
          Services
        </Link>
        <Link href="/article" className="nav-link">
          Article
        </Link>
        <Link href="/about" className="nav-link">
          About Us
        </Link>
      </div>
      <div className="flex-row nav-link_icons">
        <BsCart className="navbar-react-icon" />
        <BsPerson className="navbar-react-icon" />
      </div>
      
    </div>
  );
};

export default Navbar;
