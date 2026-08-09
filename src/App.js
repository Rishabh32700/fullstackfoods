import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const categories = allCategories;

  const filterItems = (category) => {
    setActiveCategory(category);
  };

  const filteredItems = items.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main>
      <header className="hero">
        <div className="hero-content">
          <h1>Fullstack Foods</h1>
          <p className="hero-tagline">Fresh &bull; Fast &bull; Flavourful</p>
          <a href="tel:+917011671691" className="hero-phone">
            +91 7011671691
          </a>
        </div>
      </header>
      <section className="menu section">
        <div className="title">
          <h3>our menu</h3>
          <div className="underline" />
        </div>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search for a dish..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={filteredItems} />
      </section>
    </main>
  );
}

export default App;
