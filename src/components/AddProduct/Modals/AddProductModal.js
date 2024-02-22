import React, { useState } from "react";
import { Button, Modal, InputLabel, Input } from "@mui/material";
import styles from "./AddProductModal.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./../../../features/products/productsSlice";

const AddProductModal = ({ open, handleClose }) => {
    const dispatch = useDispatch();
    const initialProductState = {
      name: '',
      price: '',
      description: '',
    };
  const [productInfo, setProductInfo] = useState(initialProductState);

  const handleInputChange = (e) => {
    const {name, value } = e.target;
    setProductInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

    const handleSave = () => {
    dispatch(add([productInfo]));
    setProductInfo(initialProductState);
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div className={styles["modal-container"]}>
        <h2>Add product</h2>
        <div className={styles["input-container"]}>
          <InputLabel>Name</InputLabel>
          <Input
            id="name"
            name="name"
            value={productInfo.name}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles["input-container"]}>
          <InputLabel>price</InputLabel>
          <Input
            id="price"
            name="price"
            value={productInfo.price}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles["input-container"]}>
          <InputLabel>Description</InputLabel>
          <Input
            id="description"
            name="description"
            value={productInfo.description}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles["button-container"]}>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSave}>
            Add
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default AddProductModal;
