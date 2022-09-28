import Image from "next/image";
import ProgressBar from "../../components/progressbar/progressbar";
import ProgressBarItem from "../../components/progressbar/progressbar-item";
import CustomButton from "../../components/custom-button";
import { useDisclosure } from "@chakra-ui/react";
import ConfirmModal from "../../components/modal/confirm-modal";

export default function Sending() {
  const modalOpen = useDisclosure();

  return (
    <>
      <ProgressBar>
        <ProgressBarItem isActive isDone text="Write" />
        <ProgressBarItem isActive isDone text="Additional" />
        <ProgressBarItem isActive text="Send" />
      </ProgressBar>
      <div className="confirm-letter-container">
        <Image src="/letter-cover.svg" alt="" layout="fill" />
        <div className="confirm-letter-subcontainer">
          <div className="confirm-letter-bg-container">
            <Image
              src="/carousel-item-0.svg"
              alt=""
              layout="fill"
              style={{ opacity: 0.3 }}
            />
          </div>
          <div className="letter-container">
            <div className="letter-additional-container">
              <span className="letter-additional-title">안녕하세요</span>
              <div className="letter-additional-subcontainer">
                <div className="letter-addtional-sender-container">
                  <span className="letter-addtional-sender-1">Sender</span>
                  <span className="letter-addtional-sender-2">Yong</span>
                </div>
                <div className="letter-addtional-receiver-container">
                  <span className="letter-addtional-receiver-1">Receiver</span>
                  <span className="letter-addtional-receiver-2">onki</span>
                </div>
                <div className="letter-addtional-departure-container">
                  <span className="letter-addtional-departure-1">
                    Departure
                  </span>
                  <span className="letter-addtional-departure-2">Seoul</span>
                </div>
                <div className="letter-addtional-arrival-container">
                  <span className="letter-addtional-arrival-1">Arrival</span>
                  <span className="letter-addtional-arrival-2">New York</span>
                </div>
                <div className="letter-addtional-transportation-container">
                  <span className="letter-addtional-transportation-1">
                    Transportation
                  </span>
                  <span className="letter-addtional-transportation-2">
                    Flight
                  </span>
                </div>
              </div>
            </div>
            <div className="letter-body-container">
              <span className="letter-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                nisl eros, pulvinar facilisis justo mollis, auctor consequat
                urna. Morbi a bibendum metus. Donec scelerisque sollicitudin
                enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci
                vestibulum eget. className aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Duis
                pharetra luctus lacus ut vestibulum. Maecenas ipsum lacus,
                lacinia quis posuere ut, pulvinar vitae dolor. Integer eu nibh
                at nisi ullamcorper sagittis id vel leo. Integer feugiat
                faucibus libero, at maximus nisl suscipit posuere. Morbi nec
                enim nunc. Phasellus bibendum turpis ut ipsum egestas, sed
                sollicitudin elit convallis. Cras pharetra mi tristique sapien
                vestibulum lobortis. Nam eget bibendum metus, non dictum mauris.
                Nulla at tellus sagittis, viverra est a, bibendum metus.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="button-container">
        <CustomButton className="button" text="Previous" />
        <CustomButton
          className="button"
          text="Send"
          onClick={modalOpen.onOpen}
        />
      </div>
      <ConfirmModal isOpen={modalOpen.isOpen} onClose={modalOpen.onClose} />
      <style jsx>
        {`
          .confirm-letter-container {
            position: absolute;
            width: 40rem;
            height: 25rem;
            top: 14rem;
            left: 20rem;
            filter: drop-shadow(10px 10px 4px rgba(0, 0, 0, 0.25));
          }
          .confirm-letter-subcontainer {
            position: absolute;
            width: 34rem;
            height: 21rem;
            top: 2rem;
            left: 3rem;
            overflow: hidden;
          }
          .confirm-letter-bg-container {
            position: absolute;
            width: 40rem;
            height: 25rem;
            top: -2rem;
            left: -3rem;
          }
          .button-container {
            position: absolute;
            width: 100%;
            bottom: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 54rem;
          }
          .letter-container {
            width: 32rem;
            height: 19rem;
            position: absolute;
            top: 1rem;
            left: 1rem;
          }
          .letter-body-container {
            width: 100%;
            height: 40%;
            position: absolute;
            top: 3rem;
            overflow: auto;
            padding-left: 0.5rem;
          }
          .letter-body {
            font-family: Plus Jakarta Sans;
            font-weight: Regular;
            font-size: 1rem;
            text-align: left;
            padding-left: 0.5rem;
          }
          .letter-additional-container {
            width: 100%;
            height: 100%;
            position: absolute;
          }
          .letter-additional-title {
            position: absolute;
            top: 0px;
            left: 0px;
            font-family: Plus Jakarta Sans;
            font-weight: 500;
            font-size: 1.5rem;
            text-align: left;
          }
          .letter-additional-subcontainer {
            position: absolute;
            width: 100%;
            height: 40%;
            top: 11.7rem;
          }
          .letter-addtional-sender-container {
            position: absolute;
            display: flex;
            flex-direction: column;
          }
          .letter-addtional-sender-1 {
            font-family: Plus Jakarta Sans;
            font-weight: Bold;
            font-size: 1rem;
            text-align: left;
            color: #005ade;
          }
          .letter-addtional-sender-2 {
            font-family: Plus Jakarta Sans;
            font-size: 1rem;
            text-align: left;
          }
          .letter-addtional-receiver-container {
            position: absolute;
            left: 10rem;
            display: flex;
            flex-direction: column;
          }
          .letter-addtional-receiver-1 {
            font-family: Plus Jakarta Sans;
            font-weight: Bold;
            font-size: 1rem;
            text-align: left;
            color: #005ade;
          }
          .letter-addtional-receiver-2 {
            font-family: Plus Jakarta Sans;
            font-size: 1rem;
            text-align: left;
          }
          .letter-addtional-departure-container {
            position: absolute;
            top: 4rem;
            left: 0;
            display: flex;
            flex-direction: column;
          }
          .letter-addtional-departure-1 {
            font-family: Plus Jakarta Sans;
            font-weight: Bold;
            font-size: 1rem;
            text-align: left;
            color: #005ade;
          }
          .letter-addtional-departure-2 {
            font-family: Plus Jakarta Sans;
            font-size: 1rem;
            text-align: left;
          }
          .letter-addtional-arrival-container {
            position: absolute;
            top: 4rem;
            left: 10rem;
            display: flex;
            flex-direction: column;
          }
          .letter-addtional-arrival-1 {
            font-family: Plus Jakarta Sans;
            font-weight: Bold;
            font-size: 1rem;
            text-align: left;
            color: #005ade;
          }
          .letter-addtional-arrival-2 {
            font-family: Plus Jakarta Sans;
            font-size: 1rem;
            text-align: left;
          }
          .letter-addtional-transportation-container {
            position: absolute;
            top: 4rem;
            left: 20rem;
            display: flex;
            flex-direction: column;
          }
          .letter-addtional-transportation-1 {
            font-family: Plus Jakarta Sans;
            font-weight: Bold;
            font-size: 1rem;
            text-align: left;
            color: #005ade;
          }
          .letter-addtional-transportation-2 {
            font-family: Plus Jakarta Sans;
            font-size: 1rem;
            text-align: left;
          }
        `}
      </style>
    </>
  );
}
