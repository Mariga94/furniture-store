import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div>
      <Link href='/'>furnish</Link>
      <div>
        <Link href='/product'>Product</Link>
        <Link href='/services'>Services</Link>
        <Link href='/article'>Article</Link>
        <Link href='/about'>About Us</Link>
      </div>
    </div>
  );
};

export default Navbar;
