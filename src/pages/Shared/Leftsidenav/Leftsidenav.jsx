import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Leftsidenav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/news-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h3>All Categories</h3>
      {
        categories.map(category => <p key={category.id}>
          <Link>{category?.name}</Link>
        </p>)
      }
    </div>
  );
};

export default Leftsidenav;
