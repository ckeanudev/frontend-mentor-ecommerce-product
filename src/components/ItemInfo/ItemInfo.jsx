import React, { useState } from "react";
import styles from "./ItemInfo.module.css";
import { BsCart3 } from "react-icons/bs";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { thumbnailArr } from "../items";

const ItemInfo = ({
  quantity,
  setQuantity,
  addToCart,
  setAddToCart,
  showCart,
  setShowCart,
  setShowImage,
}) => {
  const [previewImgIndex, setPreviewImgIndex] = useState(0);
  const [previewImgURL, setPreviewImgURL] = useState(
    "./images/image-product-1.jpg"
  );

  return (
    <div className={styles.item_info_container}>
      <div className={styles.left_info_content}>
        <img
          className={styles.preview_img}
          src={previewImgURL}
          alt=""
          onClick={() => {
            setShowImage(true);
          }}
        />

        <div className={styles.photos_content}>
          {thumbnailArr.map((data, i) => {
            return (
              <img
                src={data.thumbnailUrl}
                style={
                  previewImgIndex === i
                    ? { border: "2px solid hsl(26, 100%, 55%)", opacity: "0.5" }
                    : { border: "2px solid transparent" }
                }
                onClick={() => {
                  setPreviewImgIndex(i);
                  setPreviewImgURL(data.previewUrl);
                }}
                key={i}
                alt=""
                srcSet=""
              />
            );
          })}
        </div>
      </div>

      <div className={styles.mobile_preview}>
        <img src={thumbnailArr[previewImgIndex].previewUrl} alt="" srcSet="" />
        <p
          className={styles.left_arrow_preview}
          onClick={() => {
            setPreviewImgIndex(() => {
              if (previewImgIndex > 0) {
                return previewImgIndex - 1;
              } else {
                return 0;
              }
            });
          }}>
          <BiChevronLeft size={"2rem"} />
        </p>

        <p
          className={styles.right_arrow_preview}
          onClick={() => {
            setPreviewImgIndex(() => {
              if (previewImgIndex < thumbnailArr.length - 1) {
                return previewImgIndex + 1;
              } else {
                return 3;
              }
            });
          }}>
          <BiChevronRight size={"2rem"} />
        </p>
      </div>

      <div className={styles.right_info_content}>
        <h4>SNEAKER COMPANY</h4>
        <h2>Fall Limited Edition Sneakers</h2>

        <p className={styles.description_p}>
          {`These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.`}
        </p>

        <div className={styles.price_and_prev_container}>
          <div className={styles.price_content}>
            <h3>$125.00</h3>
            <p className={styles.discount_p}>50%</p>
          </div>

          <p className={styles.prev_price_content}>$250.00</p>
        </div>

        <div className={styles.add_cart_content}>
          <div className={styles.min_max_content}>
            <p
              className={styles.min_plus_item}
              onClick={() => {
                setQuantity(quantity === 1 ? 1 : quantity - 1);
              }}>
              <img src="./images/icon-minus.svg" alt="" srcSet="" />
            </p>
            <p>{quantity || 0}</p>
            <p
              className={styles.min_plus_item}
              onClick={() => {
                setQuantity(quantity + 1);
              }}>
              <img src="./images/icon-plus.svg" alt="" srcSet="" />
            </p>
          </div>

          <button
            className={styles.add_to_cart_btn}
            onClick={() => {
              setAddToCart(addToCart + quantity);
            }}>
            <BsCart3 size={"1.3rem"} />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemInfo;
