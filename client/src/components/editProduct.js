import { useState } from "react";
import axios from "axios";
// import { useEffect } from "react";
import Popup from "reactjs-popup";

export default function EditProductPanel({ product, trigger }) {
  const [files, setFiles] = useState(product.images);
  const [name, setName] = useState(product.name);
  const [category, setCategory] = useState(product.category);
  const [information, setInformation] = useState(product.information);
  const [definition, setDefinition] = useState(product.definition);
  const [characteristics, setCharacteristics] = useState(
    product.characteristics
  );
  const [instructionManual, setInstructionManual] = useState(
    product.instructionManual
  );
  const [available, setAvailble] = useState(product.available);

  function handleSend(e) {
    e.preventDefault();

    const formData = new FormData();

    for (const [key, value] of Object.entries(files)) {
      formData.append(key, value);
    }

    formData.append("name", name);
    formData.append("category", category);
    formData.append("information", information);
    formData.append("definition", definition);
    formData.append("characteristics", characteristics);
    formData.append("instructionManual", instructionManual);
    formData.append("available", available);

    async function send() {
      try {
        const res = await axios.post(
          `https://sunhair-x98n.vercel.app/api/product/update/${product._id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(res);
        trigger((prev) => !prev);
      } catch (err) {
        console.log(err);
      }
    }
    send();
  }

  function handleDelete(e) {
    e.preventDefault();
    async function deleteProduct(id) {
      try {
        const res = await axios.post(
          `https://sunhair-x98n.vercel.app/api/product/delete/${product._id}`,
          {
            id: id,
          }
        );
        console.log(res);
        trigger((prev) => !prev);
        
      } catch (err) {
        console.log(err);
      }
    }

    deleteProduct(product.id);
  }
  return (
    <Popup
      trigger={<button className="button-editItem">EDIT</button>}
      modal
      nested
    >
      {(close) => (
        <div className="editItem  container bg-white">
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="col-9"
            ></input>
          </div>

          <div className="row align-items-center mt-2">
            <label htmlFor="name" className="col-2">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
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

          <div className="row align-items-center mt-2">
            <label htmlFor="name" className="col-2">
              Information
            </label>
            <textarea
              type="text"
              value={information}
              onChange={(e) => setInformation(e.target.value)}
              className="col-9"
            ></textarea>
          </div>

          <div className="row align-items-center mt-2">
            <label htmlFor="name" className="col-2">
              Definition
            </label>
            <textarea
              type="text"
              value={definition}
              onChange={(e) => setDefinition(e.target.value)}
              className="col-9"
            ></textarea>
          </div>

          <div className="row align-items-center mt-2">
            <label htmlFor="name" className="col-2">
              Characteristics
            </label>
            <textarea
              type="text"
              value={characteristics}
              className="col-9"
              onChange={(e) => setCharacteristics(e.target.value)}
            ></textarea>
          </div>

          <div className="row align-items-center mt-2">
            <label htmlFor="name" className="col-2">
              InstructionManual
            </label>
            <textarea
              type="text"
              value={instructionManual}
              className="col-9"
              onChange={(e) => setInstructionManual(e.target.value)}
            ></textarea>
          </div>

          <div className="d-flex align-items-center mt-2">
            <label htmlFor="checkox" className="">
              Available
            </label>
            <input
              type="checkbox"
              className="checkbox"
              id="checkox"
              value={available}
              onChange={(e) => setAvailble(e.target.checked)}
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
            <button className="button me-2" onClick={(e) => handleSend(e)}>
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
