import Sidebar from "../components/sidebar";
import SettingModal from "../components/setting-modal";
import SettingItems from "../components/setting-Items";
import Image from "next/image";
import { useState } from "react";
interface MySettings {
  Profile: string;
}

export default function Mypage() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.1.2/css/fontawesome.min.css"
      />
      <div className="Page-container">
        <SettingModal />
        <div className="Page flex flex-col p-3">
          <div className="Account-Header text-bold italic text-5xl text-blue-600">
            Your account
          </div>
          <div className="Setting-Items flex flex-col w-2/3 mt-32 items-center justify-content">
            <div className="Profilepic-container">
              <input
                className="Pic-input   w-10 h-10"
                type="file"
                id="Profilce_pics"
                name="Profile_pics"
                accept=".jpg, .jpeg, .png , .svg"
              />
            </div>

            <div className="flex flex-row py-6 justify-between">
              <text className="flex text-black fixed-email">Email</text>
              <text className="flex text-black fixed-email">
                example@example
              </text>
            </div>
            <hr className="line" />
            <SettingItems
              ID="Editemail"
              Hint="*************"
              Label="Password"
            />
            <hr className="line" />

            <SettingItems ID="Editphone" Hint="000-0000-0000" Label="Phone" />
            <hr className="line" />

            <SettingItems
              ID="Editbio"
              Hint="Pleace introduce yourself"
              Label="Your Bio"
            />
            <hr className="line" />
          </div>
        </div>
      </div>
      <style jsx>
        {`
        .Page-Container{
        }
        .Account-Header {
          width: 100px;
          position: absolute;
          top: 1em;
          left: 1em;
          font-family: fantasy;
        }
        .Page {
          position: absolute;
          height: 83.333333%;
          width: 66.666667%;
          bottom: 50px;
          right: 130px;  
          overflow:scroll;    
          overflow-x: hidden;  
        }
        .Setting-Items {
          position: absolute;
          top: 3em;
          left:13em;
       }
        .line {
          width: 500px;
          text-align: left;
          margin-left: 0px;
        }
        .Profilepic-container {
          width:px;
          height:px;
          position:relative;
          background-image: url('drangon.png');
          background-size:100% 100%; 
          border-radius:30%;
          overflow:hidden;
          
        }
        .Pic-input{
          outline: none;
          color: transparent;
          background: rgba(0,0,0,0.5);
          position:relative;
          top:140px;
          left:px;
          width: 200px;
          height: 200px;
          box-sizing: border-box;
          padding: 15px 77px;
          cursor: pointer
          transition: 0.5s;
          opacity:0;
        }
        .Pic-input::-webkit-file-upload-button{
          visibility: hidden ;
          
        }
        .Pic-input::before{
          content:url("/Cameara.svg");
          color:#fff;
          display: inline-block;
          -webkit-user-select:none;
        
        }
        .Pic-input:hover{
          opacity:1;
        }
        .fixed-email{    
        }
      `}
      </style>
    </>
  );
}
