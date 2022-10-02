import CustomButton from "../components/button/custom-button";
import { TicketBodyItemProps } from "../components/type/type";
import { useStore } from "../components/zustand_stores/store";

function TicketBodyItem({
  label,
  text,
  colS,
  colE,
  rowS,
  rowE,
}: TicketBodyItemProps) {
  return (
    <>
      <div
        className={`ticket-body-item-container col-start-${colS} col-end-${colE} row-start-${rowS} row-end-${rowE}`}
      >
        <span className="ticket-body-item-label">{label}</span>
        <span className="ticket-body-item">{text}</span>
      </div>
      <style jsx>
        {`
          .ticket-body-item-container {
            width: 12rem;
            height: 3rem;
            display: flex;
            flex-direction: column;
          }
          .ticket-body-item-label {
            width: fit-content;
            height: fit-content;
            color: rgba(0, 0, 0, 1);
            font-family: Inter;
            font-weight: Regular;
            font-size: 12px;
            text-align: left;
          }
          .ticket-body-item {
            width: fit-content;
            height: fit-content;
            color: rgba(0, 0, 0, 1);
            font-family: Inter;
            font-weight: Bold;
            font-size: 20px;
            text-align: left;
          }
        `}
      </style>
    </>
  );
}

function Ticket() {
  const additional = useStore((state: any) => state.additional);
  return (
    <>
      <div className="ticket-container">
        <div className="ticket-image-container">
          <div className="qrcode"></div>
        </div>
        <div className="ticket-body-container">
          <TicketBodyItem
            label="Sender"
            text="Yong"
            colS="1"
            colE="2"
            rowS="1"
            rowE="2"
          />
          <TicketBodyItem
            label="Receiver"
            text={additional.receiver}
            colS="2"
            colE="3"
            rowS="1"
            rowE="2"
          />
          <TicketBodyItem
            label="Departure"
            text={additional.departCountry}
            colS="1"
            colE="2"
            rowS="2"
            rowE="3"
          />
          <TicketBodyItem
            label="Arrival"
            text={additional.arriveCountry}
            colS="2"
            colE="3"
            rowS="2"
            rowE="3"
          />
          <TicketBodyItem
            label="Transportation"
            text={additional.transportation}
            colS="3"
            colE="4"
            rowS="2"
            rowE="3"
          />
          <TicketBodyItem
            label="Sent Date"
            text="06/08/22"
            colS="1"
            colE="2"
            rowS="3"
            rowE="4"
          />
          <TicketBodyItem
            label="Arriving Date"
            text="08/08/22"
            colS="2"
            colE="3"
            rowS="3"
            rowE="4"
          />
          <TicketBodyItem
            label="Letter ID"
            text="KL205"
            colS="3"
            colE="4"
            rowS="3"
            rowE="4"
          />
        </div>
      </div>
      <style jsx>
        {`
          .ticket-container {
            width: 55rem;
            height: 17rem;
            background: rgba(255, 255, 255, 1);
            border-radius: 20px;
            box-shadow: 0px 4px 100px rgba(0, 0, 0, 0.25);
            display: flex;
            margin-bottom: 5rem;
          }
          .ticket-image-container {
            width: 35%;
            height: 100%;
            border-top-left-radius: 20px;
            border-bottom-left-radius: 20px;
            background-image: url("/ticket-image.svg");
            background-size: cover;
          }
          .qrcode {
            width: 3rem;
            height: 3rem;
            background-image: url("/qr-icon.svg");
            background-size: cover;
            margin-top: 1rem;
            margin-left: 1rem;
          }
          .ticket-body-container {
            width: fit-content;
            height: 100%;
            display: grid;
            grid-auto-rows: auto;
            grid-auto-columns: auto;
            padding-top: 2rem;
            padding-left: 2rem;
          }
        `}
      </style>
    </>
  );
}

export default function TicketPage() {
  return (
    <>
      <div className="ticket-page-container w-full h-full flex flex-col items-center justify-center gap-10">
        <div className="header-container">
          <span className="header-1">Complete!</span>
          <span className="header-2">Your letter is now on board!</span>
        </div>
        <Ticket />
        <div className="button-container">
          <CustomButton text="View all ticket" />
        </div>
      </div>
      <style jsx>
        {`
          .header-container {
            width: 40%;
            height: 8rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .header-1 {
            width: 100%;
            color: rgba(53, 99, 233, 1);
            font-family: Plus Jakarta Sans;
            font-weight: Bold;
            font-size: 4rem;
            text-align: center;
          }
          .header-2 {
            width: 100%;
            color: rgba(47, 47, 47, 1);
            font-family: Plus Jakarta Sans;
            font-weight: Bold;
            font-size: 2rem;
            text-align: center;
          }
          .button-container {
            width: fit-content;
            height: fit-content;
            position: absolute;
            right: 2rem;
            bottom: 2rem;
          }
        `}
      </style>
    </>
  );
}
