import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Remove from "./Remove";
import Add from "./Add";

function CustomTabPanel(props) {
   const { children, value, index, ...other } = props;

   return (
      <div
         role="tabpanel"
         hidden={value !== index}
         id={`simple-tabpanel-${index}`}
         aria-labelledby={`simple-tab-${index}`}
         {...other}
      >
         {value === index && (
            <Box>
               <Typography sx={{ textDecoration: "none" }}>
                  {children}
               </Typography>
            </Box>
         )}
      </div>
   );
}

CustomTabPanel.propTypes = {
   children: PropTypes.node,
   index: PropTypes.number.isRequired,
   value: PropTypes.number.isRequired,
};

function a11yProps(index) {
   return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
   };
}

export default function InventoryTabs() {
   const [value, setValue] = React.useState(0);

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   return (
      <Box sx={{ width: "100%", mt: 3 }}>
         <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
               value={value}
               onChange={handleChange}
               aria-label="basic tabs example"
            >
               <Tab
                  label="Add"
                  {...a11yProps(0)}
                  sx={{ textTransform: "capitalize", fontWeight: "bold" }}
               />
               <Tab
                  label="Remove"
                  {...a11yProps(1)}
                  sx={{ textTransform: "capitalize", fontWeight: "bold" }}
               />
            </Tabs>
         </Box>
         <CustomTabPanel value={value} index={0}>
            <Add />
         </CustomTabPanel>
         <CustomTabPanel value={value} index={1}>
            <Remove />
         </CustomTabPanel>
      </Box>
   );
}
