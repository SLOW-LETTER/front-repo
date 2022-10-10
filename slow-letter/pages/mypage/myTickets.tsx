import { useState } from "react";
import { Ticket } from "../ticket";

export default function Ticketpage() {
  const [viewSent, setviewSent] = useState(false);
  const [viewRecieve, setviewRecieve] = useState(true);
  const [ticketInfo, setticketInfo] = useState({
    Departure: "",
    Arrival: "",
    Sender: "",
    Reciever: "",
    SentDate: "",
    ArrivingDate: "",
    LetterID: "",
    Transportation: "",
  });
  function onClick1(e: any) {
    setviewRecieve(true);
    setviewSent(false);
  }
  function onClick2(e: any) {
    setviewRecieve(false);
    setviewSent(true);
  }
  return (
    <>
      <div className="pswChange-page flex h-5/6">
        <div className="modal-container bg-white w-full h-full shadow drop-shadow-lg p-1 rounded-lg items-center justify-center">
          <div className="ticket-list flex flex-col px-20 pt-6 ">
            <div className="switch flex w-34 items-center justify-center">
              <div className="flex flex-row space-x-4 bg-gray-300 border-2 border-gray-400 rounded-full p-1 mb-8">
                <button
                  type="button"
                  onClick={onClick1}
                  className={
                    viewRecieve
                      ? "bg-blue-600 rounded-full shadow-md text-white w-28 h-10"
                      : "bg-gray-100 rounded-full shadow-md w-28 h-10"
                  }
                >
                  Recieved
                </button>
                <button
                  type="button"
                  onClick={onClick2}
                  className={
                    viewSent
                      ? "bg-blue-600  text-white rounded-full shadow-md w-28 h-10"
                      : "bg-gray-100 rounded-full shadow-md w-28 h-10"
                  }
                >
                  Sent
                </button>
              </div>
            </div>
            <div className="ticketlist-container ">
              <Ticket />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .modal-container {
          position: relative;
          margin-left: 45vh;
          width: 120vh;
          margin-top: 3vh;
        }
        .ticket-list {
          position: relative;
          height: 76vh;
          overflow: scroll;
          overflow-x: hidden;
        }
      `}</style>
    </>
  );
}
