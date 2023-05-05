import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { BsCart3 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import CartComponent from "../CartComponent/CartComponent";

const Navbar = ({
  quantity,
  setQuantity,
  addToCart,
  setAddToCart,
  showCart,
  setShowCart,
}) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className={styles.navbar_container}>
      <div className={styles.navbar_content}>
        <div className={styles.left_navbar}>
          <GiHamburgerMenu
            size={"1.5rem"}
            className={styles.menu_btn}
            onClick={() => {
              setShowMenu(true);
            }}
          />

          <img
            className={styles.logo_img}
            src="./images/logo.svg"
            alt=""
            srcSet=""
          />

          <div className={styles.inner_navbar}>
            {/* <CgClose size={"2rem"} className={styles.close_menu} /> */}
            <p>Collections</p>
            <p>Men</p>
            <p>Women</p>
            <p>About</p>
            <p>Contact</p>
          </div>

          <div
            className={styles.black_container}
            style={showMenu ? { display: "block" } : { display: "none" }}>
            <div className={styles.inner_navbar2}>
              <CgClose
                size={"2rem"}
                className={styles.close_menu}
                onClick={() => {
                  setShowMenu(false);
                }}
              />
              <p>Collections</p>
              <p>Men</p>
              <p>Women</p>
              <p>About</p>
              <p>Contact</p>
            </div>
          </div>
        </div>

        <div className={styles.right_navbar}>
          <div className={styles.cart_content}>
            <BsCart3
              className={styles.cart_btn}
              size={"1.5rem"}
              onClick={() => {
                setShowCart((prevData) => {
                  if (prevData) {
                    return false;
                  } else {
                    return true;
                  }
                });
              }}
            />
            {addToCart > 0 && <p>{addToCart}</p>}
          </div>

          <img
            className={styles.avatar_btn}
            src="./images/image-avatar.png"
            alt=""
            srcSet=""
          />
        </div>

        {showCart && (
          <CartComponent addToCart={addToCart} setAddToCart={setAddToCart} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
