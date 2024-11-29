const fetchProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

const fetchProductById = async (id) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

export { fetchProducts, fetchProductById };
