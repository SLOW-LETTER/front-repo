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
import { apiURL } from "../apiURL";
import axios from "axios";
import { useTokenStore } from "../zustand_stores/tokenStore";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConfirmModal({ isOpen, onClose }: Props) {
  const router = useRouter();

  const userToken = useTokenStore((state: any) => state.userToken);

  const template = useStore((state: any) => state.template);
  const letter = useStore((state: any) => state.letter);
  const additional = useStore((state: any) => state.additional);

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
                const form = new FormData();
                form.append("receiverEmail", additional.receiver);
                form.append("boardingTime", "123");
                form.append("arrivalTime", "123");
                form.append("departureCountry", additional.departCountry);
                form.append("departureCity", additional.departCity);
                form.append("arrivalCountry", additional.arriveCountry);
                form.append("arrivalCity", additional.arriveCity);
                form.append("title", letter.title);
                form.append("content", JSON.stringify(letter.body));
                form.append("templateId", template.templateId);
                form.append("transportationId", "1");
                form.append("file", letter.file);
                axios
                  .post(`${apiURL}/letters`, form, {
                    headers: {
                      "X-AUTH-TOKEN": `${userToken}`,
                      "content-type": "multipart/form-data",
                    },
                  })
                  .then((res) => {
                    console.log(res);
                    // router.push("/ticket");
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
