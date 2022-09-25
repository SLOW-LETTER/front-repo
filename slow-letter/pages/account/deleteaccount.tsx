import {
  ChakraProvider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Button,
  useToast,
} from "@chakra-ui/react";
import Image from "next/image";
import SettingItems from "../../components/setting-Items";
import SettingModal from "../../components/setting-modal";

export default function DeleteAcc() {
  const {
    isOpen: isCheckOpen,
    onOpen: onCheckOpen,
    onClose: onCheckClose,
  } = useDisclosure();
  const toast = useToast();
  return (
    <>
      <div className="Page flex">
        <SettingModal />
        <div className="Page-container flex flex-col items-center space-y-4">
          <div className="Profile-container flex flex-row py-8">
            <Image
              className="Profile-pic round rounded-full "
              src="/drangon.png"
              width="100"
              height="100"
              border-radius="30%"
            ></Image>
            <div className="ProfileID flex flex-col py-5 px-7">
              <span>Email</span>
              <span>Example@example.com</span>
            </div>
          </div>
          <span>Are you sure you want to delete your account?</span>
          <span>
            Evething realted to your account will be removed permanently
          </span>
          <span>If you want to continue with deleting your account</span>
          <span>please enter your password below</span>
          <hr className="line py-2" />

          <SettingItems
            ID="Checkpsw"
            Hint="*************"
            Label="Password"
            Types="Password"
          />
          <hr className="line py-2" />
          <Button
            onClick={onCheckOpen}
            colorScheme="red"
            background="red"
            variant={"solid"}
          >
            Delete Account
          </Button>
        </div>
        {/* Check the password different modal pops out */}
        <Modal
          closeOnOverlayClick={false}
          blockScrollOnMount={false}
          isOpen={isCheckOpen}
          onClose={onCheckClose}
          isCentered
        >
          <ModalOverlay />
          <ModalContent maxH={800} maxW={600}>
            <ModalHeader fontSize={18} textAlign={"center"}>
              Your account has been successfully deleted. Before you go, please
              tell us why you are deleting your account so we can continue
              improving our service
            </ModalHeader>
            <ModalBody>
              <textarea
                className="feedback p-3  h-52 bg-gray-200 border-4 border-blue-300 rounded-lg"
                maxLength={100}
                placeholder="Please provide us with the feedback (Your can write upto 200 letters)  "
              ></textarea>
            </ModalBody>
            <ModalFooter>
              <Button
                onClick={() => {
                  toast({
                    title: "Successfully deleted!",
                    description: "Thank you for giving up feedback",
                    status: "success",
                    position: "bottom",
                    isClosable: true,
                    duration: 2000,
                  });
                  onCheckClose();
                  location.href = "/";
                }}
                color={"white"}
                backgroundColor={"blue"}
              >
                Submit
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
      <style jsx>
        {`
          .Page-container {
            position: absolute;
            top: 6em;
            right: 23em;
          }
          .Profile-pic {
            border-radius: 50%;
          }
          .line {
            width: 500px;
            text-align: left;
            margin-left: 0px;
          }
          .feedback:focus {
            outline: none;
          }
          .feedback {
            width: 550px;
          }
        `}
      </style>
    </>
  );
}
