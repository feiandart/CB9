import { useEffect, useState } from "react";
import "./App.css";
import NavigationLink from "./components/NavigationLinks";
import ProductCard from "./components/ProductCard/ProductCard";

const filterProductsByCategory = (productsArray, category) => {
  if (!category) {
    return productsArray
  }
  return productsArray.filter((product) => product.category === category)
};

const App = () => {

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentCategory, setCurrentCategory] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((initCategories) => setCategories(initCategories));
    
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((initProducts) => setProducts(initProducts));
  }, []);

  useEffect(() => {
    const filteredProductsByCategory = filterProductsByCategory(products, currentCategory)
    setFilteredProducts(filteredProductsByCategory);
  }, [products, currentCategory]);
  
  useEffect(() => {
    const filteredProductsByTitle = products.filter(product =>
      product.title.toLowerCase().includes(search.toLowerCase()))
    setFilteredProducts(filteredProductsByTitle);
  }, [products, search]);

  return (
    <>
      <header className="site--bar">
        <h1>Edge-Commerce</h1>
        <ul className="navigation">
          {categories.map((category, index) => {
            return (
              <NavigationLink
                handleClick={() => setCurrentCategory(category)}
                key={index}
                href={`#${index}`}
                text={category}
              />
            );
          })}
        </ul>

        <p>
          Filtra per nome &nbsp;
          <input
            onChange={(event) => setSearch(event.target.value)}
            type="text"
          />
        </p>

        <div className="products--list">
          {
            filteredProducts.map((product, index) => {
              return (
                <ProductCard
                  key={index}
                  name={product.title}
                  link={"#" + index}
                  price={product.price}
                  src={product.image}
                />
              )
            })
          }
        </div>

      </header>
    </>
  );
}

export default App
