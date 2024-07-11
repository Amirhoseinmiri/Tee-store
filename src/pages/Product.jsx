import React, { useEffect, useState } from "react";
import ProductCard from "../components/productCard";
import { useParams } from "react-router-dom";
import { ALLOWED_CATEGORIES, fetchCategory, fetchProducts } from "../utils";

const Product = ({ setCartItems }) => {
  const [productsData, setProductsData] = useState([]);
  const { category } = useParams();
  const [allProduct, setAllProduct] = useState([]);
  const [selceted, setSelected] = useState("");

  const handleFilterProduct = (selectCategory) => {
    const filterProduct = allProduct.filter((product) =>
      selectCategory ? product.category === selectCategory : product
    );
    setProductsData(filterProduct);
  };
  useEffect(() => {
    if (!category) {
      const getProduct = async () => {
        const response = await fetchProducts();
        setProductsData(response);
        setAllProduct(response);
      };
      getProduct();
    } else {
      const getCategoryProduct = async () => {
        const response = await fetchCategory(category);
        setProductsData(response);
      };
      getCategoryProduct();
    }
  }, [category]);
  return (
    <div className="products-cont">
      {!category ? (
        <div className="category-select">
          <span
            className={`${
              (selceted === "All" || selceted === "") && "cat-active"
            }`}
            onClick={() => {
              handleFilterProduct("");
              setSelected("All");
            }}
          >
            All
          </span>
          <span
            className={`${selceted === "women" && "cat-active"}`}
            onClick={() => {
              handleFilterProduct(ALLOWED_CATEGORIES.WOMENS);
              setSelected("women");
            }}
          >
            Women
          </span>
          <span
            className={`${selceted === "men" && "cat-active"}`}
            onClick={() => {
              handleFilterProduct(ALLOWED_CATEGORIES.MENS);
              setSelected("men");
            }}
          >
            Men{" "}
          </span>
        </div>
      ) : (
        <div className="category-select">
          <span className="cat-active"> {category}</span>
        </div>
      )}

      <div className="product-card-cont">
        {productsData.length > 0 &&
          productsData.map(
            (data) =>
              data.category !== "jwelery" &&
              data.category !== "electronics" && (
                <ProductCard
                  id={data.id}
                  rating={data.rating}
                  key={data.id}
                  img={data.image}
                  price={data.price}
                  productName={data.title}
                  categoryName={data.category}
                  description={data.description}
                  setCartItems={setCartItems}
                />
              )
          )}
      </div>
    </div>
  );
};

export default Product;
