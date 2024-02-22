import React, { useState, useEffect } from "react";
import { Tooltip } from "@mui/material";
import styles from "./ProductList.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./../../features/products/productsSlice";

const ProductList = () => {
  const [productsData, setProductsData] = useState([]);
  const productList = useSelector((store) => store.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try { //ideally this should be in a customHook, or in a separate file.
        const response = await fetch(
          "https://hub.dummyapis.com/products?noofRecords=10&idStarts=1001&currency=usd"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
         dispatch(add(data));
        setProductsData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // is empty to ensure the useEffect runs  once

  return (
    <div>
      <h2>Product List</h2>
      <ul className={styles["product-list"]}>
        {productList.map((product, index) => (
          <li key={index}>
            <Tooltip
              title={product.description}
              arrow
              placement="right"
            >
              <span>{`${product.name} - ${product.price}`}</span>
            </Tooltip>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
