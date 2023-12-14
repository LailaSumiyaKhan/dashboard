import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setState } from "../../appSlice";
import { Divider } from "@mui/material";
import ProductSellLastOneYear from "./ProductSellLastOneYear";

const style = {
   position: "absolute",
   top: "50%",
   left: "50%",
   transform: "translate(-50%, -50%)",
   width: 600,
   bgcolor: "background.paper",
   boxShadow: 24,
   p: 2,
   borderRadius: 2,
};

export default function PopUp() {
   const dispatch = useDispatch();
   const { inventoryPopUpOpen, popUpProduct } = useSelector(
      (store) => store.app
   );

   if (!popUpProduct) {
      return <></>;
   }

   const { id, category, size, color, stock, status, sells, totalSells } =
      popUpProduct;

   function closePopUp() {
      dispatch(setState("inventoryPopUpOpen", false));
   }

   return (
      <Box>
         <Modal
            open={inventoryPopUpOpen}
            onClose={closePopUp}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <Box sx={style}>
               <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Product Detail:
               </Typography>
               <Divider sx={{ mb: 1 }} />

               <Box
                  sx={{
                     display: "flex",
                     flexDirection: "row",
                     justifyContent: "flex-start",
                  }}
               >
                  <Typography
                     variant="subtitle1"
                     sx={{ fontWeight: "bold", mr: 1 }}
                  >
                     Name:
                  </Typography>
                  <Typography variant="subtitle1">
                     {category} {size} Size {color} T-Shirt
                  </Typography>
               </Box>

               <Box
                  sx={{
                     display: "flex",
                     flexDirection: "row",
                     justifyContent: "flex-start",
                  }}
               >
                  <Typography
                     variant="subtitle1"
                     sx={{ fontWeight: "bold", mr: 1 }}
                  >
                     Available Stock:
                  </Typography>
                  <Typography variant="subtitle1">{stock}</Typography>
               </Box>

               <Box
                  sx={{
                     display: "flex",
                     flexDirection: "row",
                     justifyContent: "flex-start",
                  }}
               >
                  <Typography
                     variant="subtitle1"
                     sx={{ fontWeight: "bold", mr: 1 }}
                  >
                     Stock Status:
                  </Typography>
                  <Typography variant="subtitle1">{status}</Typography>
               </Box>

               <Box
                  sx={{
                     display: "flex",
                     flexDirection: "row",
                     justifyContent: "flex-start",
                  }}
               >
                  <Typography
                     variant="subtitle1"
                     sx={{ fontWeight: "bold", mr: 1 }}
                  >
                     Sells Last 1 Year:
                  </Typography>
                  <Typography variant="subtitle1">{totalSells}</Typography>
               </Box>

               <Divider sx={{ mb: 2 }} />

               <ProductSellLastOneYear sells={sells} />
            </Box>
         </Modal>
      </Box>
   );
}
