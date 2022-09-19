import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

type InputEvent = ChangeEvent<HTMLInputElement>;

export default function MailModal({ isOpen, onClose }: Props) {
  const [mailTitle, setMailTitle] = useState("");
  const [mailBody, setMailBody] = useState("");
  const router = useRouter();

  const onMailTitleChange = (event: InputEvent) => {
    setMailTitle(event.target.value);
  };

  const onMailBodyChange = (event: InputEvent) => {
    setMailBody(event.target.innerText);
  };

  useEffect(() => {
    setMailTitle("");
    const eventHandler = (event: KeyboardEvent) => {
      if (event.code === "Enter" || event.keyCode === 13) {
        event.preventDefault();
      }
    };

    setTimeout(() => {
      document
        .getElementById("mail-title")
        ?.addEventListener("keydown", eventHandler);
    }, 1);

    return document
      .getElementById("mail-title")
      ?.removeEventListener("keydown", eventHandler);
  }, [isOpen]);

  return (
    <>
      <Modal
        closeOnOverlayClick={false}
        size={"lg"}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay backdropFilter="auto" backdropBlur="2px" />
        <ModalContent
          style={{ borderRadius: "10px", position: "absolute", top: "3rem" }}
        >
          <ModalHeader
            style={{
              backgroundColor: "#CCDDFF",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
          >
            New Mail
          </ModalHeader>
          <ModalCloseButton style={{ top: ".8rem" }} />
          <ModalBody>
            {/* action="/send-data-here" method="post" */}
            <form id="mailForm">
              <input
                id="mail-title"
                className="mail-title"
                type="text"
                placeholder="Title"
                value={mailTitle}
                onChange={onMailTitleChange}
              ></input>
              <hr />
              <div
                className="mail-body"
                role="textbox"
                contentEditable="true"
                onInput={onMailBodyChange}
                spellCheck="false"
                style={{ overflow: "scroll" }}
              ></div>
            </form>
            <ModalFooter>
              <Button variant="ghost" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button
                id="form-submit-button"
                colorScheme="blue"
                type="submit"
                form="mailForm"
                onClick={(event) => {
                  event.preventDefault();
                  if(mailTitle === "" || mailBody === "") {
                    alert("Fill a subject and body ");
                    return;
                  }
                  router.push("/letter/additional");
                }}
              >
                Save changes
              </Button>
            </ModalFooter>
          </ModalBody>
        </ModalContent>
      </Modal>
      <style jsx>
        {`
          .mail-title {
            width: 100%;
            height: 1.5rem;
            padding-bottom: 0.5rem;
          }
          .mail-title:focus {
            outline: none;
          }
          .mail-body {
            width: 100%;
            height: 20rem;
            padding-top: 0.5rem;
          }
          .mail-body:focus {
            outline: none;
          }
        `}
      </style>
    </>
  );
}
