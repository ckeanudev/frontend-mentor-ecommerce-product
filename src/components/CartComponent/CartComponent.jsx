import React from "react";
import styles from "./CartComponent.module.css";
import { FaTrashAlt } from "react-icons/fa";

const CartComponent = ({ addToCart, setAddToCart }) => {
  return (
    <div className={styles.cart_container}>
      <h5>Cart</h5>
      {addToCart <= 0 && (
        <div className={styles.cart_content1}>
          <p>Your cart is empty</p>
        </div>
      )}

      {addToCart > 0 && (
        <div className={styles.cart_content2}>
          <div className={styles.top_cart}>
            <div className={styles.left_cart}>
              <img src="./images/image-product-1-thumbnail.jpg" alt="" />
              <div>
                <p>Fall Limited Edition Sneakers</p>
                <p>
                  $125.00 x {addToCart}{" "}
                  <strong style={{ color: "hsl(220, 13%, 13%)" }}>{`$${(
                    addToCart * 125.0
                  ).toFixed(2)}`}</strong>{" "}
                </p>
              </div>
            </div>

            <p
              className={styles.delete_btn}
              onClick={() => {
                setAddToCart(0);
              }}>
              <FaTrashAlt />
            </p>
          </div>

          <button className={styles.checkout_btn}>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartComponent;
