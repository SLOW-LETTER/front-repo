import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useStore } from "../zustand_stores/store";
import axios from "axios";
import { useEffect, useState } from "react";
import { koTimeHandler } from "../../function/timeHandler/koTime";
import { usTimeHandler } from "../../function/timeHandler/usTime";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConfirmModal({ isOpen, onClose }: Props) {
  const router = useRouter();

  const template = useStore((state: any) => state.template);
  const letter = useStore((state: any) => state.letter);
  const additional = useStore((state: any) => state.additional);
  const [transportationId, setTransportationId] = useState(0);
  const [transportationVelocity, setTransportationVelocity] = useState(0);

  const resetTemplate = useStore((state: any) => state.resetTemplate);
  const resetLetter = useStore((state: any) => state.resetLetter);
  const resetAdditional = useStore((state: any) => state.resetAdditional);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/transportations`).then((res) => {
      res.data.payload.map((item: any) => {
        if (item.name === additional.transportation) {
          setTransportationId(item.id);
          setTransportationVelocity(item.velocity);
        }
      });
    });
  }, []);

  return (
    <>
      <Modal
        closeOnOverlayClick={true}
        size={"sm"}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay backdropFilter="auto" backdropBlur="2px" />
        <ModalContent
          style={{ borderRadius: "10px", position: "absolute", top: "10rem" }}
        >
          <ModalBody paddingTop={"2rem"}>
            <div className="confirm-body">
              <span className="confirm-body-title">
                Are you sure
                <br /> you want to send a letter?
              </span>
              <span className="confirm-body-subtitle">
                If you answer yes, you will send letter.
                <br /> You won’t delete letter or edit it, think about it
              </span>
            </div>
          </ModalBody>
          <ModalFooter style={{ display: "flex", justifyContent: "center" }}>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              colorScheme="blue"
              onClick={() => {
                const depart = new Date();
                const arrive = new Date();
                arrive.setDate(depart.getDate() + 1);
                const form = new FormData();
                form.append("receiverEmail", additional.receiver);
                form.append("boardingTime", koTimeHandler());
                form.append("arrivalTime", usTimeHandler());
                form.append("departureCountry", additional.departCountry);
                form.append("departureCity", additional.departCity);
                form.append("arrivalCountry", additional.arriveCountry);
                form.append("arrivalCity", additional.arriveCity);
                form.append("title", letter.title);
                form.append("content", JSON.stringify(letter.body));
                form.append("templateId", template.templateId);
                form.append("transportationId", transportationId.toString());
                form.append("file", letter.file);
                axios
                  .post(`${process.env.NEXT_PUBLIC_API_URL}/letters`, form, {
                    headers: {
                      "content-type": "multipart/form-data",
                    },
                  })
                  .then((res) => {
                    resetTemplate()
                    resetLetter()
                    resetAdditional()
                    router.push("/mypage/tickets");
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              Send
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <style jsx>
        {`
          .confirm-body {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
          }
          .confirm-body-title {
            font-weight: bold;
            font-size: 1.5rem;
            text-align: center;
          }
          .confirm-body-subtitle {
            font-size: 0.5rem;
            text-align: center;
          }
        `}
      </style>
    </>
  );
}
