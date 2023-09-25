import React, { useEffect, useState } from "react";
import CardStructure from "./CardStructure";
import axios from "axios";
import { Link } from "react-router-dom";

function BaseComponent() {
  const [data, setData] = useState("");
  const [Loading, setLoading] = useState(true);

  const url = "http://localhost:4000";

  const SneakerData = async (e) => {
    const response = await axios.get(`${url}/SneakerCollections`);

    console.log(response);
    setData(response.data);
    console.log(data);
    setLoading(false);
  };
  useEffect(() => {
    SneakerData();
  }, []);

  return (
    <div>
      {Loading ? (
        <div>Loading</div>
      ) : (

          <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>
    
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {data.map((item) => (
                  <Link to={`/view/${item.id}`}>
                  <CardStructure item={item} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BaseComponent;
