import { useState } from "react";
import axios from "axios";

export default function Store() {
  const [files, setFiles] = useState();
  const [imgbase64, setImgbase64] = useState();
  const [name,setName] = useState("")
  const [category, setCategory] = useState("")
  const [information, setInformation] = useState("")
  const [definition, setDefinition] = useState("")
  const [characteristics, setCharacteristics] = useState("")
  const [instructionManual, setInstructionManual] = useState("")
  const [available, setAvailble] = useState(false)

  function handleSelectFile(e) {
    e.preventDefault();
    setFiles(e.target.files);
  }

  function handleSend(e) {
    e.preventDefault();

    const formData = new FormData();

    for(const [key,value] of Object.entries(files)){
      formData.append(key,value)
    }
    
    formData.append("name",name)
    formData.append("category",category)
    formData.append("information", information)
    formData.append("definition", definition)
    formData.append("characteristics", characteristics)
    formData.append("instructionManual", instructionManual)
    formData.append("available",available)
    
    async function send() {
      try {
        const res = await axios.post(
          `http://localhost:8000/api/product/createProduct`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(res);
        setImgbase64("data:image/png;base64, " + res.data);
      } catch (err) {
        console.log(err);
      }
    }
    send();
  }

  return (
    <div className="store ps-5">
      <h1>STORE</h1>

      <label htmlFor="name">Name</label>
      <input type="text" value={name} onChange={e=>setName(e.target.value)}></input>
      <label htmlFor="name">Category</label>
      <select value={category} onChange={e=>setCategory(e.target.value)}>
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
 
      <label htmlFor="name">Information</label>
      <input type="text" value={information} onChange={e=>setInformation(e.target.value)}></input>
      <label htmlFor="name">Definition</label>
      <input type="text" value={definition} onChange={e=>setDefinition(e.target.value)}></input>
      <label htmlFor="name">Characteristics</label>
      <input type="text" value={characteristics} onChange={e=>setCharacteristics(e.target.value)}></input>
      <label htmlFor="name">InstructionManual</label>
      <input type="text" value={instructionManual} onChange={e=>setInstructionManual(e.target.value)}></input>
      <label htmlFor="name">Available</label>
      <input type="checkbox" value={available} onChange={e=>setAvailble(e.target.checked)}></input>

      
      <input 
        className="form-control"
        type="file"
        id="formFile"
        multiple
        onChange={(e) => handleSelectFile(e)}
      />
      <button onClick={(e) => handleSend(e)}>SEND</button>

      <img src={imgbase64} alt="Red" />
    </div>
  );
}
