import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import MyCards from "./components/myCards";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000,
    category: "Electronics",
  },
  {
    id: 2,
    name: "Mobile",
    price: 25000,
    category: "Electronics",
  },
  {
    id: 3,
    name: "Headphones",
    price: 2000,
    category: "Accessories",
  },
];

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyCards products={products} />
  </StrictMode>,
);