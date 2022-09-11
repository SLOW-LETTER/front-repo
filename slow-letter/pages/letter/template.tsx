import CustomButton from "../../components/custom-button";
import CustomCarousel from "../../components/custom-carousel";
import {Steps, Step} from "../../components/steps";
import { useDisclosure } from "@chakra-ui/react";
import CustomModal from "../../components/custom-modal";

export default function Template() {
  const modalOpen = useDisclosure();

  return (
    <div className="whole-container">
      <Steps>
        <Step isActive text="Write" />
        <Step text="Additional" processIdx={2}/>
        <Step text="Send" processIdx={3} />
      </Steps>
      <CustomCarousel />
      <div className="button-container">
        <CustomButton text="Write a letter" onClick={modalOpen.onOpen} />
      </div>
      <CustomModal
        isOpen={modalOpen.isOpen}
        onOpen={modalOpen.onOpen}
        onClose={modalOpen.onClose}
      />
      <style jsx>
        {`
          .whole-container {
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .button-container {
            position: absolute;
            width: 100%;
            bottom: 1rem;
            right: 2rem;
            display: flex;
            align-items: center;
            justify-content: right;
            
          }
        `}
      </style>
    </div>
  );
}
