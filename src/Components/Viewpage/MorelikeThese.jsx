import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import MoreCard from "./MoreCard";

export default function Example() {
  const url = "http://localhost:4000";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchSneakerData = async () => {
      try {
        const response = await axios.get(`${url}/SneakerCollections`);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching sneaker data", error);
      }
    };

    fetchSneakerData();
  }, []);

  return (
    <div className="bg-white p-3">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 relative overflow-hidden">
          <div className="flex space-x-4 overflow-x-scroll p-3">
          {products.map((product) => (
  <MoreCard key={product.id} product={product} />
))}

          </div>

        </div>
      </div>
    </div>
  );
}
