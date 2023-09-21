import { useState } from "react";
import classes from "./Navbar.module.css";
import star from "../../assets/icons/star.svg";
import menu from "../../assets/icons/menu.svg";
import closeIcon from "../../assets/icons/close.svg";

const navbar = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  {
    name: "Our Products",
    id: "product",
    child: [
      { name: "Product 1", id: "p1" },
      { name: "Product 2", id: "p2" },
      { name: "Product 3", id: "p3" },
      { name: "Product 4", id: "p4" },
    ],
  },
  { name: "Contact Us", id: "contact" },
];

const Navbar = () => {
  const [isDropdown, setIsDropdown] = useState(false);
  const [showNav, setShowNav] = useState(false);

  return (
    <div className={classes.container}>
      <div className={classes.title_div}>
        <h1 className={classes.title}>Shopkart</h1>
        <div className={classes.wishlist_bag}>
          <p>WISHLIST (0)</p>
          <p>BAG (0)</p>
        </div>
        <img
          onClick={() => setShowNav(true)}
          className={classes.hamburger}
          src={menu}
          alt="menu"
          style={{ display: showNav ? "none" : "" }}
        />
        <img
          onClick={() => setShowNav(false)}
          className={classes.hamburger}
          src={closeIcon}
          alt="close"
          style={{ display: showNav ? "" : "none" }}
        />
      </div>
      <div className={classes.divider} />
      <img className={classes.star} src={star} alt="star" />
      <ul className={classes.navbar}>
        {navbar.map((item, idx) =>
          !item.child ? (
            <li key={idx} className={classes.nav_item}>
              {item.name}
            </li>
          ) : (
            <div className={classes.product_div} key={idx}>
              <p
                onClick={() => setIsDropdown(!isDropdown)}
                className={classes.nav_item}
                style={{ textDecoration: isDropdown ? "underline" : "" }}
              >
                OUR PRODUCTS
              </p>
              <ul
                className={classes.product_list}
                style={{ display: isDropdown ? "block" : "none" }}
              >
                {item.child.map((prod, idx) => (
                  <li key={idx} className={classes.product_item}>
                    {prod.name}
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </ul>
      {showNav && (
        <div className={classes.responsive_nav}>
          {navbar.map((item) => {
            return <p key={item.id}>{item.name}</p>;
          })}
        </div>
      )}
    </div>
  );
};

export default Navbar;
