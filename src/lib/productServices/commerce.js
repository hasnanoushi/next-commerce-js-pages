const API_KEY = "pk_5706029c2e2bfc0eedb4b7868770e08a6ac575a64e2fc";
const fetchProducts = async () => {
  const response = await fetch("https://api.chec.io/v1/products", {
    headers: {
      "X-Authorization": API_KEY,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

const fetchProductById = async (id) => {
  const response = await fetch(`https://api.chec.io/v1/products/${id}`, {
    headers: {
      "X-Authorization": API_KEY,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

export { fetchProducts, fetchProductById };
