"use client";
import React, { useState } from "react";
import "../../styles/product.css";
import rectangle from "@/public/assets/Rectangle 38.png";
import { motion, AnimatePresence } from "framer-motion";
import { Product } from "@/components";
const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images: string[] = [
    "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1992&q=80",
    "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  ];
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsData, setProductsData] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const productsPerPage = 6;
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNextPage = (): void => {
    setCurrentPage((prev) => prev + 1);
  };
  const handlePrevPage = (): void => {
    setCurrentPage((prev) => prev - 1);
  };

  // Calculate the indexes of the products to be displayed on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productsData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  return (
    <div className="product-page container content-margin-top flex-col">
      <h1>Products</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, placeat?
        Necessitatibus ipsum iusto mollitia magni, quasi accusamus, nostrum
        animi cupiditate ad sunt id, quod corrupti atque eaque dolorem. Labore,
        quae.
      </p>
      <div className="carousel-container">
        <button className="handlePrev" onClick={handlePrev}>
          P
        </button>
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="image-carousel"
          />
        </AnimatePresence>
        <button className="handleNext" onClick={handleNext}>
          N
        </button>
      </div>
      <div>
        <div className="flex-row justify-space-between pr-head">
          <h3>Total Product</h3>
          <div>Sort By</div>
        </div>
        <div className="products-section flex-row flex-wrap">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
      <div className="pagination flex-row align-center justify-center">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          &#9664;
        </button>
        <span>{currentPage}</span>
        <button
          onClick={handleNextPage}
          disabled={currentProducts.length < productsPerPage}
        >
          &#9654;
        </button>
      </div>
    </div>
  );
};

export default Products;
