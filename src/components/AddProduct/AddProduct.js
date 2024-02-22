import React, { useState } from "react";
import AddProductModal from "./Modals/AddProductModal";

const AddProduct = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button onClick={handleOpen}>Add Product</button>

      <AddProductModal open={open} handleClose={handleClose} />
    </>
  );
};

export default AddProduct;
