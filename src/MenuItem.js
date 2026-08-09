import React, { useState } from "react";

const WHATSAPP_NUMBER = "917011671691";

const MenuItem = ({ item }) => {
  const { title, img, fullPrice, halfPrice } = item;
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState("full");

  const selectedPrice = variant === "half" && halfPrice ? halfPrice : fullPrice;

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => Math.max(1, q - 1));

  const handleOrder = () => {
    const message = `Hi Fullstack Foods! I'd like to order:\n${quantity} x ${title} (${selectedPrice})\n\nPlease confirm my order.`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <article className="menu-item">
      <img src={img} alt={title} className="photo" />
      <div className="item-info">
        <header>
          <h4>{title}</h4>
          <div className="price-row">
            <button
              type="button"
              className={`price ${variant === "full" ? "price-selected" : ""}`}
              onClick={() => setVariant("full")}
            >
              {fullPrice}
            </button>
            {halfPrice && (
              <button
                type="button"
                className={`price ${
                  variant === "half" ? "price-selected" : ""
                }`}
                onClick={() => setVariant("half")}
              >
                {halfPrice}
              </button>
            )}
          </div>
        </header>
        <div className="order-row">
          <div className="qty-stepper">
            <button
              type="button"
              onClick={decrement}
              aria-label="Decrease quantity"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              type="button"
              onClick={increment}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
          <button type="button" className="whatsapp-btn" onClick={handleOrder}>
            Order on WhatsApp
          </button>
        </div>
      </div>
    </article>
  );
};

export default MenuItem;
