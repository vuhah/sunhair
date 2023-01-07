import { useState } from "react";
import Popup from "reactjs-popup";
import axiosInstance from "../config/axiosConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from "../config/firebaseConfig";

const uploadImage = async (path, file) => {
  return new Promise((resolve, reject) => {
    const storageRef = ref(storage, path);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
        reject(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          resolve(downloadURL);
        });
      }
    );
  });
};

export default function EditProductPanel({ product, trigger }) {
  const [data, setData] = useState(product);
  const [files, setFiles] = useState();

  async function handleUpdate(e) {
    e.preventDefault();

    async function storeImage() {
      const imagesURL = [];
      for (let i = 0; i < files.length; i++) {
        const path = `products/${data.name}/${i}`;
        const downloadURL = await uploadImage(path, files[i]);
        imagesURL.push(downloadURL);
      }
      return imagesURL;
    }

    async function updateProduct() {
      let payload = data
      if (files !== undefined) {
        const imagesURL = await storeImage();
        payload = Object.assign(data, { images: imagesURL });
      }

      try {
        const res = await axiosInstance({
          url: `product/update`,
          method: "POST",
          data: payload,
        });
        console.log(res.data);
        trigger((prev) => !prev);
      } catch (err) {
        console.log(err);
      }
    }
    updateProduct();
  }

  async function handleDelete(e) {
    e.preventDefault();
    try {
      const res = await axiosInstance({
        url: `product/delete/${product._id}`,
        method: "POST",
      });
      console.log(res);
      trigger((prev) => !prev);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Popup
      trigger={<button className="button-editItem">EDIT</button>}
      modal
      nested
    >
      {(close) => (
        <div className="editItem container bg-white">
          <h1>EDIT ITEM</h1>

          <button className="close" onClick={close}>
            &times;
          </button>

          <div className="row mt-4 d-flex align-items-center">
            <label htmlFor="name" className="col-2">
              Name
            </label>
            <input
              type="text"
              value={data.name}
              onChange={(e) =>
                setData((prevData) => ({ ...prevData, name: e.target.value }))
              }
              className="col-9"
            ></input>
          </div>

          <div className="row align-items-center mt-1">
            <label htmlFor="name" className="col-2">
              Category
            </label>
            <select
              value={data.category}
              onChange={(e) =>
                setData((prevData) => ({
                  ...prevData,
                  category: e.target.value,
                }))
              }
              className="col-9"
            >
              <option value="weft">WEFT HAIR</option>
              <option value="bulk">BULK HAIR</option>
              <option value="keratin">KERATIN HAIR</option>
              <option value="closure">CLOSURE</option>
              <option value="clip">CLIP IN</option>
              <option value="frontal">FRONTAL</option>
              <option value="wigs">WIGS HAIR</option>
              <option value="tape">TAPE HAIR</option>
              <option value="raw">RAW HAIR</option>
            </select>
          </div>

          <div className="row align-items-center mt-1">
            <label htmlFor="name" className="col-2">
              Information
            </label>
            <textarea
              type="text"
              value={data.information}
              onChange={(e) =>
                setData((prevData) => ({
                  ...prevData,
                  information: e.target.value,
                }))
              }
              className="col-9"
            ></textarea>
          </div>

          <div className="row align-items-center mt-1">
            <label htmlFor="name" className="col-2">
              Definition
            </label>
            <textarea
              type="text"
              value={data.definition}
              onChange={(e) =>
                setData((prevData) => ({
                  ...prevData,
                  definition: e.target.value,
                }))
              }
              className="col-9"
            ></textarea>
          </div>

          <div className="row align-items-center mt-1">
            <label htmlFor="name" className="col-2">
              Characteristics
            </label>
            <textarea
              type="text"
              value={data.characteristics}
              className="col-9"
              onChange={(e) =>
                setData((prevData) => ({
                  ...prevData,
                  characteristics: e.target.value,
                }))
              }
            ></textarea>
          </div>

          <div className="row align-items-center mt-1">
            <label htmlFor="name" className="col-2">
              InstructionManual
            </label>
            <textarea
              type="text"
              value={data.instructionManual}
              className="col-9"
              onChange={(e) =>
                setData((prevData) => ({
                  ...prevData,
                  instructionManual: e.target.value,
                }))
              }
            ></textarea>
          </div>

          <div className="row align-items-center mt-1">
            <label htmlFor="name" className="col-2">
              Selling index
            </label>
            <input
              type="number"
              value={data.selling}
              className="col-9"
              onChange={(e) =>
                setData((prevData) => ({
                  ...prevData,
                  selling: e.target.value,
                }))
              }
            ></input>
          </div>

          <div className="d-flex align-items-center mt-3">
            <label htmlFor="checkox" className="me-5">
              Available
            </label>
            <input
              type="checkbox"
              className="checkbox"
              id="checkox"
              value={data.available}
              onChange={(e) =>
                setData((prevData) => ({
                  ...prevData,
                  available: e.target.value,
                }))
              }
            ></input>
          </div>

          <div className="d-flex align-items-center mt-4">
            <p className="me-5">Current images</p>
            {product.images.map((image, index) => (
              <img key={index} className="img ms-4" src={image} />
            ))}
          </div>

          <input
            className="form-control mt-2"
            type="file"
            id="formFile"
            multiple
            onChange={(e) => setFiles(e.target.files)}
          />

          <div className="col-12 text-center mt-5">
            <button className="button me-2" onClick={(e) => handleUpdate(e)}>
              SAVE
            </button>

            <button
              className="button-delete ms-2"
              onClick={(e) => handleDelete(e)}
            >
              DELETE
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
}
