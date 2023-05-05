import styles from "./App.module.css";
import ImageComponent from "./components/ImageComponent/ImageComponent";
import ItemInfo from "./components/ItemInfo/ItemInfo";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";

function App() {
  const [quantity, setQuantity] = useState(1);
  const [addToCart, setAddToCart] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [showImage, setShowImage] = useState(false);

  return (
    <div className={styles.app_container}>
      <Navbar
        quantity={quantity}
        setQuantity={setQuantity}
        addToCart={addToCart}
        setAddToCart={setAddToCart}
        showCart={showCart}
        setShowCart={setShowCart}
      />

      <ItemInfo
        quantity={quantity}
        setQuantity={setQuantity}
        addToCart={addToCart}
        setAddToCart={setAddToCart}
        showCart={showCart}
        setShowCart={setShowCart}
        setShowImage={setShowImage}
      />

      {showImage && <ImageComponent setShowImage={setShowImage} />}
    </div>
  );
}

export default App;
