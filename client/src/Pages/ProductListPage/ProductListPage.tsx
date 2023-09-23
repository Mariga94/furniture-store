import { useEffect, useState } from "react";
import "./ProductListPage.css";
import image from "../../assets/59a3541665aba6404a176b8b361a16fb.png";
import { SingleProductCard } from "../../Components";
import data from "../../data";
import { Product } from "../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
const ProductListPage = () => {
  const [products, setProducts] = useState<undefined | Product[]>(undefined);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [displayCategories, setDisplayedCategories] = useState(true);
  const productsPerPage: number = 6;

  useEffect(() => {
    setProducts(data);
  }, []);

  function handleDisplayCategories() {
    setDisplayedCategories((prev) => !prev);
  }

  const totalProducts: number = products?.length || 0;
  const totalPages: number = Math.ceil(totalProducts / productsPerPage);

  // Calculate the index range of products to display for the current page
  const indexOfLastProduct: number = currentPage * productsPerPage;
  const indexOfFirstProduct: number = indexOfLastProduct - productsPerPage;
  const currentProducts: Product[] | undefined = products?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
  };
  return (
    <div className="product-list flex-col">
      <section className="outer-padding flex-col align-center section-heading">
        <h1>Products</h1>
        <p>
          "Unlock exclusive access to our meticulously curated collection of
          furniture, crafted by our in-house design virtuosos."
        </p>
      </section>
      <section>
        <img src={image} alt="image" className="carousel-image" />
      </section>
      {/* <section className="search-filter-section ">
        <form className="search-filter_form">
          <input type="text" placeholder="Search property" />
          <button className="primary-button">Find Now</button>
        </form>
      </section> */}
      <section className="product-grid outer-padding flex-col">
        <div className="flex-row align-center product-grid_heading">
          <h2>Total Product</h2>
          <span className="furniture-count">{products?.length}</span>
        </div>
        <div className="product-content">
          <section className="left category-search flex-col">
            <input type="text" placeholder="Search" className="search" />
            <h3
              className="flex-row align-center justify-space_between"
              onClick={handleDisplayCategories}
            >
              Category
              <FontAwesomeIcon
                icon={displayCategories ? faAngleUp : faAngleDown}
                style={{ fontSize: "0.7rem" }}
              />
            </h3>
            <div
              className={`category-list ${displayCategories ? "active" : ""}`}
            >
              <label className="flex-row align-center">
                <input
                  type="checkbox"
                  className="category-checkbox"
                  name="livingRoom"
                />
                LivingRoom
              </label>
              <label className="flex-row align-center">
                <input
                  type="checkbox"
                  className="category-checkbox"
                  name="bedRoom"
                />
                BedRoom
              </label>
              <label className="flex-row align-center">
                <input
                  type="checkbox"
                  className="category-checkbox"
                  name="diningRoom"
                />
                Dining Room
              </label>
              <label className="flex-row align-center">
                <input
                  type="checkbox"
                  className="category-checkbox"
                  name="office"
                />
                Office
              </label>
            </div>
          </section>
          <section className="product-grid-content right">
            {currentProducts?.map((product: Product) => {
              return (
                <div key={product.id}>
                  <SingleProductCard product={product} />
                </div>
              );
            })}
          </section>
        </div>
      </section>
      <section className="outer-padding flex-row align-center justify-content_center">
        <ul className="pagination flex-row">
          {Array.from({ length: totalPages }, (_, i) => (
            <li
              key={i + 1}
              className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ProductListPage;
