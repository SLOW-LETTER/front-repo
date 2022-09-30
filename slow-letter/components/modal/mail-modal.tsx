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
import { useStore } from "../zustand_hooks/store";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

type InputEvent = ChangeEvent<HTMLInputElement>;

export default function MailModal({ isOpen, onClose }: Props) {
  const letter = useStore((state: any) => state.letter);
  const saveLetter = useStore((state: any) => state.saveLetter);

  const [mailTitle, setMailTitle] = useState<string>(letter.title);
  const [mailBody, setMailBody] = useState<string[] | undefined>(letter.body);
  const [mailAttachments, setMailAttachments] = useState<File>();

  const router = useRouter();

  const onMailTitleChange = (event: InputEvent) => {
    setMailTitle(event.target.value);
  };

  const onMailBodyChange = () => {};

  const onMailAttachMentsChange = (event: InputEvent) => {
    if (event.target.files === null) {
      return;
    } else {
      setMailAttachments(event.target?.files[0]);
    }
  };

  
  useEffect(() => {
    const reader = new FileReader();
    if (typeof mailAttachments === "undefined") {
      return;
    } else {
      reader.onload = () => {
        console.log(reader.result);
      };
      reader.readAsDataURL(mailAttachments);
    }
  }, [mailAttachments])


  useEffect(() => {
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
              <div>
                <input
                  id="mail-title"
                  className="mail-title"
                  type="text"
                  placeholder="Title"
                  spellCheck="false"
                  value={mailTitle}
                  onChange={onMailTitleChange}
                ></input>
              </div>
              <hr />
              <div
                id="mail-body"
                className="mail-body"
                role="textbox"
                contentEditable="true"
                onInput={onMailBodyChange}
                spellCheck="false"
                style={{ overflow: "scroll", marginBottom: "5" }}
                suppressContentEditableWarning
              >
                {mailBody?.map((item, key) => (
                  <div key={key}>{item === "" ? <br /> : item}</div>
                ))}
              </div>
            </form>
            <div className="mail-attachments-view">
              <span>{mailAttachments?.name}</span>
            </div>

            <hr />
            <ModalFooter>
              <div className="mail-attachments-container">
                <label htmlFor="mail-attachments"></label>
                <input
                  id="mail-attachments"
                  className="mail-attachments"
                  type="file"
                  onChange={onMailAttachMentsChange}
                ></input>
              </div>
              <Button variant="ghost" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button
                id="form-submit-button"
                right="0"
                colorScheme="blue"
                type="submit"
                form="mailForm"
                onClick={(event) => {
                  event.preventDefault();
                  saveLetter(
                    mailTitle,
                    document.getElementById("mail-body")?.innerText.split("\n"),
                    mailAttachments
                  );
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

          .mail-attachments-view {
            width: fit;
            height: 2rem;
            border: 1px solid lightGray;
            border-radius: 10px;
            padding-left: 5px;
            margin-bottom: 5px;
          }
          .mail-attachments-view span {
            display: inline-block;
            width: fit;
            color: Gray;
            text-align: left;
            vertical-align: middle;
            overflow: hidden;
          }
          .mail-attachments-container {
            position: absolute;
            left: 2rem;
          }
          .mail-attachments-container:hover {
            opacity: 0.5;
          }
          .mail-attachments-container label {
            display: block;
            width: 2rem;
            height: 2rem;
            border-radius: 10px;
            background-image: url("/attachment-icon.svg");
            background-repeat: no-repeat;
            background-size: auto;
            cursor: pointer;
          }
          .mail-attachments-container input[type="file"] {
            position: absolute;
            width: 0;
            height: 0;
            padding: 0;
            overflow: hidden;
            border: 0;
          }
        `}
      </style>
    </>
  );
}
