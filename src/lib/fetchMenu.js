const fetchMenuData = async () => {
  try {
    const response = await fetch("https://raw.githubusercontent.com/mslthn/koda-b6-react/refs/heads/main/src/assets/data/products.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching menu data:", error);
  }
};

export default fetchMenuData