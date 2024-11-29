import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import styles from "../components/Styling.module.css";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <Layout>
      <div>
        {cart.length === 0 ? (
          <p className={styles.text}>Your cart is empty.</p>
        ) : (
          <div className={styles.prod}>
            {cart.map((item, index) => (
              <div className={styles.card} key={index}>
                <div>
                  {item.image ? (
                    <img
                      className={styles.img}
                      src={item.image?.url || item.image}
                      alt={item.name}
                    />
                  ) : (
                    <p>No image available</p>
                  )}
                </div>
                {/* Update this with the correct property for title */}
                <div className={styles.text}>
                  {item.title || "No title available"}
                </div>
                <div className={styles.text}>
                  $
                  {item.price
                    ? item.price.formatted || item.price
                    : "No price available"}
                </div>
                <button
                  className={styles.bton}
                  onClick={() => removeFromCart(index)}
                >
                  Remove From Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
