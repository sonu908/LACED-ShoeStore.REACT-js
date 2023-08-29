import * as React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

function CardStructure({ item }) {
  return (
    <div className=" border-2 rounded-xl hover:rounded-3xl transition-all ease-in-out overflow-hidden hover:shadow-xl">
      <CardMedia
        sx={{ height: 240 }}
        className="w-3/4 m-auto translate-y-3  hover:-translate-y-1 transition-all ease-in-out duration-1000"
        image={item.image_url}
      />

      <CardContent className="flex justify-center">
        <p className=" font-extralight">{item.name}</p>
      </CardContent>
    </div>
  );
}

export default CardStructure;
