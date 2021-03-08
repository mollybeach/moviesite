import React from "react";
import "./uploadpage.scss";
import preview from "../../assets/images/uploadvideo.jpg";

export default function VideoPreview() {
  return (
    <>
      <div className="uploadpage__hero">
        <label className="uploadpage__tag">VIDEO THUMBNAIL</label>
        <video className="uploadpage__video" poster={preview}></video>
      </div>
    </>
  );
}
