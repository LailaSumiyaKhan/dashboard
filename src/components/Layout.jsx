import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Outlet, useNavigate } from "react-router";
import HomeIcon from "@mui/icons-material/Home";
import TuneIcon from "@mui/icons-material/Tune";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import EditNoteIcon from "@mui/icons-material/EditNote";
import BarChartIcon from "@mui/icons-material/BarChart";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import SettingsIcon from "@mui/icons-material/Settings";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { setState } from "../appSlice";
import { colors } from "../utils";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
   ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.leavingScreen,
      }),
      marginRight: -drawerWidth,
      ...(open && {
         transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
         }),
         marginRight: 0,
      }),
   })
);

const AppBar = styled(MuiAppBar, {
   shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
   transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
   }),
   ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["margin", "width"], {
         easing: theme.transitions.easing.easeOut,
         duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: drawerWidth,
   }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
   display: "flex",
   alignItems: "center",
   padding: theme.spacing(0, 1),
   // necessary for content to be below app bar
   ...theme.mixins.toolbar,
   justifyContent: "flex-start",
}));

const menuItems = [
   {
      name: "Home",
      icon: <HomeIcon />,
      route: "/",
   },
   {
      name: "Inventory",
      icon: <InventoryIcon />,
      route: "/inventory",
   },
   {
      name: "Orders",
      icon: <ShoppingCartIcon />,
      route: "/orders",
   },
   {
      name: "Analytics",
      icon: <BarChartIcon />,
      route: "/analytics",
   },
   {
      name: "Customers",
      icon: <PermIdentityIcon />,
      route: "/customers",
   },
   {
      name: "Settings",
      icon: <SettingsIcon />,
      route: "/settings",
   },
];

export default function Layout() {
   const theme = useTheme();
   const [open, setOpen] = React.useState(false);
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const handleDrawerOpen = () => {
      setOpen(true);
   };

   const handleDrawerClose = () => {
      setOpen(false);
   };

   function logout() {
      dispatch(setState("username", ""));
      dispatch(setState("password", ""));
      dispatch(setState("isAuth", false));
      navigate("/login");
   }

   return (
      <Box sx={{ display: "flex" }}>
         <CssBaseline />
         <AppBar position="fixed" open={open}>
            <Toolbar>
               <Typography
                  variant="h6"
                  noWrap
                  sx={{ flexGrow: 1 }}
                  component="div"
               >
                  Dashboard
               </Typography>
               <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerOpen}
                  sx={{ ...(open && { display: "none" }) }}
               >
                  <MenuIcon />
               </IconButton>
            </Toolbar>
         </AppBar>
         <Main open={open}>
            <DrawerHeader />
            <Outlet />
         </Main>
         <Drawer
            sx={{
               width: drawerWidth,
               flexShrink: 0,
               "& .MuiDrawer-paper": {
                  width: drawerWidth,
               },
            }}
            variant="persistent"
            anchor="right"
            open={open}
         >
            <DrawerHeader>
               <IconButton onClick={handleDrawerClose}>
                  {theme.direction === "rtl" ? (
                     <ChevronLeftIcon />
                  ) : (
                     <ChevronRightIcon />
                  )}
               </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
               {menuItems.map((item, index) => (
                  <NavLink to={item.route} key={index}>
                     <ListItem
                        disablePadding
                        sx={{
                           "&:hover": {
                              bgcolor: colors.aliceBlue,
                           },
                        }}
                     >
                        <ListItemButton>
                           <ListItemIcon>{item.icon}</ListItemIcon>
                           <ListItemText
                              primary={
                                 <Typography
                                    sx={{
                                       fontWeight: "bold",
                                    }}
                                 >
                                    {item.name}
                                 </Typography>
                              }
                           />
                        </ListItemButton>
                     </ListItem>
                  </NavLink>
               ))}
            </List>
            <Divider />
            <Button
               sx={{
                  mt: 3,
                  textTransform: "none",
                  fontWeight: "bold",
                  m: 2,
               }}
               variant="contained"
               onClick={logout}
            >
               {" "}
               Logout{" "}
            </Button>
         </Drawer>
      </Box>
   );
}
