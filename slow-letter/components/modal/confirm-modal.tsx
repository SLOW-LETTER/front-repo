import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useStore } from "../../components/zustand_hooks/store";
import { apiURL } from "../../components/apiURL";
import axios from "axios";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConfirmModal({ isOpen, onClose }: Props) {
  const router = useRouter();

  const letter = useStore((state: any) => state.letter);
  const additional = useStore((state: any) => state.additional);

  const form = new FormData();

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
                form.append("receiverEmail", additional.receiver);
                form.append("templeteId", "1");
                form.append("transportationId", "1");
                form.append("departureCountry", additional.departCountry);
                form.append("departureCity", additional.departCity);
                form.append("arrivalCountry", additional.arriveCountry);
                form.append("arrivalCity", additional.arriveCity);
                form.append("file", letter.attachments);
                axios
                  .post(`${apiURL}/letters`, form, {
                    headers: {
                      token:
                        "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0QHRlc3QuY29tIiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImlhdCI6MTY2NDUxMzAzNiwiZXhwIjoxNjY0NTE0ODM2fQ.YJqQSmMJl3oyaEUXJiE595ls2zbRv7anAZoJN2__4ho",
                      "Content-Type": "multipart/form-data",
                    },
                  })
                  .then((res) => {
                    console.log(res);
                    router.push("/ticket");
                  })
                  .catch((err) => {
                    console.log(err);
                    return;
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
