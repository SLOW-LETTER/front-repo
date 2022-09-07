import CustomButton from "../../components/custom-button";
import CustomCarousel from "../../components/custom-carousel";
import Steps from "../../components/steps";
import { useDisclosure } from "@chakra-ui/react";
import CustomModal from "../../components/custom-modal";

export default function Template() {
  const modalOpen = useDisclosure();

  return (
    <div className="whole-container">
      <Steps />
      <CustomCarousel />
      <div className="button-container" onClick={modalOpen.onOpen}>
        <CustomButton buttonSize="" text="Write a letter" />
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
            width: 11rem;
            height: 3rem;
            top: 36rem;
            left: 66rem;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </div>
  );
}
