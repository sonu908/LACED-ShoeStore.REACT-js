import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Page from "./Page";
import Footer from "../Homepage/Footer/Footer";
import MorelikeThese from "./MorelikeThese";
const url = "http://localhost:4000";

function View() {
  // const [data, setData] = useState("");

  // const SneakerData = async (e) => {
  //   const response = await axios.get(`${url}/SneakerCollections`);

  //   setData(response.data);
  //   console.log(data);
  // };
  // useEffect(() => {
  //   SneakerData();
  // }, []);

  const [ViewSneaker, setViewSneaker] = useState("");

  const { id } = useParams();
  console.log(id);

  const ViewSneakerDetails = async (e) => {
    const result = await axios.get(`${url}/Sneaker/${id}`);
    setViewSneaker(result.data);
  };
  useEffect(() => {
    ViewSneakerDetails();
  }, []);

  return (
    <div>
      <Page ViewSneaker={ViewSneaker} />
      <MorelikeThese />
            <Footer />

    </div>
  );
}

export default View;
