// pages/products/[id].js
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { fetchProductById } from '../../lib/productServices/commerce';
import Layout from '../../components/Layout';
import styles from '../../components/Styling.module.css';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const getProduct = async () => {
      if (id) {
        const productData = await fetchProductById(id);
        setProduct(productData);
      }
    };

    getProduct();
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    
      <div className={styles.prodDetail}>
        <img
          className={styles.img}
          src={product.image?.url}
          alt={product.name}
        />
        <h1>{product.name}</h1>
        <p>{product.price.formatted_with_symbol}</p>
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: product.description }}
        />
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    
  );

  function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
  }
};

export default ProductDetail;
