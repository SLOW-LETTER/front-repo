import CustomButton from "../../components/custom-button";
import CustomCarousel from "../../components/custom-carousel";
import ProgressBar from "../../components/progressbar/progressbar";
import ProgressBarItem from "../../components/progressbar/progressbar-item";
import { useDisclosure } from "@chakra-ui/react";
import MailModal from "../../components/modal/mail-modal";

export default function Template() {
  const modalOpen = useDisclosure();
  return (
    <>
      <ProgressBar>
        <ProgressBarItem isActive text="Write" />
        <ProgressBarItem text="Additional" processIdx={2} />
        <ProgressBarItem text="Send" processIdx={3} />
      </ProgressBar>

      <CustomCarousel />

      <div className="button-container">
        <CustomButton text="Write a letter" onClick={modalOpen.onOpen} />
      </div>

      <MailModal isOpen={modalOpen.isOpen} onClose={modalOpen.onClose} />

      <style jsx>
        {`
          .button-container {
            position: absolute;
            bottom: 1rem;
            right: 2rem;
          }
        `}
      </style>
    </>
  );
}
