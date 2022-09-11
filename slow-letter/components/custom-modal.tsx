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

interface Props {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export default function CustomModal({ isOpen, onOpen, onClose }: Props) {
  return (
    <>
      <Modal
        closeOnOverlayClick={false}
        size={"lg"}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay backdropFilter='auto' backdropBlur='2px' />
        <ModalContent style={{ borderRadius: "10px" }}>
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
            <input className="mail-title" placeholder="Title"></input>
            <hr />
            <div
              className="mail-body"
              role="textbox"
              contentEditable="true"
            ></div>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="blue">Save changes</Button>
          </ModalFooter>
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
