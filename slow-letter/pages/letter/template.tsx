import CustomButton from "../../components/button/custom-button";
import CustomCarousel from "../../components/carousel/custom-carousel";
import ProgressBar from "../../components/progressbar/progressbar";
import ProgressBarItem from "../../components/progressbar/progressbar-item";
import { useDisclosure } from "@chakra-ui/react";
import MailModal from "../../components/modal/mail-modal";
import { LetterTemplate, TemplateProps } from "../../components/type/type";

export default function Template({ templatesArr }: TemplateProps) {
  const modalOpen = useDisclosure();
  return (
    <>
      <div className="template-page-container w-full h-full flex flex-col items-center justify-center">
        <ProgressBar>
          <ProgressBarItem isActive text="Write" />
          <ProgressBarItem text="Additional" processIdx={2} />
          <ProgressBarItem text="Send" processIdx={3} />
        </ProgressBar>

        <CustomCarousel templatesArr={templatesArr} />

        <div className="button-container">
          <CustomButton text="Write a letter" onClick={modalOpen.onOpen} />
        </div>
      </div>

      <MailModal isOpen={modalOpen.isOpen} onClose={modalOpen.onClose} />

      <style jsx>
        {`
          .button-container {
            align-self: end;
            padding-top: 2rem;
            padding-right: 2rem;
          }
        `}
      </style>
    </>
  );
}

export async function getServerSideProps() {
  const data = await (await fetch(`http://backend:8080/api/v1/templates`))
    .json()
    .catch((error) => console.log("error:", error));
  const templatesArr: {templateUrl: string, templateId: number}[] = [];
  data.payload.map((item: LetterTemplate) => templatesArr.push({templateUrl: item.fileUrl, templateId: item.id}));
  return { props: { templatesArr } };
}
