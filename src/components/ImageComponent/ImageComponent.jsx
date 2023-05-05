import React, { useState } from "react";
import styles from "./ImageComponent.module.css";
import { thumbnailArr } from "../items";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { CgClose } from "react-icons/cg";

const ImageComponent = ({ setShowImage }) => {
  const [previewImgIndex, setPreviewImgIndex] = useState(0);

  return (
    <div className={styles.image_container}>
      <div className={styles.image_content}>
        <div className={styles.close_content}>
          <CgClose
            className={styles.close_btn}
            size={"2rem"}
            onClick={() => {
              setShowImage(false);
            }}
          />
        </div>
        <div className={styles.image_div}>
          <img
            src={thumbnailArr[previewImgIndex].previewUrl}
            alt=""
            srcSet=""
          />

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

        <div className={styles.thumbnail_container}>
          {thumbnailArr.map((data, i) => {
            return (
              <img
                style={
                  previewImgIndex === i
                    ? {
                        border: "3px solid hsl(26, 100%, 55%)",
                      }
                    : { border: "3px solid transparent" }
                }
                onClick={() => {
                  setPreviewImgIndex(i);
                }}
                key={i}
                src={data.thumbnailUrl}
                alt=""
                srcSet=""
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImageComponent;
