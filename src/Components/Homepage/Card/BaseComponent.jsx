import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
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
        <div>hghg</div>
      ) : (
        <div className="p-5">
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 4, md: 6 }}
              columns={{ xs: 4, sm: 2, md: 12 }}
            >
              {data.map((item, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <Link to={`/view/${item.id}`}>
                    <CardStructure item={item} />
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Box>
        </div>
      )}
    </div>
  );
}

export default BaseComponent;
