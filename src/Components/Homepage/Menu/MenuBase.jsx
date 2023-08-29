import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Air from "../../../assets/Air.png";
import { Typography } from "@mui/material";
import banner from "../../../assets/banner.jpeg";
function MenuBase() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0} columns={16} >
        <div className="m-auto p-2" style={{ position: "relative" }}>
          <img src={banner} alt="" className=" rounded-xl" />
          <Typography
            variant="h1"
            noWrap
            component="div"
            className="absolute-top-left"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              padding: "20px",
              color: "white",
              fontWeight: "bolder",
            }}
          >
            NEW <br />
            DROPS <br />
            EVERY <br />
            WEEK !!
          </Typography>
        </div>
        {/* <Grid xs={8}>
          <div className="p-9 ">
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bolder",
              }}
            >
              {" "}
             Travis X Jordan 1 Retro Low 
            </Typography>
            <Typography variant="h6">
              BLACK/DARK MOCHA-UNIVERSITY RED-SAIL
            </Typography>
            <Typography variant="h9">
              Travis Scott’s Cactus Jack and Air Jordan debuted a luxurious take
              on the Trunner LX, marking the first collaboration between the
              two. Since then, the creative partnership has evolved to encompass
              a number of iconic styles, including an expansive range of Air
              Jordan 1s. Continuously reworking Michael Jordan’s inaugural
              silhouette, the collaborative project applies design cues from
              Scott’s creative universe to sneakers such as the AJ1 Retro High
              OG 'Mocha' and AJ1 Retro Low OG 'Olive.'
            </Typography>
          </div>
        </Grid>
        <Grid xs={8}>
          <div>
            <img src={Air} alt="" className="w-[80%]" />
          </div>{" "}
        </Grid> */}
      </Grid>
    </Box>
  );
}
export default MenuBase;
