import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Login from "./Login";
import Register from "./Register";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState } from "react";

function Landing() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };

  return (
    <>
      <div>
        <header className="p-4 text-3xl font-bold border-black border-b-2">
          <h3>LACED.</h3>
        </header>
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0} columns={16}>
          <Grid xs={8}>
            <div className="p-8 m-auto font-sans font-bold">
              <p className="text-8xl">
                Unleash your inner sneakerhead with our exclusive collections.
              </p>
            </div>
          </Grid>
          <Grid xs={8}>
            <div className="flex items-center  h-screen p-9">
              <div>
                <Tabs>
                  <TabList className="flex gap-5">
                    <Tab
                      className={`text-3xl font-sans  tracking-widest mb-5 ${
                        selectedTab === 0
                          ? "text-black font-bold"
                          : "text-gray-500 , font-normal"
                      }`}
                      onClick={() => handleTabClick(0)}
                    >
                      LOGIN
                    </Tab>
                    <Tab
                      className={`text-3xl font-sans  tracking-widest mb-5 ${
                        selectedTab === 1
                          ? "text-black font-bold"
                          : "text-gray-500 , font-normal"
                      }`}
                      onClick={() => handleTabClick(1)}
                    >
                      REGISTER
                    </Tab>
                  </TabList>

                  <TabPanel>
                    <Login />
                  </TabPanel>
                  <TabPanel>
                    <Register />
                  </TabPanel>
                </Tabs>
              </div>{" "}
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Landing;
