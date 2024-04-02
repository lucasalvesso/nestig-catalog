import React, { useEffect, useState } from "react";
import "./Toolbar.css";
import axios from "axios";

function Toolbar(props: any) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await fetchCategories();
        setData(fetchedData);
      } catch (error) {
        console.error("Error while getting data:", error);
        setData([]);
      }
    };

    fetchData();
  }, []);

  const filter = {
    maxPrice: 0,
    minPrice: 0,
    categoryId: 0,
  };

  const handleSelect = (event: any) => {
    const selectedValue = event.target.value;

    switch (selectedValue) {
      case "price1":
        filter.maxPrice = 100;
        filter.minPrice = 0;
        break;
      case "price2":
        filter.maxPrice = 300;
        filter.minPrice = 101;
        break;
      case "price3":
        filter.maxPrice = 100000;
        filter.minPrice = 301;
        break;
      case "allPrices":
        filter.maxPrice = 0;
        filter.minPrice = 0;
        break;
      case "allCategories":
        filter.categoryId = 0;
        break;
      default:
        filter.categoryId = selectedValue;
        break;
    }

    props.onSelect(filter);
  };

  return (
    <div className="custom-select-container">
      <div className="select-wrapper">
        <label htmlFor="categories">Categories</label>
        <select
          className="select-button"
          id="categories"
          onChange={handleSelect}
        >
          <option value="allCategories">All Categories</option>
          {data.map((item: Record<string, any>, index) => (
            <option value={item.id}>{item.name}</option>
          ))}
        </select>
      </div>
      <div className="select-wrapper">
        <label htmlFor="price">Price</label>
        <select className="select-button" id="price" onChange={handleSelect}>
          <option value="allPrices">All Prices</option>
          <option value="price1">0 ~ 100</option>
          <option value="price2">101 ~ 300</option>
          <option value="price3">{"> 300"}</option>
        </select>
      </div>
    </div>
  );
}

const fetchCategories = async () => {
  try {
    const response = await axios.get(
      `http://localhost:3003/products/categories`,
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export default Toolbar;
