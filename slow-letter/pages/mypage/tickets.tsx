import { useState } from "react";
import SettingModal from "../../components/setting-modal";
export default function Tickets() {
  const [viewSent, setviewSent] = useState(false);
  const [viewRecieve, setviewRecieve] = useState(false);

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
      <SettingModal />
      <div className="switch">
        <div className="flex flex-row space-x-4 bg-gray-300 rounded-full w-34 p-1 justify-between">
          <button
            type="button"
            onClick={onClick1}
            className={
              viewRecieve
                ? "bg-blue-600 rounded-full shadow-md  text-white w-28 h-10"
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

      <style jsx>{`
        .switch {
          position: absolute;
          top: 10em;
          left: 10em;
        }
      `}</style>
    </>
  );
}
