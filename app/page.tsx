"use client";
import Image from "next/image";
import "./page.css";
import hero from "../public/assets/hero.png";
import { FaMoneyBill } from "react-icons/fa";
import { BiTimer } from "react-icons/bi";
import { GiCardPickup } from "react-icons/gi";
import { motion } from "framer-motion";
import { Product } from "@/components";
export default function Home() {
  return (
    <main className="container main ">
      <motion.div
        initial={{ translateY: -50, scale: 0.5, opacity: 0 }}
        animate={{ translateY: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="content flex-col align-center"
      >
        <h1 className="title">Discover Furniture With High Quality Wood</h1>
        <p className="title-para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sint
          ipsum placeat saepe quae adipisci, numquam magni, vitae provident
          quidem molestias iure nobis quisquam, atque nisi! Rem inventore
          nesciunt tempora?
        </p>
        <Image
          src={hero}
          alt="hero-image"
          width={1240}
          height={480}
          className="hero-image"
        />
        <section className="first-section">
          <h2>Benefits when using our services</h2>
          <section className="inner-first-section flex-row">
            <article>
              <GiCardPickup className="react-icon" />

              <h3>Many choices</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur doloremque laudantium placeat tempora, odit error
                nobis, aut, fuga obcaecati atque labore dicta eaque eveniet
                debitis! Voluptatum unde suscipit eligendi explicabo.
              </p>
            </article>
            <article>
              <BiTimer className="react-icon" />

              <h3>Fast and On Time</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur doloremque laudantium placeat tempora, odit error
                nobis, aut, fuga obcaecati atque labore dicta eaque eveniet
                debitis! Voluptatum unde suscipit eligendi explicabo.
              </p>
            </article>
            <article>
              <FaMoneyBill className="react-icon" />
              <h3>Affordable Price</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur doloremque laudantium placeat tempora, odit error
                nobis, aut, fuga obcaecati atque labore dicta eaque eveniet
                debitis! Voluptatum unde suscipit eligendi explicabo.
              </p>
            </article>
          </section>
        </section>
        <section className="product-section flex-col align-center">
          <h2>Our popular product</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
            labore saepe veritatis officiis quod dolores vel rem libero officia
            reprehenderit numquam minus, fugiat facere quaerat nesciunt,
            voluptatibus vitae enim consequuntur?
          </p>
          <div className="popular-product-div flex-row">
            <Product />
            <Product />
            <Product />
          </div>
        </section>
      </motion.div>
    </main>
  );
}
