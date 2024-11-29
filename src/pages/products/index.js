import { useState, useEffect } from "react";
import { fetchProducts } from "../../lib/productServices/commerce";
import Layout from "../../components/Layout";
import Link from "next/link";
import styles from "../../components/Styling.module.css";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch products on component mount
  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData); // Assuming the data has a list of products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getProducts();
  }, []);

  // Handle search input change
  const handleSearch = (e) => {
    e.preventDefault();
    const query = search.toLowerCase();
    const results = products.filter(
      (product) => product.title.toLowerCase().includes(query) // Search by product title
    );
    setSearchResults(results);
  };

  // Determine which products to display (either search results or all products)
  const displayProducts = searchResults.length > 0 ? searchResults : products;

  return (
    <Layout>
      <div>
        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          style={{ margin: "20px", marginLeft: "480px" }}
        >
          <input
            type="text"
            style={{
              marginLeft: "400px",
              color: "black",
              backgroundColor: "white",
              fontSize: 20,
              height: 50,
              width: 350,
            }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for products..."
          />
          <button
            type="submit"
            style={{
              marginLeft: "2em",
              height: 50,
              fontSize: 20,
              border: "2px solid black",
              borderRadius: "5px",
            }}
          >
            Search
          </button>
        </form>

        {/* Display Products */}
        <div className={styles.prod}>
          {Array.isArray(displayProducts) &&
            displayProducts.map((product) => (
              <div key={product.id} className={styles.card}>
                <Link href={`/products/${product.id}`} className={styles.text}>
                  <img
                    className={styles.img}
                    src={product.image}
                    alt={product.title}
                  />
                  <h2 className={styles.text}>{product.title}</h2>
                  <p className={styles.text}>${product.price}</p>
                </Link>
                <button
                  className={styles.bton}
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );

  // Add product to cart
  function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
  }
};

export default ProductsPage;
