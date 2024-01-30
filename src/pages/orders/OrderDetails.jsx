import { Box, Divider, Modal, Typography } from "@mui/material";
import React from "react";
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

export default function OrderDetails() {
   const dispatch = useDispatch();
   const { orderPopupOpen, orderDetail } = useSelector((store) => store.app);

   if (orderDetail === null) {
      return <></>;
   }

   const { customerName, orderDate, status, total } = orderDetail;

   function closePopUp() {
      dispatch(setState("orderPopupOpen", false));
   }

   return (
      <Box>
         <Modal open={orderPopupOpen} onClose={closePopUp}>
            <Box sx={style}>
               <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Order Detail:
               </Typography>
               <Divider sx={{ mb: 1 }} />

               <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "bold", mr: 1 }}
               >
                  Customer:
               </Typography>
               <Typography variant="subtitle1">{customerName}</Typography>
            </Box>
         </Modal>
      </Box>
   );
}
