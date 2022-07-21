import React, { useState } from "react";
import ImaageUpload from "./ImaageUpload";
import VideoUpload from "./VideoUpload";

export default function Base() {
  const [type, setType] = useState();
  const [image, setImage] = useState(false);
  const [Video, setVideo] = useState(false);

  function onChangeValue(event) {
    setType(event.target.value);
    console.log(event.target.value);
  }
  
const ImageRadio = ()=>{
    setImage(!image)  
    setVideo(false)
}

const VideoRadio =()=>{
    setImage(false)
    setVideo(!Video)
}
  return (
    <>
      <div>Base</div>
      <div onChange={onChangeValue}>
        <input type="radio" name="type" value="image" checked={type === "Photos"} onChange={()=>ImageRadio()} />
        Image
        <input type="radio" name="type" value="Video" checked={type === "Videos"} onChange={()=> VideoRadio()} /> Videos
      </div> 
      {image? <ImaageUpload/>:null  }
      {Video? <VideoUpload/>:null  }
      <div></div>
    </>
  );
}
