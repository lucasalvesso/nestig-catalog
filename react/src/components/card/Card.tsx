import React from "react";
import "./Card.css";
import Star from "../../images/star.svg";

interface CardProps {
  title: string;
  price: string;
  image: string;
  rating: number;
}

const Card: React.FC<CardProps> = ({ image, title, price, rating }) => {
  const getTitleName = (name: string) => {
    const slicedString = name.slice(0, 40);
    if (name.length > 40) {
      return slicedString + "...";
    }
    return slicedString;
  };

  return (
    <div className="product">
      <div className="image-container">
        <div className="badges">
          <span className="badge badge__new">NEW</span>
          <span className="badge badge__discount">-50%</span>
        </div>
        <img src={image} alt="product" className="product-image" />
        <span className="heart-badge">❤️</span>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
      <div className="details">
        <p>
          {new Array(Number((rating || 0).toFixed(0)))
            .fill(null)
            .map((item, index) => (
              <span key={index}>
                <img src={Star}></img>
              </span>
            ))}
        </p>
        <h3 className="product-name">{getTitleName(title)}</h3>
        <p className="product-price">${Number(price).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Card;
