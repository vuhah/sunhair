import { useState } from "react";
import Popup from "reactjs-popup";
import storage from "../config/firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import axiosInstance from "../config/axiosConfig";

const defaultData = {
  name: "",
  category: "weft",
  information: "",
  definition: "",
  characteristics: "",
  instructionManual: "",
  available: true,
  selling: 0,
  images:[]
};

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

export default function AddProductPanel({ addTrigger }) {
  const [data, setData] = useState(defaultData);
  const [files, setFiles] = useState();

  async function handleSend(e) {
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

    async function createProductAPI() {
      const imagesURL = await storeImage();
      const payload = Object.assign(data, { images: imagesURL });
      try {
        const res = await axiosInstance({
          url: "product/createProduct/",
          method: "POST",
          data: payload,
        });
        addTrigger((prev) => !prev);
        return res;
      } catch (err) {
        console.log(err);
      }
    }

    const res = await createProductAPI();
  }

  return (
    <>
      <Popup
        trigger={<button className="button-addnewItem"> NEW ITEM </button>}
        modal
        nested
      >
        {(close) => (
          <div className="addNewItem ps-5 container">
            <h1>ADD NEW ITEM</h1>

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

            <div className="d-flex align-items-center">
              <label htmlFor="checkox" className="">
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

            <input
              className="form-control mt-2"
              type="file"
              id="formFile"
              multiple
              onChange={(e) => setFiles(e.target.files)}
            />

            <div className="col-12 text-center mt-5">
              <button className="button" onClick={(e) => handleSend(e)}>
                SAVE
              </button>
            </div>
          </div>
        )}
      </Popup>
    </>
  );
}
