import CustomButton from "../components/custom-button";

export default function Ticket() {
  return (
    <>
      <div className="header-container">
        <span className="header-1">Complete!</span>
        <span className="header-2">Your letter is now on board!</span>
      </div>
      <div className="ticket-container">
        <div className="ticket-image-container">
          <div className="ticket-image"></div>
          <div className="ticket-image-text-container">
            <div className="ticket-image-text-departure">
              <span className="ticket-image-text-departure-header-1">
                Seoul
              </span>
              <span className="ticket-image-text-departure-header-2">SEL</span>
            </div>
            <div className="ticket-image-text-flight-flew-line"></div>
            <div className="ticket-image-text-flight"></div>
            <div className="ticket-image-text-arrival">
              <span className="ticket-image-text-arrival-header-1">
                New York
              </span>
              <span className="ticket-image-text-arrival-header-2">NYC</span>
            </div>
          </div>
        </div>
        <div className="ticket-left-text-container">
          <div className="ticket-left-text-sender-container">
            <span className="ticket-left-text-sender">Sender Name</span>
            <span className="ticket-left-text-sender-name">Yong</span>
          </div>
          <div className="ticket-left-text-receiver-container">
            <span className="ticket-left-text-receiver">Receiver Name</span>
            <span className="ticket-left-text-receiver-name">Onki</span>
          </div>
          <div className="ticket-left-text-departure-container">
            <span className="ticket-left-text-departure">Departure</span>
            <span className="ticket-left-text-departure-name">Seoul</span>
          </div>
          <div className="ticket-left-text-arrival-container">
            <span className="ticket-left-text-arrival">Arrival</span>
            <span className="ticket-left-text-arrival-name">Newyork</span>
          </div>
          <div className="ticket-left-text-transportation-container">
            <span className="ticket-left-text-transportation">
              Transportation
            </span>
            <span className="ticket-left-text-transportation-name">
              Boeing 747
            </span>
          </div>
          <div className="ticket-left-text-sent-date-container">
            <span className="ticket-left-text-sent-date">Sent Date</span>
            <span className="ticket-left-text-sent-date-name">06/08/22</span>
          </div>
          <div className="ticket-left-text-arriving-date-container">
            <span className="ticket-left-text-arriving-date">
              Arriving Date
            </span>
            <span className="ticket-left-text-arriving-date-name">
              08/08/22
            </span>
          </div>
          <div className="ticket-left-text-ticket-id-container">
            <span className="ticket-left-text-ticket-id">Letter ID</span>
            <span className="ticket-left-text-ticket-id-name">KL205</span>
          </div>
        </div>
        <div className="qrcode"></div>
      </div>
      <div className="button-container">
        <CustomButton text="View all ticket" />
      </div>
      <style jsx>
        {`
          .header-container {
            width: 40%;
            height: 8rem;
            position: absolute;
            left: 25rem;
            top: 8rem;
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
          .ticket-container {
            width: 55rem;
            height: 17rem;
            background: rgba(255, 255, 255, 1);
            position: absolute;
            top: 18rem;
            left: 13rem;
            border-radius: 20px;
            box-shadow: 0px 4px 100px rgba(0, 0, 0, 0.25);
          }
          .ticket-image-container {
            width: 35%;
            height: 100%;
            position: absolute;
            left: -0.05rem;
            border-top-left-radius: 20px;
            border-bottom-left-radius: 20px;
          }
          .ticket-image {
            width: 100%;
            height: 100%;
            background-image: url("/ticket-image.svg");
            background-size: cover;
            border-top-left-radius: 20px;
            border-bottom-left-radius: 20px;
          }
          .ticket-image-text-container {
            width: 100%;
            height: 40%;
            position: absolute;
            left: 0;
            bottom: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
          }
          .ticket-image-text-departure {
            display: flex;
            flex-direction: column;
          }
          .ticket-image-text-flight-flew-line {
            width: 25%;
            height: 0.1rem;
            background-image: url("/flight-flew-line.svg");
            background-size: cover;
          }
          .ticket-image-text-flight {
            width: 1.3rem;
            height: 1.2rem;
            background-image: url("/flight-icon.svg");
            background-size: cover;
          }
          .ticket-image-text-departure-header-1 {
            color: rgba(255, 255, 255, 1);
            font-family: Inter;
            font-weight: Regular;
            font-size: 12px;
            text-align: left;
          }
          .ticket-image-text-departure-header-2 {
            color: rgba(255, 255, 255, 1);
            font-family: Inter;
            font-weight: Bold;
            font-size: 32px;
            text-align: left;
          }
          .ticket-image-text-arrival {
            display: flex;
            flex-direction: column;
          }
          .ticket-image-text-arrival-header-1 {
            color: rgba(255, 255, 255, 1);
            font-family: Inter;
            font-weight: Medium;
            font-size: 12px;
            text-align: left;
          }
          .ticket-image-text-arrival-header-2 {
            color: rgba(255, 255, 255, 1);
            font-family: Inter;
            font-weight: Bold;
            font-size: 32px;
            text-align: left;
          }
          .ticket-left-text-container {
            width: 25rem;
            height: 80%;
            position: absolute;
            top: 2.5rem;
            left: 22rem;
            display: grid;
            grid-auto-rows: auto;
            grid-auto-columns: auto;
          }
          .ticket-left-text-sender-container {
            width: 7rem;
            height: 3rem;
            display: flex;
            flex-direction: column;
            grid-column: 1 / 2;
            grid-row: 1 / 2;
          }
          .ticket-left-text-sender {
            color: rgba(0, 0, 0, 1);
            font-family: Inter;
            font-weight: Regular;
            font-size: 12px;
            text-align: left;
          }
          .ticket-left-text-sender-name {
            color: rgba(0, 0, 0, 1);
            font-family: Inter;
            font-weight: Bold;
            font-size: 20px;
            text-align: left;
          }
          .ticket-left-text-receiver-container {
            width: 7rem;
            height: 3rem;
            display: flex;
            flex-direction: column;
            grid-column: 2 / 3;
            grid-row: 1 / 2;
          }
          .ticket-left-text-receiver {
            color: rgba(0, 0, 0, 1);
            font-family: Inter;
            font-weight: Regular;
            font-size: 12px;
            text-align: left;
          }
          .ticket-left-text-receiver-name {
            color: rgba(0, 0, 0, 1);
            font-family: Inter;
            font-weight: Bold;
            font-size: 20px;
            text-align: left;
          }
          .ticket-left-text-departure-container {
            width: 7rem;
            height: 3rem;
            display: flex;
            flex-direction: column;
            grid-column: 1 / 2;
            grid-row: 2 / 3;
          }
          .ticket-left-text-departure {
            color: rgba(0, 0, 0, 1);
            font-family: Inter;
            font-weight: Regular;
            font-size: 12px;
            text-align: left;
          }
          .ticket-left-text-departure-name {
            color: rgba(0, 0, 0, 1);
            font-family: Inter;
            font-weight: Bold;
            font-size: 20px;
            text-align: left;
          }
          .ticket-left-text-arrival-container {
            width: 7rem;
            height: 3rem;
            display: flex;
            flex-direction: column;
            grid-column: 2 / 3;
            grid-row: 2 / 3;
          }
          .ticket-left-text-arrival {
            color: rgba(0, 0, 0, 1);
            font-family: Inter;
            font-weight: Regular;
            font-size: 12px;
            text-align: left;
          }
          .ticket-left-text-arrival-name {
            color: rgba(0, 0, 0, 1);
            font-family: Inter;
            font-weight: Bold;
            font-size: 20px;
            text-align: left;
          }
          .ticket-left-text-transportation-container {
            width: 7rem;
            height: 3rem;
            display: flex;
            flex-direction: column;
            grid-column: 3 / 4;
            grid-row: 2 / 3;
          }
          .ticket-left-text-transportation {
            color: rgba(0, 0, 0, 1);
            font-family: Inter;
            font-weight: Regular;
            font-size: 12px;
            text-align: left;
          }
          .ticket-left-text-transportation-name {
            color: rgba(0, 0, 0, 1);
            font-family: Inter;
            font-weight: Bold;
            font-size: 20px;
            text-align: left;
          }
          .ticket-left-text-sent-date-container {
            width: 7rem;
            height: 3rem;
            display: flex;
            flex-direction: column;
            grid-column: 1 / 2;
            grid-row: 3 / 4;
          }
          .ticket-left-text-sent-date {
            color: rgba(0, 0, 0, 1);
            font-family: Inter;
            font-weight: Regular;
            font-size: 12px;
            text-align: left;
          }
          .ticket-left-text-sent-date-name {
            color: rgba(0, 0, 0, 1);
            font-family: Inter;
            font-weight: Bold;
            font-size: 20px;
            text-align: left;
          }
          .ticket-left-text-arriving-date-container {
            width: 7rem;
            height: 3rem;
            display: flex;
            flex-direction: column;
            grid-column: 2 / 3;
            grid-row: 3 / 4;
          }
          .ticket-left-text-arriving-date {
            color: rgba(0, 0, 0, 1);
            font-family: Inter;
            font-weight: Regular;
            font-size: 12px;
            text-align: left;
          }
          .ticket-left-text-arriving-date-name {
            color: rgba(0, 0, 0, 1);
            font-family: Inter;
            font-weight: Bold;
            font-size: 20px;
            text-align: left;
          }
          .ticket-left-text-ticket-id-container {
            width: 7rem;
            height: 3rem;
            display: flex;
            flex-direction: column;
            grid-column: 3 / 4;
            grid-row: 3 / 4;
          }
          .ticket-left-text-ticket-id {
            color: rgba(0, 0, 0, 1);
            font-family: Inter;
            font-weight: Regular;
            font-size: 12px;
            text-align: left;
          }
          .ticket-left-text-ticket-id-name {
            color: rgba(0, 0, 0, 1);
            font-family: Inter;
            font-weight: Bold;
            font-size: 20px;
            text-align: left;
          }
          .qrcode {
            width: 5rem;
            height: 5rem;
            background-image: url("/qr-icon.svg");
            background-size: cover;
            position: absolute;
            right: 2rem;
            top: 1rem;
          }
          .button-container {
            position: absolute;
            bottom: 2rem;
            right: 2rem;
          }
        `}
      </style>
    </>
  );
}
