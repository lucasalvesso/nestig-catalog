import React, { useEffect, useState } from "react";
import axios from "axios";
import Toolbar from "../toolbar/Toolbar";
import Card from "../card/Card";
import "./Cardlist.css";
import Loading from "../loading/Loading";

const CardList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async (params: {
    maxPrice?: number;
    minPrice?: number;
    categoryId?: number;
  }) => {
    try {
      const fetchedData = await fetchList(params);
      setData(fetchedData);
      setLoading(false);
    } catch (error) {
      console.error("Error while getting data:", error);
      setData([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData({});
  }, []);

  const handleSelectChange = (value: any) => {
    fetchData(value);
  };

  return (
    <>
      <Toolbar onSelect={handleSelectChange}></Toolbar>
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="product-list">
          {data.map((product: Record<string, any>, index) => (
            <Card
              key={index}
              title={product.title}
              price={product.price}
              image={product.imageUrl}
              rating={product.rating?.rate}
            ></Card>
          ))}
        </div>
      )}
    </>
  );
};

const fetchList = async (params: {
  maxPrice?: number;
  minPrice?: number;
  categoryId?: number;
}) => {
  try {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });

    const response = await axios.get(
      `http://localhost:3003/products?categoryId=${params.categoryId || ""}&minPrice=${params.minPrice || ""}&maxPrice=${params.maxPrice || ""}`,
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export default CardList;
