import classes from "./NewProducts.module.css";
import starIcon from "../../assets/icons/star_black.svg";
import left from "../../assets/icons/left_arrow.svg";
import right from "../../assets/icons/right_arrow.svg";
import arrow from "../../assets/icons/arrow.svg";
import { useRef, useState } from "react";
import { useEffect } from "react";

const url = "https://fakestoreapi.com/products";

const NewProducts = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) containerRef.current.scrollLeft -= 150;
  };

  const scrollRight = () => {
    if (containerRef.current) containerRef.current.scrollLeft += 150;
  };

  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <div className={classes.header_title_div}>
          <h1>New products</h1>
          <div className={classes.line} />
          <img className={classes.starIcon} src={starIcon} alt="star" />
        </div>
        <div className={classes.arrows_btn_div}>
          <img src={left} alt="left" onClick={scrollLeft} />
          <img src={right} alt="right" onClick={scrollRight} />
        </div>
      </header>
      <div className={classes.lower_div}>
        <ul className={classes.sidebar}>
          <li>Apparel</li>
          <li className={classes.accesory}>Accessories</li>
          <li>Best Sellers</li>
          <li>50% off</li>
        </ul>
        <div className={classes.cards_div} ref={containerRef}>
          {products.length > 0 &&
            products.map((item) => {
              return <Card {...item} />;
            })}
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, description, image, price }) => {
  return (
    <div className={classes.card}>
      <div className={classes.img_div}>
        <img className={classes.product_img} src={image} alt="product" />
        <img className={classes.arrow} src={arrow} alt="arrow" />
      </div>
      <div className={classes.desc_div}>
        <h6 className={classes.product_title}>{title}</h6>
        <p className={classes.desc}>{description}</p>
        <p className={classes.price}>${price}</p>
      </div>
    </div>
  );
};

export default NewProducts;
