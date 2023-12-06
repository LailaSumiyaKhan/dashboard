import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setState } from "../../appSlice";

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
               <Typography id="modal-modal-title" variant="h6" component="h2">
                  {category} {size} {color} {stock}
               </Typography>
            </Box>
         </Modal>
      </Box>
   );
}
