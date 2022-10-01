import ProgressBar from "../../components/progressbar/progressbar";
import ProgressBarItem from "../../components/progressbar/progressbar-item";
import CustomButton from "../../components/button/custom-button";
import { useDisclosure } from "@chakra-ui/react";
import ConfirmModal from "../../components/modal/confirm-modal";
import { useStore } from "../../components/zustand_hooks/store";
import { useRouter } from "next/router";
import { AdditionalItemProps } from "../../components/type/type";

function AddiItem({ label, text, colS, colE, rowS, rowE }: AdditionalItemProps) {
  return (
    <>
      <div className={`additional-item-container col-start-${colS} col-end-${colE} row-start-${rowS} row-end-${rowE}`}>
        <span className="additional-item-label">{label}</span>
        <span className="additional-item">{text}</span>
      </div>
      <style jsx>
        {`
          .additional-item-container {
            display: flex;
            flex-direction: column;
          }
          .additional-item-label {
            width: fit-content;
            height: fit-content;
            font-family: Plus Jakarta Sans;
            font-weight: Bold;
            font-size: 1rem;
            text-align: left;
            color: #005ade;
          }
          .additional-item {
            width: fit-content;
            height: fit-content;
            font-family: Plus Jakarta Sans;
            font-size: 1rem;
            text-align: left;
          }
        `}
      </style>
    </>
  );
}

export default function Sending() {
  const modalOpen = useDisclosure();

  const router = useRouter();

  const template = useStore((state: any) => state.template);
  const letter = useStore((state: any) => state.letter);
  const additional = useStore((state: any) => state.additional);

  return (
    <>
      <div className="sending-page-container w-full h-full flex flex-col items-center justify-center">
        <ProgressBar>
          <ProgressBarItem isActive isDone text="Write" />
          <ProgressBarItem isActive isDone text="Additional" />
          <ProgressBarItem isActive text="Send" />
        </ProgressBar>
        <div className="confirm-letter-container">
          <div className="confirm-letter-subcontainer">
            <div className="letter-body-container">
              <div className="letter-title">{letter.title}</div>
              <hr className="letter-body-cross-line" />
              <div className="letter-body">
                {letter.body.map((item: any, key: any) => (
                  <div key={key}>{item === "" ? <br /> : item}</div>
                ))}
              </div>
            </div>
            <div className="letter-additional-container">
              <AddiItem label="Sender" text="Yong" colS="1" colE="2" rowS="1" rowE="2" />
              <AddiItem label="Receiver" text={additional.receiver} colS="2" colE="3" rowS="1" rowE="2" />
              <AddiItem label="Departure" text={additional.departCountry} colS="1" colE="2" rowS="2" rowE="3" />
              <AddiItem label="Arrival" text={additional.arriveCountry} colS="2" colE="3" rowS="2" rowE="3" />
              <AddiItem
                label="Transportation"
                text={additional.transportation}
                colS="3" colE="4" rowS="2" rowE="3"
              />
            </div>
          </div>
        </div>
        <div className="button-container">
          <div className="button-left-container">
            <CustomButton
              className="button-left"
              text="Previous"
              onClick={() => router.push("/letter/additional")}
            />
          </div>
          <div className="button-right-container">
            <CustomButton
              className="button-right"
              text="Send"
              onClick={modalOpen.onOpen}
            />
          </div>
        </div>
      </div>
      <ConfirmModal isOpen={modalOpen.isOpen} onClose={modalOpen.onClose} />
      <style jsx>
        {`
          .confirm-letter-container {
            width: 40rem;
            height: 25rem;
            filter: drop-shadow(10px 10px 4px rgba(0, 0, 0, 0.25));
            margin-top: 2rem;
            margin-bottom: 2rem;
            background-image: url("/letter-cover.svg");
            background-size: cover;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .confirm-letter-subcontainer {
            width: 34rem;
            height: 21rem;
            position: relative;
            display: flex;
            flex-direction: column;
          }
          .confirm-letter-subcontainer::before {
            content: "";
            width: 100%;
            height: 100%;
            background-image: url(${template.templateUrl});
            opacity: 0.3;
            background-size: cover;
            position: absolute;
            top: 0;
            left: 0;
          }
          .letter-body-container {
            width: 100%;
            height: 60%;
            display: flex;
            flex-direction: column;
            z-index: 100;
          }
          .letter-title {
            width: fit-content;
            height: fit-content;
            font-family: Plus Jakarta Sans;
            font-weight: 500;
            font-size: 1.5rem;
            text-align: left;
            margin-left: 1.5rem;
            margin-top: 1rem;
            margin-bottom: 0.5rem;
          }
          .letter-body-cross-line {
            width: 95%;
            align-self: center;
            border-color: gray;
          }
          .letter-body {
            width: 95%;
            height: fit-content;
            font-family: Plus Jakarta Sans;
            font-weight: Regular;
            font-size: 1rem;
            text-align: left;
            padding-left: 0.7rem;
            padding-right: 0.7rem;
            z-index: 100;
            overflow: scroll;
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
            background-color: rgb(255, 255, 255, 0.3);
            align-self: center;
            border-radius: 10px;
          }
          .letter-additional-container {
            width: 100%;
            height: 40%;
            margin-left: 1rem;
            display: grid;
            grid-template-rows: repeat(2, 1fr);
            grid-template-columns: repeat(3, 1fr);
            z-index: 100;
          }
          .button-container {
            width: 100%;
            height: 4rem;
            display: flex;
            align-items: center;
          }
          .button-container .button-left-container {
            position: absolute;
            left: 2rem;
          }
          .button-container .button-right-container {
            position: absolute;
            right: 2rem;
          }
        `}
      </style>
    </>
  );
}
