import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        const { id, title, img, fullPrice, halfPrice } = menuItem;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <div>
                  <h4 className="price">{fullPrice}</h4>
                  {halfPrice && <h4 className="price">{halfPrice}</h4>}
                </div>
              </header>
              {/* <p className="item-text">{desc}</p> */}
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
